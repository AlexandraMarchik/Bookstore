import React, { FC, ReactNode } from "react";
import styles from "../Title/Title.module.scss";

type TitleProps = {
  title: any;
};

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div
      className={styles.title}
    >
      {title}
    </div>
  );
};

export default Title;
