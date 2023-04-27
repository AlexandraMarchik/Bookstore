import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import ReactPaginate from "react-paginate";

import styles from "./Search.module.scss";
import Title from "src/components/Title";
import SearchCardList from "src/components/SearchCardList/SearchCardList";
import { BooksSelectors, getSearchBooks } from "src/redux/reducer/booksSlice";
import Loader from "src/components/Loader";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const searchValue = useSelector(BooksSelectors.getSearchValue);
  const cardList = useSelector(BooksSelectors.getSearchedBooks);
  const isLoading = useSelector(BooksSelectors.getAllBooksLoading);
  const postsCount = useSelector(BooksSelectors.getTotalCount);
  const pagesCount = Math.ceil(+postsCount / 10);

  useEffect(() => {
    dispatch(getSearchBooks({ query: searchValue, page: currentPage }));
    if (searchValue && currentPage) {
      navigate(`/search/${searchValue}/${currentPage}`);
    }
  }, [searchValue, currentPage]);

  const onPageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div>
      <div className={styles.textContainer}>
        '<Title title={searchValue} />' Search results
      </div>
      <div className={styles.countSearchedBooks}>Found {postsCount} books</div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchCardList cardsList={cardList} />
        </>
      )}
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
    </div>
  );
};

export default Search;
