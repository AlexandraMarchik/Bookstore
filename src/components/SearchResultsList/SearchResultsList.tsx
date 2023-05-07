import React, { FC } from "react";

import styles from "./SearchResultsList.module.scss";
import { BookForm } from "src/components/BookCard/types";
import { BookCartType } from "src/utils/@globalTypes";
import BookCard from "src/components/BookCard";

type SearchCardListProps = {
  cardsList: BookCartType[];
};

const SearchResultsList: FC<SearchCardListProps> = ({ cardsList }) => {
  return cardsList?.length > 0 ? (
    <div className={styles.resultsList}>
      {cardsList.map((result, id) => {
        return (
          <BookCard card={result} key={result.isbn13} form={BookForm.Search} />
        );
      })}
    </div>
  ) : null;
};
export default SearchResultsList;
