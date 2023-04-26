import React, { FC } from "react";

import styles from "./FavouritesCardList.module.scss";
import EmptyState from "src/components/EmptyState";
import { BookCartType, BookForm} from "src/components/BookCard/types";
import BookCard from "src/components/BookCard";

type FavouritesCardListProps = {
  booksList: BookCartType[];
};
const FavouritesCardList: FC<FavouritesCardListProps> = ({ booksList }) => {

  return booksList.length > 0 ? (
    <div className={styles.container}>
      {booksList.map((item, index) => {
        return (
          <BookCard card={item} form={BookForm.Favourite} key={item.isbn13} />
        );
      })}
    </div>
  ) : (
    <EmptyState
      title="Sorry, there's no favorites books"
      description="Try to add books "
    />
  );
};
export default FavouritesCardList;
