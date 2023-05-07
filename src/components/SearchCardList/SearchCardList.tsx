import React, { FC } from "react";

import styles from "./SearchCardList.module.scss";
import {BookCartType} from "src/utils/@globalTypes";
import EmptyState from "src/components/EmptyState";
import BookCard from "src/components/BookCard";


type SearchCardListProps = {
  cardsList: BookCartType[];
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
