import React, { useState, KeyboardEvent } from "react";

import styles from "./Header.module.scss";
import Input from "src/components/Input";
import {
  CartIcon,
  LikeIcon,
  LogoIcon,
  SearchIcon,
  UserIcon,
} from "src/assets/icon";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  // поиск из строки search при нажатии на enter
  // const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     onClickSearchButton();
  //   }
  // };
  const onSearchValue = (value: string) => {
    setSearchValue(value);
  };
  return (
    <>
      <div className={styles.container}>
        <LogoIcon />
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
          <div>
            <LikeIcon />
          </div>
          <div>
            <CartIcon />
          </div>
          <div>
            <UserIcon/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
