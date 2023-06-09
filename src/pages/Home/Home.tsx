import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Home.module.scss";
import { BooksSelectors, getAllBooks } from "src/redux/reducer/booksSlice";
import Title from "../../components/Title";
import BookCardsList from "../../components/BookCardsList";
import Subscribe from "src/components/Subscribe";
import Loader from "src/components/Loader";

const Home = () => {
  const dispatch = useDispatch();

  const booksList = useSelector(BooksSelectors.getAllBooks);
  const isLoading = useSelector(BooksSelectors.getAllBooksLoading);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
      <div className={styles.container}>
        <Title title={"New Releases Books"} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BookCardsList cardsList={booksList} />
          </>
        )}
         <div><Subscribe /></div>
      </div>

  );
};
export default Home;
