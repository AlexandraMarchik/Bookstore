import React from "react";
import {useDispatch, useSelector} from "react-redux";

import Modal from "../../../components/Modal";

import {BooksSelectors, setPreviewBook, setPreviewBookVisibility} from "src/redux/reducer/booksSlice";
import BookCard from "src/components/BookCard";
import BookDetails from "src/pages/BookDetails";


const PreviewBookModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(BooksSelectors.getVisibleModal);
  const previewBook = useSelector(BooksSelectors.getPreviewBook);

  const onClose = () => {
    dispatch(setPreviewBook(null));
    dispatch(setPreviewBookVisibility(false));
  };
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      {previewBook ? (
        <BookDetails/>
      ) : null}
    </Modal>
  );
};

export default PreviewBookModal;
