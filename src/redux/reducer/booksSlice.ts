import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { BookCardType } from "src/components/BookCard/types";
import { SingleBooksResponse } from "src/redux/sagas/@types";

type InitialType = {
  booksList: BookCardType[];
  singleBook: SingleBooksResponse | null;
  favouritesBooks: BookCardType[],
};

const initialState: InitialType = {
  booksList: [],
  singleBook: null,
  favouritesBooks: [],
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
    setFavouritesBooks: (state, action: PayloadAction<BookCardType>) => {
      const favoritesIndex = state.favouritesBooks.findIndex(
          (books) => books.isbn13 === action.payload.isbn13
      );
      if (favoritesIndex === -1) {
        state.favouritesBooks.push(action.payload);
      } else {
        state.favouritesBooks.splice(favoritesIndex, 1);
      }
    },
  },
});

export const { getAllBooks, setAllBooks,setSingleBook, getSingleBook,setFavouritesBooks } = booksSlice.actions;

export default booksSlice.reducer;

export const BooksSelectors = {
  getAllBooks: (state: RootState) => state.books.booksList,
  getSingleBook: (state: RootState) => state.books.singleBook,
  getFavoritesBooks: (state: RootState) => state.books.favouritesBooks,
};
