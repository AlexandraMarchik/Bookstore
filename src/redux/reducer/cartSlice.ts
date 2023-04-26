import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { BookCartType } from "src/components/BookCard/types";

type InitialType = {
  cartList: BookCartType[];
};
const initialState: InitialType = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartList: (state,action: PayloadAction<BookCartType>) => {
        const cartIndex = state.cartList.findIndex(
          (book) => book.isbn13 === action.payload?.isbn13
        );
        if (cartIndex === -1) {
          state.cartList.push({ ...action.payload,quantity:1});
        } else {
          state.cartList.splice(cartIndex, 1);
        }
      },
    setIncrementItem: (state, action: PayloadAction<string>) => {
      state.cartList.map((book) => {
        if (book.isbn13 === action.payload) {
          return (book.quantity = book.quantity + 1);
        }
      });
    },
    setDecrementItem: (state, action: PayloadAction<string>) => {
      state.cartList.map((book) => {
        if (book.isbn13 === action.payload) {
          return (book.quantity = book.quantity - 1);
        }
      });
    },
  },
});

export const { setCartList, setIncrementItem,setDecrementItem } = cartSlice.actions;

export default cartSlice.reducer;

export const CartSelectors = {
  getCartList: (state: RootState) => state.cart.cartList,
};

