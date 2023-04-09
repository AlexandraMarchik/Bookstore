import React, { FC, useEffect, useState } from "react";
import {BookForm, CardProps} from "src/components/BookCard/types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./BookCard.module.scss";
import classNames from "classnames";
import { LikeIcon } from "src/assets/icon";
import {
  BooksSelectors,
  setFavoritesBooks,
} from "src/redux/reducer/booksSlice";

const BookCard: FC<CardProps> = ({ card, form, className }) => {
  const { image, title, subtitle, price, isbn13 } = card;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [color, setColor] = useState("");
  const singleBook = useSelector(BooksSelectors.getSingleBook);
  const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);
  const favoritesIndex = favouritesList.findIndex(
    (books) => books.isbn13 === singleBook?.isbn13
  );

  const colors = ["#D7E4FD", "#CAEFF0", "#FEE9E2", "#F4EEFD"];
  const isFavorites = form === BookForm.Favorite
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const onLikeIconClick = () => {
    if (singleBook) {
      dispatch(setFavoritesBooks(singleBook));
    }
  };
  const onTitleClick = () => {
    navigate(`/books/${isbn13}`);
  };
  useEffect(() => {
    setColor(randomColor);
  }, [randomColor]);

  return (
    <div
      className={classNames(styles.container, {
        [styles.favoritesContainer]: isFavorites,
      })}
    >
      <div
        className={classNames(styles.rightContainer, {
          [styles.rightFavoritesContainer]: isFavorites,
        })}
      >
        <div
          style={{
            backgroundColor: color,
          }}
          className={classNames(styles.imgContainer, {
            [styles.imgFifth]: isFavorites,
          })}
        >
          <img
            src={image}
            className={classNames(styles.img, {
              [styles.imgFavorites]: isFavorites,
            })}
          ></img>
        </div>
        <div
          className={classNames(styles.textContainer, {
            [styles.favoritesTextContainer]: isFavorites,
          })}
        >
          <div
            className={classNames(styles.title, {
              [styles.favoritesTitle]: isFavorites,
            })}
            onClick={onTitleClick}
          >
            {title}
          </div>
          <div className={styles.subtitle}>{subtitle}</div>
          <div
            className={classNames(styles.footer, {
              [styles.favoritesFooter]: isFavorites,
            })}
          >
            <div className={styles.price}>{price}</div>
            <div className={styles.rating}>rating</div>
          </div>
        </div>
      </div>
      {isFavorites && (
        <div className={styles.likeIcon} onClick={onLikeIconClick}>
          <LikeIcon />
        </div>
      )}
    </div>
  );
};

export default BookCard;
