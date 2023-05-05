import React, { useEffect, useMemo, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "./SignIn.module.scss";
import { ButtonType } from "src/components/Button/Button";
import { RoutesList } from "src/pages/Router";
import { setUser } from "src/redux/reducer/userSlice";
import Input from "src/components/Input";
import Button from "src/components/Button";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onBlurEmail = () => {
    setEmailTouched(true);
  };
  const onBlurPassword = () => {
    setPasswordTouched(true);
  };
  const onSignInClick = (email: string, password: string) => () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            name: user.displayName,
          })
        );
        navigate(RoutesList.Home);
      })
      .catch(() => alert("Invalid user!"));
  };
  useEffect(() => {
    if (email.length === 0 && emailTouched) {
      setEmailError("Email is required field");
    } else {
      setEmailError("");
    }
  }, [email, emailTouched]);

  useEffect(() => {
    if (password.length === 0 && emailTouched) {
      setPasswordError("Password is required field");
    } else {
      setPasswordError("");
    }
  }, [password, passwordTouched]);

  const isValid = useMemo(() => {
    return emailError.length === 0 && passwordError.length === 0;
  }, [emailError, passwordError]);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.inp}>
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
            onBlur={onBlurPassword}
            onChange={onChangePassword}
            type={"password"}
            title="Password"
            placeholder="Your password"
            inputClassName={styles.input}
            errorText={passwordError}
          />
          <NavLink to={RoutesList.Reset} className={styles.forgotPassword}>
            Forgot password?
          </NavLink>
          <div>
            <Button
              title={"Sign In"}
              disabled={!isValid}
              onClick={onSignInClick(email, password)}
              type={ButtonType.Primary}
              className={styles.button}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
