import React, { FC} from "react";
import styles from "../Title/Title.module.scss";
import classNames from "classnames";

type TitleProps = {
  title: string;
  className?:string
};

const Title: FC<TitleProps> = ({ title , className}) => {
  return (
    <div
      className={classNames(styles.title,className)}
    >
      {title}
    </div>
  );
};

export default Title;
