import React, { FC } from "react";

import styles from "./CartList.module.scss";
import EmptyState from "src/components/EmptyState";
import { BookCardType, BookForm } from "src/components/BookCard/types";
import BookCard from "src/components/BookCard";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import { useSelector } from "react-redux";
import { CartSelectors } from "src/redux/reducer/cartSlice";

type CartListProps = {
  cartList: BookCardType[];
  sumPrice?: number;
};

const CartList: FC<CartListProps> = ({ cartList }) => {
  const sumTotal = cartList.reduce(
    (acc, item) => acc + +item?.price.substring(1),
    0
  );
  const vat = sumTotal * 0.2;
  const totalPrice = sumTotal + vat;

  return cartList.length > 0 ? (
    <>
      <div className={styles.container}>
        {cartList.map((item) => {
          return (
            <BookCard card={item} form={BookForm.Cart} key={item.isbn13} />
          );
        })}
      </div>
      <div className={styles.checkOutContainer}>
        <div className={styles.sumTotal}>
          <div className={styles.textContainer}>Sum total</div>
          <div className={styles.price}>${sumTotal} </div>
        </div>
        <div className={styles.vat}>
          <div className={styles.textContainer}> VAT</div>
          <div className={styles.price}>${vat.toFixed(2)}</div>
        </div>
        <div className={styles.total}>
          <div className={styles.totalText}> total:</div>
          <div className={styles.totalPrice}> ${totalPrice.toFixed(2)}</div>
        </div>
        <div>
          <Button
            title={"check out"}
            onClick={() => {}}
            type={ButtonType.Primary}
            className={styles.button}
          />
        </div>
      </div>
    </>
  ) : (
    <EmptyState
      title="Sorry, there's no books"
      description="Add some books in the cart "
    />
  );
};
export default CartList;
