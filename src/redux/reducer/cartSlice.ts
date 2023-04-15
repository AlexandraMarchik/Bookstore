import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { BookCardType } from "src/components/BookCard/types";

type InitialType = {
  cartList: BookCardType[];
  quantity: number;
};
const initialState: InitialType = {
  cartList: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<BookCardType>) => {
      const cartIndex = state.cartList.findIndex(
        (books) => books.isbn13 === action.payload.isbn13
      );
      if (cartIndex === -1) {
        state.cartList.push(action.payload);
      } else {
        state.cartList.splice(cartIndex, 1);
      }
    },
    setIncrementItem: (state, action: PayloadAction<BookCardType>) => {
      state.cartList = state.cartList.map((book) => {
        if (book.isbn13 === action.payload.isbn13) {
          state.cartList.push(action.payload);
        }
        return book;
      });
    },
    setDecrementItem: (state, action: PayloadAction<BookCardType>) => {
      const cartIndex = state.cartList.findIndex(
        (books) => books.isbn13 === action.payload.isbn13
      );
      state.cartList = state.cartList.map((book) => {
        if (book.isbn13 === action.payload.isbn13) {
          state.cartList.splice(cartIndex, 1);
        }
        return book;
      });
    },
  },
});

export const { setCartList, setIncrementItem, setDecrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;

export const CartSelectors = {
  getCartList: (state: RootState) => state.cart.cartList,
};
