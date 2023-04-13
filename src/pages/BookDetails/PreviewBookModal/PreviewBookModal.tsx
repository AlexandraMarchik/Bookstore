import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import styles from "./PreviewBookModal.module.scss";
import Modal from "../../../components/Modal";
import {
  BooksSelectors,
  setPreviewBook,
  setPreviewBookVisibility,
} from "src/redux/reducer/booksSlice";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";


const PreviewBookModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(BooksSelectors.getVisibleModal);
  const previewBook = useSelector(BooksSelectors.getPreviewBook);

  const onClose = () => {
    dispatch(setPreviewBook(null));
    dispatch(setPreviewBookVisibility(false));
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const goToNextPage = () => setPageNumber(pageNumber + 1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <div className={styles.container}>
      <Modal isVisible={isVisible} onClose={onClose}>
        <div className={styles.buttonContainer}>
          <Button
            type={ButtonType.Primary}
            onClick={goToPrevPage}
            title={"Prev"}
            className={styles.buttonPrev}
          />
          <Button
            type={ButtonType.Primary}
            onClick={goToNextPage}
            title={"Next"}
            className={styles.buttonPrev}
          />
        </div>
        <Document file={previewBook} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </Modal>
    </div>
  );
};

export default PreviewBookModal;
