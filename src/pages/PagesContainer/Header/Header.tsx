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
  getAllBooks,
  getSearchBooks,
} from "src/redux/reducer/booksSlice";
import { CartSelectors } from "src/redux/reducer/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  // const currentPage =useSelector(BooksSelectors.getCurrentPage)
  const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);
  const favoritesIndex = favouritesList.find((books) => books.isbn13);
  const cartList = useSelector(CartSelectors.getCartList);
  const cartIndex = cartList.find((books) => books.isbn13);

  // поиск из строки search при нажатии на enter
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearchButton();
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
  const onClickSearchButton = () => {
    dispatch(getSearchBooks(searchValue));
    navigate(RoutesList.Search);
    if(searchValue) {
      navigate(`/search/${searchValue}/`);
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
          <div className={styles.searchBtn} onClick={onClickSearchButton}>
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
          <div>
            <UserIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
