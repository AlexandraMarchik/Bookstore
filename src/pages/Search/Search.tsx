import React, { KeyboardEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";

import styles from "./Search.module.scss";
import Title from "src/components/Title";
import SearchCardList from "src/components/SearchCardList/SearchCardList";
import {
  BooksSelectors,
  getSearchBooks,
  setSearchedValueBooks,
} from "src/redux/reducer/booksSlice";
import Loader from "src/components/Loader";
import Input from "src/components/Input";
import { CloseIconModal } from "src/assets/icon";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState("");
  const searchValue = useSelector(BooksSelectors.getSearchValue);
  const cardList = useSelector(BooksSelectors.getSearchedBooks);
  const isLoading = useSelector(BooksSelectors.getAllBooksLoading);
  const postsCount = useSelector(BooksSelectors.getTotalCount);
  const pagesCount = Math.ceil(+postsCount / 10);
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    dispatch(getSearchBooks({ query: searchValue, page: currentPage }));
    if (searchValue && currentPage) {
      navigate(`/search/${searchValue}/${currentPage}`);
    }
  }, [searchValue, currentPage]);

  const onPageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearchButtonClick();
    }
  };
  const onSearchButtonClick = () => {
    dispatch(setSearchedValueBooks(searchInputValue));
  };
  const onSearchValue = (value: string) => {
    setSearchInputValue(value);
  };
  const onClearInputClick = () => {
    setSearchInputValue("");
    dispatch(setSearchedValueBooks(""));
  };

  return (
    <div>
      {isTablet && (
        <>
          <div className={styles.searchInput}>
            <Input
              value={searchInputValue}
              onChange={onSearchValue}
              inputClassName={styles.input}
              type={"text"}
              onKeyDown={onKeyDown}
            />
            <div className={styles.searchBtn} onClick={onClearInputClick}>
              <CloseIconModal />
            </div>
          </div>
        </>
      )}
      <div className={styles.textContainer}>
        '<Title title={searchValue} className={styles.searchResultsText} />'
        Search results
      </div>
      <div className={styles.countSearchedBooks}>Found {postsCount} books</div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchCardList cardsList={cardList} />
        </>
      )}
      {searchValue && (
        <div className={styles.pageContainer}>
          <ReactPaginate
            pageCount={pagesCount}
            onPageChange={onPageChange}
            containerClassName={styles.pagesContainer}
            pageClassName={styles.pageNumber}
            breakClassName={styles.pageNumber}
            breakLinkClassName={styles.linkPage}
            activeLinkClassName={styles.linkPage}
            pageLinkClassName={styles.linkPage}
            activeClassName={styles.activePageNumber}
            nextClassName={classNames(styles.arrowButton, {
              [styles.blockedButton]: currentPage === pagesCount,
            })}
            previousClassName={classNames(styles.arrowButton, {
              [styles.blockedButton]: currentPage === 1,
            })}
            previousLinkClassName={styles.linkPage}
            nextLinkClassName={styles.linkPage}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
