import React, { useState } from "react";

import styles from "./Account.module.scss";
import FormContainer from "src/pages/FormContainer";
import Input from "src/components/Input";
import { AuthUser } from "src/hooks/AuthUser";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import {useNavigate} from "react-router-dom";
import {RoutesList} from "src/pages/Router";
import { setPreviewBookVisibility} from "src/redux/reducer/booksSlice";
import {useDispatch} from "react-redux";
import SaveChangesModal from "src/pages/FormContainer/Account/SaveChangesModal";

const Account = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isAuth, email } = AuthUser();
  const userName = localStorage.getItem("savedUserName");

  const [name, setName] = useState(userName);
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState("");

  const onChangeEmail = (value: string) => {
    setUserEmail(value);
  };
  const onChangeName = (value: string) => {
    setName(value);
  };
  const onSaveChangesButtonClick = ()=>{
        dispatch(setPreviewBookVisibility(true));
  }

  const onCancelButtonClick =()=>{
    navigate(RoutesList.Home)
  }

  return (
    <div className={styles.container}>
      <FormContainer title={"Account"} />
      <div className={styles.profileContainer}>
        <div className={styles.text}> profile </div>
        <div className={styles.inputContainer}>
          {name && (
            <Input
              value={name}
              type={"text"}
              onChange={onChangeName}
              title={"Name"}
            />
          )}
          {userEmail && (
            <Input
              value={userEmail}
              type={"text"}
              onChange={onChangeEmail}
              title={"Email"}
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
            />
          </div>
          <div className={styles.newPasswordInput}>
            <Input
              value={userPassword}
              type={"password"}
              onChange={() => {}}
              title={"New password"}
              placeholder={"New password"}
            />
            <Input
              value={userPassword}
              type={"password"}
              onChange={() => {}}
              title={"Confirm new password"}
              placeholder={"Confirm new password"}
            />
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.buttonContainer}>
          <Button
            title={"Save changes"}
            type={ButtonType.Primary}
            onClick={onSaveChangesButtonClick}
            className={styles.saveButton}
          />
          <Button
            title={"cancel"}
            type={ButtonType.Primary}
            onClick={onCancelButtonClick}
            className={styles.cancelButton}
          />
        </div>
      </div>
      <SaveChangesModal/>
    </div>
  );
};

export default Account;
