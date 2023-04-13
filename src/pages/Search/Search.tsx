import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";
import Title from "src/components/Title";
import SearchCardList from "src/components/SearchCardList/SearchCardList";
import { BooksSelectors } from "src/redux/reducer/booksSlice";
import Loader from "src/components/Loader";

const Search = () => {

  const searchValue = useSelector(BooksSelectors.getSearchValue);
  const cardList = useSelector(BooksSelectors.getSearchedBooks);
  const isLoading = useSelector(BooksSelectors.getAllBooksLoading);

  return (
    <div>
      <div className={styles.textContainer}>
        '<Title title={searchValue} />' Search results
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchCardList cardsList={cardList} />
        </>
      )}
    </div>
  );
};

export default Search;
