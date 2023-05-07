import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./Account.module.scss";

import { ButtonType } from "src/components/Button/Button";
import { RoutesList } from "src/pages/Router";
import { AuthUser } from "src/hooks/AuthUser";
import { setPreviewBookVisibility } from "src/redux/reducer/booksSlice";
import { removeUser } from "src/redux/reducer/userSlice";
import SaveChangesModal from "src/pages/FormContainer/Account/SaveChangesModal";
import FormContainer from "src/pages/FormContainer";
import Button from "src/components/Button";
import Input from "src/components/Input";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = AuthUser();

  const userName = localStorage.getItem("savedUserName");

  const [name, setName] = useState(userName);
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState("");

  const isMobile = useMediaQuery({ query: "(max-width: 479px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const onLogoutClick = () => {
    dispatch(removeUser());
    navigate(RoutesList.Auth);
  };
  const onChangeEmail = (value: string) => {
    setUserEmail(value);
  };
  const onChangeName = (value: string) => {
    setName(value);
  };
  const onSaveChangesButtonClick = () => {
    dispatch(setPreviewBookVisibility(true));
  };
  const onCancelButtonClick = () => {
    navigate(RoutesList.Home);
  };

  return (
    <div className={styles.container}>
      <FormContainer title={"Account"} />
      <div className={styles.account}>
        <div className={styles.profileContainer}>
          <div className={styles.text}> profile </div>
          <div className={styles.inputContainer}>
            {name && (
              <Input
                value={name}
                type={"text"}
                onChange={onChangeName}
                title={"Name"}
                inputClassName={styles.input}
              />
            )}
            {userEmail && (
              <Input
                value={userEmail}
                type={"text"}
                onChange={onChangeEmail}
                title={"Email"}
                inputClassName={styles.input}
              />
            )}
          </div>
        </div>
        <div className={styles.passwordContainer}>
          <div>
            <div className={styles.text}>password</div>
            <div className={styles.passwordInput}>
              <Input
                value={userPassword}
                type={"password"}
                onChange={() => {}}
                title={"Password"}
                inputClassName={styles.input}
              />
            </div>
            <div className={styles.newPasswordInput}>
              <Input
                value={userPassword}
                type={"password"}
                onChange={() => {}}
                title={"New password"}
                placeholder={"New password"}
                inputClassName={styles.input}
              />
              <Input
                value={userPassword}
                type={"password"}
                onChange={() => {}}
                title={"Confirm new password"}
                placeholder={"Confirm new password"}
                inputClassName={styles.input}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <Button
              title={"Save changes"}
              type={ButtonType.Primary}
              onClick={onSaveChangesButtonClick}
              className={styles.accountButton}
            />
            <Button
              title={"cancel"}
              type={ButtonType.Primary}
              onClick={onCancelButtonClick}
              className={styles.cancelButton}
            />
          </div>
          <div>
            {!isMobile && !isTablet && (
              <Button
                title={"log out"}
                type={ButtonType.Primary}
                onClick={onLogoutClick}
                className={styles.accountButton}
              />
            )}
          </div>
        </div>
      </div>
      <SaveChangesModal />
    </div>
  );
};

export default Account;
