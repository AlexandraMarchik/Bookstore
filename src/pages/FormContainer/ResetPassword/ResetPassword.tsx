import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import styles from "./ResetPassword.module.scss";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import { AuthUser } from "src/hooks/AuthUser";
import { RoutesList } from "src/pages/Router";

const ResetPassword = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [resetPassword, setResetPassword] = useState(false);

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const goToHomeButtonClick = () => {
    navigate(RoutesList.Home);
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}> reset password</div>
        {resetPassword && (
          <div className={styles.email}>
            You will receive an email with a link to reset your password!
          </div>
        )}
        <div className={styles.inputContainer}>
          <Input
            value={email}
            onChange={onChangeEmail}
            type={"text"}
            title="Email"
            placeholder="Your email"
            inputClassName={styles.input}
          />
        </div>
        <div>
          {!resetPassword &&  (
            <Button
              title={"reset"}
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
