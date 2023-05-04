import React, { useEffect, useMemo, useState } from "react";
import { getAuth, confirmPasswordReset } from "firebase/auth";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./NewPassword.module.scss";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import { RoutesList } from "src/pages/Router";

const NewPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const oobCode = searchParams.get("oobCode");

  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };
  const onBlurPassword = () => {
    setPasswordTouched(true);
  };
  const onConfirmPasswordButtonClick =
    (oobCode: string | null, newPassword: string) => () => {
      const auth = getAuth();
      if (oobCode) {
        confirmPasswordReset(auth, oobCode, newPassword)
          .then(() => {
            navigate(RoutesList.Auth);
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    };

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
    return passwordError.length === 0 && passwordTouched;
  }, [passwordError, passwordTouched]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>new password</div>
        <div className={styles.inputContainer}>
          <Input
            value={password}
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            errorText={passwordError}
            type={"password"}
            title="Password"
            placeholder="Your password"
            inputClassName={styles.input}
          />
          <Input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            onBlur={onBlurPassword}
            errorText={passwordError}
            type={"password"}
            title="Confirm password"
            placeholder="Confirm password"
            inputClassName={styles.input}
          />
        </div>
        <div>
          <Button
            title={"set password"}
            onClick={onConfirmPasswordButtonClick(oobCode, password)}
            type={ButtonType.Primary}
            className={styles.button}
            disabled={!isValid}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
