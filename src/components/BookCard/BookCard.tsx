import React, { FC, useEffect, useState } from "react";
import { BookForm, CardProps } from "src/components/BookCard/types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classNames from "classnames";
import styles from "./BookCard.module.scss";
import { CloseIconModal, LikeIcon, MinusIcon, PlusIcon } from "src/assets/icon";
import { setFavouritesBooks } from "src/redux/reducer/booksSlice";
import {
  setCartList,
  setDecrementItem,
  setIncrementItem,
} from "src/redux/reducer/cartSlice";
import {useMediaQuery} from "react-responsive";

const BookCard: FC<CardProps> = ({ card, form, className }) => {
  const { image, title, subtitle, price, isbn13, quantity } = card;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [color, setColor] = useState("");

  const colors = ["#D7E4FD", "#CAEFF0", "#FEE9E2", "#F4EEFD"];
  const isFavourites = form === BookForm.Favourite;
  const isCart = form === BookForm.Cart;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const sumOneBookPrice = quantity * +price.substring(1);
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });


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
  const incrementCount = () => {
    dispatch(setIncrementItem(isbn13));
  };
  const decrementCount = () => {
    if (quantity !== 1) {
      dispatch(setDecrementItem(isbn13));
    }
  };

  useEffect(() => {
    setColor(randomColor);
  }, []);

  return (
    <>
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
              {title.substring(0, 30).concat(" ...")}
            </div>
            <div className={styles.subtitle}>
              {subtitle.substring(0, 70).concat(" ...")}
            </div>
            <div
              className={classNames(styles.footer, {
                [styles.favouritesFooter]: isFavourites,
              })}
            >
              {!isCart && <div className={styles.price}>{price}</div>}
            </div>
            <div>
              {isCart && (
                <div className={styles.count}>
                  <div className={styles.countContainer}>
                  <div onClick={decrementCount}>
                    <MinusIcon />
                  </div>
                  <div className={styles.countNumber}>{quantity}</div>
                  <div onClick={incrementCount}>
                    <PlusIcon />
                  </div>
                  </div>
                  <div>
                  {isTablet && <div className={styles.price}>{sumOneBookPrice.toFixed(2)}</div>
                  }
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
            { !isTablet && <div className={styles.price}>{sumOneBookPrice.toFixed(2)}</div>}
            <CloseIconModal />
          </div>
        )}
      </div>
    </>
  );
};

export default BookCard;
