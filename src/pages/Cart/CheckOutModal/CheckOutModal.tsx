import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./CheckOutModal.module.scss";
import Modal from "src/components/Modal";
import {
  BooksSelectors,
  setPreviewBookVisibility,
} from "src/redux/reducer/booksSlice";
import { CheckIcon } from "src/assets/icon";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import { RoutesList } from "src/pages/Router";

const CheckOutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVisible = useSelector(BooksSelectors.getVisibleModal);

  const onClose = () => {
    dispatch(setPreviewBookVisibility(false));
  };
  const onGoHomeButtonClick = () => {
    navigate(RoutesList.Home);
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.icon}>
        <CheckIcon />
        </div>
        <div className={styles.text}> Your order is complete!</div>
        <Button
          type={ButtonType.Primary}
          onClick={onGoHomeButtonClick}
          title={"Go to home"}
          className={styles.button}
        />
      </div>
    </Modal>
  );
};

export default CheckOutModal;
