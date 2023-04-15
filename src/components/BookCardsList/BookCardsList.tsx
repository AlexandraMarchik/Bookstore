import React, {FC} from "react";
import BookCard from "../BookCard";

import styles from "./BookCardsList.module.scss";
import EmptyState from "src/components/EmptyState";
import {BookCardType} from "src/components/BookCard/types";

type CardsListProps = {
  cardsList: BookCardType[];
};
const BookCardsList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
        {cardsList.map((item,index) => {
            if(index > 0 && index < 13) {
                return <BookCard card={item} key={item.isbn13}/>
            }
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
