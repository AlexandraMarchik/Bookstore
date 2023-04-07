import React, { useState } from "react";

import Input from "src/components/Input";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeName = (value: string) => {
    setName(value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };
  const onSignInClick = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div>
          <Input
            value={name}
            onChange={onChangeName}
            type={"text"}
            title="Name"
            placeholder="Your name"
            inputClassName={styles.input}
          />
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
          <Input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            type={"password"}
            title="Confirm password"
            placeholder="Confirm password"
            inputClassName={styles.input}
          />
          <div className={styles.button}>
            <Button
              title={"Sign Up"}
              onClick={onSignInClick}
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
