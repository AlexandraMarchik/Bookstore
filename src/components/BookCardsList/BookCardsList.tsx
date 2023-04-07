import React, {FC} from "react";
import BookCard from "../BookCard";

import styles from "./BookCardsList.module.scss";
import EmptyState from "src/components/EmptyState";
import {BookCardType, CardNumbers} from "src/components/BookCard/types";

type CardsListProps = {
  cardsList: BookCardType[];
};
const BookCardsList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      <BookCard card={cardsList[0]} number={CardNumbers.First} />
      <BookCard card={cardsList[1]} number={CardNumbers.Second} />
      <BookCard card={cardsList[2]} number={CardNumbers.Third} />
      <BookCard card={cardsList[3]} number={CardNumbers.Fourth} />
      <BookCard card={cardsList[4]} number={CardNumbers.Second} />
      <BookCard card={cardsList[5]} number={CardNumbers.First} />
      <BookCard card={cardsList[6]} number={CardNumbers.First} />
      <BookCard card={cardsList[7]} number={CardNumbers.Fourth} />
      <BookCard card={cardsList[8]} number={CardNumbers.Third} />
   </div>
  ) : (
    <EmptyState
      title={"Sorry, there's no posts"}
      description={"Try to check out another category"}
    />
  );
};

export default BookCardsList;
