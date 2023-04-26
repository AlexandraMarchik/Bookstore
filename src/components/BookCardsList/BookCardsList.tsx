import React, { FC } from "react";
import BookCard from "../BookCard";

import styles from "./BookCardsList.module.scss";
import EmptyState from "src/components/EmptyState";
import { BookCartType } from "src/components/BookCard/types";

type CardsListProps = {
  cardsList: BookCartType[];
};
const BookCardsList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item, index) => {
        return <BookCard card={item} key={item.isbn13} />;
      })}
    </div>
  ) : (
    <EmptyState
      title={"Sorry, there's no books"}
      description={"Try to check out another category"}
    />
  );
};

export default BookCardsList;
