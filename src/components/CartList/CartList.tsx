import React, { FC } from "react";

import styles from "./CartList.module.scss";
import {BookCartType} from "src/utils/@globalTypes";
import { BookForm} from "src/components/BookCard/types";
import EmptyState from "src/components/EmptyState";
import BookCard from "src/components/BookCard";


type CartListProps = {
  cartList: BookCartType[];
};

const CartList: FC<CartListProps> = ({ cartList}) => {
  return cartList.length > 0 ? (
    <div className={styles.container}>
        {cartList.map((item) => {
          return (
            <BookCard card={item} form={BookForm.Cart} key={item.isbn13} />
          );
        })}
      </div>

  ) : (
    <EmptyState
      title="Sorry, there's no books"
      description="Add some books in the cart "
    />
  );
};
export default CartList;
