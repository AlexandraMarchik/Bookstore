import React, { FC } from "react";

import styles from "./CartList.module.scss";
import EmptyState from "src/components/EmptyState";
import { BookCardType, BookForm } from "src/components/BookCard/types";
import BookCard from "src/components/BookCard";

type CartListProps = {
  cartList: BookCardType[];
};
const CartList: FC<CartListProps> = ({ cartList }) => {

    return cartList.length > 0 ? (
    <div className={styles.container}>
      {cartList.map((item, index) => {
        return <BookCard card={item} form={BookForm.Cart} key={item.isbn13} />;
      })}
    </div>
  ) : (
    <EmptyState
      title="Sorry, there's no books"
      description="Try to add books to cart "
    />
  );
};
export default CartList;
