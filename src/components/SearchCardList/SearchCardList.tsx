import React, { FC, useEffect } from "react";

import EmptyState from "src/components/EmptyState";
import styles from "./SearchCardList.module.scss";
import BookCard from "src/components/BookCard";
import { BookCardType } from "src/components/BookCard/types";

type SearchCardListProps = {
  cardsList: BookCardType[];
};
const SearchCardList: FC<SearchCardListProps> = ({ cardsList }) => {

  return cardsList?.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item) => {
        return <BookCard card={item} key={item.isbn13} />;
      })}
    </div>
  ) : (
    <EmptyState
      title="Sorry, there's no books"
      description="Try to use another search request"
    />
  );
};
export default SearchCardList;
