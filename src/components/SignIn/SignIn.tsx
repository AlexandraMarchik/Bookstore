import React, { useState } from "react";

import Input from "src/components/Input";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import styles from "./SignIn.module.scss";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onSignInClick = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div>
          <Input
            value={email}
            onChange={onChangeEmail}
            type={"text"}
            title="Email"
            placeholder="Your email"
            inputClassName={styles.input}
          />
          <Input
            value={password}
            onChange={onChangePassword}
            type={"password"}
            title="Password"
            placeholder="Your password"
            inputClassName={styles.input}
          />
          <div className={styles.forgotPassword}>Forgot password?</div>
          <div >
            <Button
              title={"Sign In"}
              onClick={onSignInClick}
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
