import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

import Input from "src/components/Input";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import styles from "./SignUp.module.scss";
import { setUser } from "src/redux/reducer/userSlice";
import { RoutesList } from "src/pages/Router";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeName = (value: string) => {
    setName(value);
    localStorage.setItem("savedUserName", value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };
  const onBlurEmail = () => {
    setEmailTouched(true);
  };
  const onBlurPassword = () => {
    setPasswordTouched(true);
  };
  const onBlurName = () => {
    setNameTouched(true);
  };

  const onSignUpClick = (email: string, password: string) => () => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(RoutesList.Home);
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (name.length === 0 && nameTouched) {
      setNameError("Name is required field");
    } else {
      setNameError("");
    }
  }, [name, nameTouched]);
  useEffect(() => {
    if (email.length === 0 && emailTouched) {
      setEmailError("Email is required field");
    } else {
      setEmailError("");
    }
  }, [email, emailTouched]);
  useEffect(() => {
    if (passwordTouched) {
      if (password !== confirmPassword) {
        setPasswordError("Passwords must match");
      } else if (password.length === 0 || confirmPassword.length === 0) {
        setPasswordError("Password is required field");
      } else {
        setPasswordError("");
      }
    }
  }, [confirmPassword, password, passwordTouched]);

  const isValid = useMemo(() => {
    return (
      nameError.length === 0 &&
      emailError.length === 0 &&
      passwordError.length === 0 &&
      nameTouched &&
      emailTouched &&
      passwordTouched
    );
  }, [
    nameError,
    emailError,
    passwordError,
    nameTouched,
    emailTouched,
    passwordTouched,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.inp}>
          <Input
            value={name}
            onChange={onChangeName}
            onBlur={onBlurName}
            type={"text"}
            title="Name"
            placeholder="Your name"
            inputClassName={styles.input}
            errorText={nameError}
          />
          <Input
            value={email}
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
            type={"text"}
            title="Email"
            placeholder="Your email"
            inputClassName={styles.input}
            errorText={emailError}
          />
          <Input
            value={password}
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            type={"password"}
            title="Password"
            placeholder="Your password"
            inputClassName={styles.input}
            errorText={passwordError}
          />
          <Input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            onBlur={onBlurPassword}
            type={"password"}
            title="Confirm password"
            placeholder="Confirm password"
            inputClassName={styles.input}
            errorText={passwordError}
          />
          <div className={styles.button}>
            <Button
              title={"Sign Up"}
              onClick={onSignUpClick(email, password)}
              type={ButtonType.Primary}
              className={styles.btn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
