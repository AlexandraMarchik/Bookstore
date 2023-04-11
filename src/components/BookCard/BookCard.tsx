import React, { FC, useEffect, useState } from "react";
import { BookForm, CardProps } from "src/components/BookCard/types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./BookCard.module.scss";
import classNames from "classnames";
import { LikeIcon } from "src/assets/icon";
import { setFavouritesBooks } from "src/redux/reducer/booksSlice";


const BookCard: FC<CardProps> = ({ card, form, className }) => {
  const { image, title, subtitle, price, isbn13, } = card;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [color, setColor] = useState("");

  const colors = ["#D7E4FD", "#CAEFF0", "#FEE9E2", "#F4EEFD"];
  const isFavourites = form === BookForm.Favourite;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const onLikeIconClick = () => {
    if (card) {
      dispatch(setFavouritesBooks(card));
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
        [styles.favouritesContainer]: isFavourites,
      })}
    >
      <div
        className={classNames(styles.rightContainer, {
          [styles.rightFavouritesContainer]: isFavourites,
        })}
      >
        <div
          style={{
            backgroundColor: color,
          }}
          className={classNames(styles.imgContainer, {
            [styles.imgFifth]: isFavourites,
          })}
        >
          <img
            src={image}
            className={classNames(styles.img, {
              [styles.imgFavourites]: isFavourites,
            })}
          ></img>
        </div>
        <div
          className={classNames(styles.textContainer, {
            [styles.favouritesTextContainer]: isFavourites,
          })}
        >
          <div
            className={classNames(styles.title, {
              [styles.favouritesTitle]: isFavourites,
            })}
            onClick={onTitleClick}
          >
            {title}
          </div>
          <div className={styles.subtitle}>{subtitle}</div>
          <div
            className={classNames(styles.footer, {
              [styles.favouritesFooter]: isFavourites,
            })}
          >
            <div className={styles.price}>{price}</div>
            <div className={styles.rating}>rating</div>
          </div>
        </div>
      </div>
      {isFavourites && (
        <div className={styles.likeIcon} onClick={onLikeIconClick}>
          <LikeIcon />
        </div>
      )}
    </div>
  );
};

export default BookCard;
