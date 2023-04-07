import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./PagesContainer.module.scss";
import Header from "./Header";

const PagesContainer = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainInfo}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <div>©2022 Bookstore</div>
        <div>All rights reserved</div>
      </div>
    </div>
  );
};

export default PagesContainer;
