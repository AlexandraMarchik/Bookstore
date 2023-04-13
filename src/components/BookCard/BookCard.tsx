import React, { FC, useEffect, useState } from "react";
import { BookForm, CardProps } from "src/components/BookCard/types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./BookCard.module.scss";
import classNames from "classnames";
import { CloseIconModal, LikeIcon, MinusIcon, PlusIcon } from "src/assets/icon";
import {
  setFavouritesBooks,
} from "src/redux/reducer/booksSlice";
import {setCartList, setDecrementItem, setIncrementItem} from "src/redux/reducer/cartSlice";

const BookCard: FC<CardProps> = ({ card, form, className }) => {
  const { image, title, subtitle, price, isbn13 } = card;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [color, setColor] = useState("");
  const [count, setCount] = useState(1);

  const colors = ["#D7E4FD", "#CAEFF0", "#FEE9E2", "#F4EEFD"];
  const isFavourites = form === BookForm.Favourite;
  const isCart = form === BookForm.Cart;

  const randomColor = colors[Math.floor(Math.random() * colors.length)];


  const incrementCount = (isbn13) => {
    dispatch(setIncrementItem(isbn13));
    setCount(count + 1);
  };
  const decrementCount = (isbn13) => {
    if (count !== 1) {
      setCount(count - 1);
      dispatch(setDecrementItem(isbn13));
    }
  };

  const onLikeIconClick = () => {
    if (card) {
      dispatch(setFavouritesBooks(card));
    }
  };
  const onCloseIconClick = () => {
    dispatch(setCartList(card));
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
        [styles.favouritesContainer]: isFavourites || isCart,
      })}
    >
      <div
        className={classNames(styles.rightContainer, {
          [styles.rightFavouritesContainer]: isFavourites || isCart,
        })}
      >
        <div
          style={{
            backgroundColor: color,
          }}
          className={classNames(styles.imgContainer, {
            [styles.imgFifth]: isFavourites || isCart,
          })}
        >
          <img
            src={image}
            className={classNames(styles.img, {
              [styles.imgFavourites]: isFavourites || isCart,
            })}
          ></img>
        </div>
        <div
          className={classNames(styles.textContainer, {
            [styles.favouritesTextContainer]: isFavourites || isCart,
          })}
        >
          <div
            className={classNames(styles.title, {
              [styles.favouritesTitle]: isFavourites || isCart,
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
            {!isCart && (
              <div className={classNames(styles.price, {})}>{price}</div>
            )}
          </div>
          <div>
            {isCart && (
              <div className={styles.count}>
                <div onClick={decrementCount}>
                  <MinusIcon />
                </div>
                <div className={styles.countNumber}>{count}</div>
                <div onClick={incrementCount}>
                  <PlusIcon />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isFavourites && (
        <div className={styles.likeIcon} onClick={onLikeIconClick}>
          <LikeIcon />
        </div>
      )}
      {isCart && (

        <div onClick={onCloseIconClick} className={styles.closeIcon}>
          <div className={classNames(styles.price, {})}>{price}</div>
          <CloseIconModal />
        </div>
      )}
    </div>
  );
};

export default BookCard;
