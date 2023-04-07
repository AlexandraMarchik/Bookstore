import React, { FC } from "react";
import { CardNumbers, CardProps } from "src/components/BookCard/types";

import styles from "./BookCard.module.scss";
import classNames from "classnames";

const BookCard: FC<CardProps> = ({ card, number }) => {
  const { image, title, subtitle, price } = card;
  const isFirst = number === CardNumbers.First;
  const isSecond = number === CardNumbers.Second;
  const isThird = number === CardNumbers.Third;
  const isFourth = number === CardNumbers.Fourth;

  return (
    <div className={styles.container}>
        <div>
      <div
        className={classNames(styles.imgContainer, {
          [styles.imgOne]: isFirst,
          [styles.imgTwo]: isSecond,
          [styles.imgTree]: isThird,
          [styles.imgFour]: isFourth,
        })}
      >
        <img src={image} className={styles.img}></img>
      </div>
            <div className={styles.title}>{title}</div>
        </div>

        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.footer}>
          <div className={styles.price}>{price}</div>
          <div className={styles.rating}>rating</div>
        </div>
      </div>

  );
};

export default BookCard;
