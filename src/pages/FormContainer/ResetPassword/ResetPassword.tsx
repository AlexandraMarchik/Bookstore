import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import styles from "./ResetPassword.module.scss";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import { RoutesList } from "src/pages/Router";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const goToHomeButtonClick = () => {
    navigate(RoutesList.Home);
  };
  const onBlurEmail = () => {
    setEmailTouched(true);
  };

  const onResetClick = (email: string) => () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/auth",
    })
      .then(() => {
        setResetPassword(true);
        console.log("Password reset email sent successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    if (email.length === 0 && emailTouched) {
      setEmailError("Email is required field");
    } else {
      setEmailError("");
    }
  }, [email, emailTouched]);

  const isValid = useMemo(() => {
    return emailError.length === 0 && emailTouched;
  }, [emailError, emailTouched]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}> reset password</div>
        {resetPassword && (
          <div className={styles.email}>
            You will receive an email <span>{email}</span> with a link to reset
            your password!
          </div>
        )}
        <div className={styles.inputContainer}>
          <Input
            value={email}
            onChange={onChangeEmail}
            errorText={emailError}
            onBlur={onBlurEmail}
            type={"text"}
            title="Email"
            placeholder="Your email"
            inputClassName={styles.input}
          />
        </div>
        <div>
          {!resetPassword && (
            <Button
              title={"reset"}
              disabled={!isValid}
              onClick={onResetClick(email)}
              type={ButtonType.Primary}
              className={styles.button}
            />
          )}
          {resetPassword && (
            <Button
              title={"go to home"}
              onClick={goToHomeButtonClick}
              type={ButtonType.Primary}
              className={styles.button}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
