import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import {BookCardType} from "src/components/BookCard/types";



type InitialType = {
    booksList: BookCardType [];
  };

const initialState: InitialType = {
  booksList:[]
};

const booksSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllBooks: (_, __: PayloadAction<undefined>) => {
    },
    setAllBooks: (state, action: PayloadAction<BookCardType[]>) => {
      state.booksList = action.payload;
    },
  }
});

export const {
  getAllBooks, setAllBooks
} = booksSlice.actions;

export default booksSlice.reducer;

export const BooksSelectors = {
    getAllBooks: (state: RootState) => state.books.booksList,

};
