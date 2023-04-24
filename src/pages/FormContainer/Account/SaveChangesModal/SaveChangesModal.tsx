import React from "react";

import styles from './SaveChangesModal.module.scss'
import { useDispatch, useSelector } from "react-redux";
import Modal from "src/components/Modal";
import {BooksSelectors, setPreviewBookVisibility} from "src/redux/reducer/booksSlice";



const SaveChangesModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(BooksSelectors.getVisibleModal);

  const onClose = () => {
    dispatch(setPreviewBookVisibility(false));
  };
  return (
      <Modal isVisible={isVisible} onClose={onClose}>
          <div className={styles.cont}>
       <div className={styles.text}>Changes successfully saved</div>
          </div>
          </Modal>
  );
};

export default SaveChangesModal;
