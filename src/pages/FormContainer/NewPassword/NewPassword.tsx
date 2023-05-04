import React, { useState } from "react";

import styles from "./NewPassword.module.scss";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>new password</div>
        <div className={styles.inputContainer}>
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
        </div>
        <div>
          <Button
            title={"set password"}
            onClick={() => {}}
            type={ButtonType.Primary}
            className={styles.button}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
