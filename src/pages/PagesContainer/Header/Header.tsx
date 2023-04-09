import React, { useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Header.module.scss";
import Input from "src/components/Input";
import {
  CartIcon,
  LikeFavoritesIcon,
  LikeIcon,
  LogoIcon,
  SearchIcon,
  UserIcon,
} from "src/assets/icon";
import { RoutesList } from "src/pages/Router";
import { BooksSelectors } from "src/redux/reducer/booksSlice";

const Header = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);
  const favoritesIndex = favouritesList.find((books) => books.isbn13);

  // поиск из строки search при нажатии на enter
  // const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     onClickSearchButton();
  //   }
  // };

  const onSearchValue = (value: string) => {
    setSearchValue(value);
  };
  const onLikeIconClick = () => {
    navigate(RoutesList.Favorites);
  };
  const onLogoButtonClick = () => {
    navigate(RoutesList.Home);
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
            // onKeyDown={onKeyDown}
          />
          <div className={styles.searchBtn}>
            <SearchIcon />
          </div>
        </div>
        <div className={styles.headerIcons}>
          <div onClick={onLikeIconClick} className={styles.likeIcon}>
            {favoritesIndex ? <LikeFavoritesIcon /> : <LikeIcon />}
          </div>
          <div>
            <CartIcon />
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
