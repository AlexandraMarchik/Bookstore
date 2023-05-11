import React, { FC, useEffect, useState } from "react";
import { BookForm, CardProps } from "src/components/BookCard/types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import styles from "./BookCard.module.scss";
import { CloseIconModal, LikeIcon, MinusIcon, PlusIcon } from "src/assets/icon";
import {
  BooksSelectors,
  getSingleBook,
  setFavouritesBooks,
} from "src/redux/reducer/booksSlice";
import {
  setCartList,
  setDecrementItem,
  setIncrementItem,
} from "src/redux/reducer/cartSlice";
import { AuthUser } from "src/hooks/AuthUser";

const BookCard: FC<CardProps> = ({ card, form, className }) => {
  const { image, title, subtitle, price, isbn13, quantity } = card;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = AuthUser();

  const [color, setColor] = useState("");

  const colors = ["#D7E4FD", "#CAEFF0", "#FEE9E2", "#F4EEFD"];
  const isFavourites = form === BookForm.Favourite;
  const isCart = form === BookForm.Cart;
  const isSearchBar = form === BookForm.Search;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);
  const favoritesIndex = favouritesList.findIndex(
    (books) => books.isbn13 === card?.isbn13
  );
  const sumOneBookPrice = quantity * +price.substring(1);
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 479px)" });

  const onLikeIconClick = () => {
    if (card) {
      dispatch(setFavouritesBooks(card));
    }
  };
  const onCloseIconClick = () => {
    dispatch(setCartList(card));
  };
  const onBookClick = () => {
    dispatch(getSingleBook(isbn13));
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
          [styles.searchContainer]: isSearchBar,
        })}
      >
        <div
          className={classNames(styles.rightContainer, {
            [styles.rightFavouritesContainer]: isFavourites || isCart,
            [styles.rightSearchContainer]: isSearchBar,
          })}
          onClick={onBookClick}
        >
          <div
            style={{
              backgroundColor: color,
            }}
            className={classNames(styles.imgContainer, {
              [styles.imgFifth]: isFavourites || isCart,
              [styles.imgSearchFifth]: isSearchBar,
            })}
          >
            <img
              src={image}
              className={classNames(styles.img, {
                [styles.imgFavourites]: isFavourites || isCart,
                [styles.imgSearch]: isSearchBar,
              })}
            ></img>
            {isAuth && isMobile && isFavourites && (
              <div
                className={classNames(styles.likeIconSmallContainer, {
                  [styles.activeLikeIcon]: favoritesIndex > -1,
                })}
                onClick={onLikeIconClick}
              >
                <LikeIcon />
              </div>
            )}
            {isMobile && isCart && (
              <div
                className={styles.deleteBookFromCart}
                onClick={onCloseIconClick}
              >
                <CloseIconModal />
              </div>
            )}
          </div>
          <div
            className={classNames(styles.textContainer, {
              [styles.favouritesTextContainer]: isFavourites || isCart,
            })}
            onClick={onBookClick}
          >
            <div
              className={classNames(styles.title, {
                [styles.favouritesTitle]: isFavourites || isCart,
                [styles.searchTitle]: isSearchBar,
              })}
            >
              {title.substring(0, 30).concat(" ...")}
            </div>
            {!isSearchBar && (
              <div className={styles.subtitle}>
                {subtitle.substring(0, 70).concat(" ...")}
              </div>
            )}
            <div
              className={classNames(styles.footer, {
                [styles.favouritesFooter]: isFavourites,
              })}
            >
              {!isCart && !isSearchBar && (
                <div className={styles.price}>{price}</div>
              )}
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
                    {isTablet && (
                      <div className={styles.price}>
                        {sumOneBookPrice.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {isFavourites && !isMobile && (
          <div className={styles.likeIcon} onClick={onLikeIconClick}>
            <LikeIcon />
          </div>
        )}
        {isCart && !isMobile && (
          <div onClick={onCloseIconClick} className={styles.closeIcon}>
            {!isTablet && (
              <div className={styles.price}>{sumOneBookPrice.toFixed(2)}</div>
            )}
            <CloseIconModal />
          </div>
        )}
      </div>
    </>
  );
};

export default BookCard;
