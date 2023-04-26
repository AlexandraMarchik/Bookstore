import React, { useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RoutesList } from "src/pages/Router";

import styles from "./Header.module.scss";
import Input from "src/components/Input";
import {
  CartAddIcon,
  CartIcon,
  LikeFavoritesIcon,
  LikeIcon,
  LogoIcon,
  SearchIcon,
  UserIcon,
} from "src/assets/icon";
import {
  BooksSelectors,
  setSearchedValueBooks,
} from "src/redux/reducer/booksSlice";
import { CartSelectors } from "src/redux/reducer/cartSlice";
import { AuthUser } from "src/hooks/AuthUser";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth} = AuthUser();

  const [searchValue, setSearchValue] = useState("");
  const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);
  const favoritesIndex = favouritesList.find((books) => books.isbn13);
  const cartList = useSelector(CartSelectors.getCartList);
  const cartIndex = cartList.find((books) => books.isbn13);



  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearchButtonClick();
    }
  };

  const onSearchValue = (value: string) => {
    setSearchValue(value);
  };
  const onLikeIconClick = () => {
    navigate(RoutesList.Favorites);
  };
  const onLogoButtonClick = () => {
    navigate(RoutesList.Home);
  };
  const onCartIconClick = () => {
    navigate(RoutesList.Cart);
  };
  const onSearchButtonClick = () => {
    dispatch(setSearchedValueBooks(searchValue));
    navigate(RoutesList.Search);
  };
  const onUserIconClick = () => {
    if (!isAuth) {
      navigate(RoutesList.Auth);
    } else{
      navigate(RoutesList.Account)
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo} onClick={onLogoButtonClick}>
          <LogoIcon />
        </div>
        <div className={styles.searchInput}>
          <Input
            value={searchValue}
            onChange={onSearchValue}
            inputClassName={styles.input}
            placeholder="Search..."
            type={"text"}
            onKeyDown={onKeyDown}
          />
          <div className={styles.searchBtn} onClick={onSearchButtonClick}>
            <SearchIcon />
          </div>
        </div>
        <div className={styles.headerIcons}>
          <div onClick={onLikeIconClick} className={styles.likeIcon}>
            {favoritesIndex ? <LikeFavoritesIcon /> : <LikeIcon />}
          </div>
          <div onClick={onCartIconClick}>
            {cartIndex ? <CartAddIcon /> : <CartIcon />}
          </div>
          <div onClick={onUserIconClick}>
            <UserIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
