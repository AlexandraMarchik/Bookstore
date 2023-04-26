import React from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./Cart.module.scss";
import FormContainer from "src/pages/FormContainer";
import CartList from "src/components/CartList";
import { CartSelectors, setCartList } from "src/redux/reducer/cartSlice";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import {AuthUser} from "src/hooks/AuthUser";

const Cart = () => {
  const dispatch = useDispatch()
  const cartList = useSelector(CartSelectors.getCartList);
  const { isAuth } = AuthUser();
  // const onCloseIconClick = () => {
  //   if(cartList){
  //   dispatch(setCartList(cartList[]));
  // };

  const sumTotal = cartList
    .map((item) => +item?.price.substring(1) * item?.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);
  const vat = sumTotal * 0.2;
  const totalPrice = sumTotal + vat;

  return (
    <div>
      <FormContainer title={"Your cart"} />
      <div className={styles.container}>
        <CartList cartList={cartList} />
        <div className={styles.checkOut}>
          <div className={styles.checkOutContainer}>
            <div className={styles.sumTotal}>
              <div className={styles.textContainer}>Sum total</div>
              <div className={styles.price}>${sumTotal.toFixed(2)} </div>
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
                disabled={cartList.length === 0 || !isAuth}
                type={ButtonType.Primary}
                className={styles.button}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
