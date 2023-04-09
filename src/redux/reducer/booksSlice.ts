import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { BookCardType } from "src/components/BookCard/types";
import { SingleBooksResponse } from "src/redux/sagas/@types";

type InitialType = {
  booksList: BookCardType[];
  singleBook: SingleBooksResponse | null;
  favoritesBooks: BookCardType[],
};

const initialState: InitialType = {
  booksList: [],
  singleBook: null,
  favoritesBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooks: (_, __: PayloadAction<undefined>) => {},
    setAllBooks: (state, action: PayloadAction<BookCardType[]>) => {
      state.booksList = action.payload;
    },
    getSingleBook:(state, action:PayloadAction<string>)=>{},
    setSingleBook: (state, action: PayloadAction<SingleBooksResponse  | null>) => {
      state.singleBook = action.payload;
    },
    setFavoritesBooks: (state, action: PayloadAction<SingleBooksResponse>) => {
      const favoritesIndex = state.favoritesBooks.findIndex(
          (books) => books.isbn13 === action.payload.isbn13
      );
      if (favoritesIndex === -1) {
        state.favoritesBooks.push(action.payload);
      } else {
        state.favoritesBooks.splice(favoritesIndex, 1);
      }
    },
  },
});

export const { getAllBooks, setAllBooks,setSingleBook, getSingleBook,setFavoritesBooks } = booksSlice.actions;

export default booksSlice.reducer;

export const BooksSelectors = {
  getAllBooks: (state: RootState) => state.books.booksList,
  getSingleBook: (state: RootState) => state.books.singleBook,
  getFavoritesBooks: (state: RootState) => state.books.favoritesBooks,
};
