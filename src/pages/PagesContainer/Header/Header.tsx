import React, { useState, KeyboardEvent, useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RoutesList } from "src/pages/Router";
import { useMediaQuery } from "react-responsive";

import styles from "./Header.module.scss";
import Input from "src/components/Input";
import {
  BurgerIcon,
  CartAddIcon,
  CartIcon,
  CloseIconModal,
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
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import classNames from "classnames";
import { removeUser } from "src/redux/reducer/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuth } = AuthUser();

  const [searchValue, setSearchValue] = useState("");
  const [isOpened, setOpened] = useState(false);
  const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);
  const favoritesIndex = favouritesList.find((books) => books.isbn13);
  const cartList = useSelector(CartSelectors.getCartList);
  const cartIndex = cartList.find((books) => books.isbn13);

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });


  const navButtonsList = useMemo(
    () => [
      ...(!isAuth
        ? []
        : [
            {
              title: "Favorites",
              key: RoutesList.Favorites,
            },
            {
              title: "Cart",
              key: RoutesList.Cart,
            },
            {
              title: "Account",
              key: RoutesList.Account,
            },
          ]),
    ],
    [isAuth]
  );

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearchButtonClick();
      setOpened(!isOpened);
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
    setOpened(!isOpened);
  };
  const onUserIconClick = () => {
    if (!isAuth) {
      navigate(RoutesList.Auth);
    } else {
      navigate(RoutesList.Account);
    }
  };
  const onAuthButtonClick = () => {
    navigate(RoutesList.Auth);
  };
  const onLogoutClick = () => {
    dispatch(removeUser());
  };

  const onBurgerButtonClick = () => {
    return setOpened(!isOpened);
  };
  const onCloseMenuButtonClick = () => {
    return setOpened(!isOpened);
  };
  const onCloseMenuClick = () => {
    return setOpened(!isOpened);
  };
  const onInputClick = (event) => {
    return event.stopPropagation();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo} onClick={onLogoButtonClick}>
          <LogoIcon />
        </div>
        {!isTablet && (
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
        )}
        <div className={styles.headerIcons}>
          {!isTablet && isAuth && (
            <div onClick={onLikeIconClick} className={styles.likeIcon}>
              {favoritesIndex ? <LikeFavoritesIcon /> : <LikeIcon />}
            </div>
          )}
          <div onClick={onCartIconClick}>
            {cartIndex ? <CartAddIcon /> : <CartIcon />}
          </div>
          {!isTablet && (
            <div onClick={onUserIconClick}>
              <UserIcon />
            </div>
          )}
          {isTablet && (
            <div onClick={onBurgerButtonClick}>
              <BurgerIcon />
            </div>
          )}
        </div>
      </div>
      {isOpened && isTablet && (
        <div className={styles.burgerContainer} onClick={onCloseMenuClick}>
          <div className={styles.menuContainer}>
            <div className={styles.actionsContainer}>
              <div className={styles.closeNavMenuContainer}>
                <div
                  className={styles.closeNavMenu}
                  onClick={onCloseMenuButtonClick}
                >
                  <CloseIconModal />
                </div>
              </div>
              <div className={styles.searchInputBurger} onClick={onInputClick}>
                <Input
                  value={searchValue}
                  onChange={onSearchValue}
                  inputClassName={styles.inputBurger}
                  type={"text"}
                  onKeyDown={onKeyDown}
                />
                <div
                  className={styles.searchBurgerBtn}
                  onClick={onSearchButtonClick}
                >
                  <SearchIcon />
                </div>
              </div>
              <div>
                {navButtonsList.map(({ key, title }) => {
                  return (
                    <NavLink
                      to={key}
                      key={key}
                      className={classNames(styles.navButton, {
                        [styles.activeNavButton]: location.pathname === key,
                      })}
                    >
                      {title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div>
              <Button
                title={isAuth ? "Log out" : "Sign In"}
                onClick={isAuth ? onLogoutClick : onAuthButtonClick}
                type={ButtonType.Primary}
                className={styles.authButton}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
