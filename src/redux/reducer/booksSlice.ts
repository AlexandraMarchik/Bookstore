import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { BookCardType } from "src/components/BookCard/types";
import { SingleBooksResponse } from "src/redux/sagas/@types";

type InitialType = {
  booksList: BookCardType[];
  singleBook: SingleBooksResponse | null;
  favouritesBooks: BookCardType[];
  isAllBooksLoading: boolean;
  isVisibleModal: boolean;
  previewBook: string | null;
  searchValue: string;
  searchBooks: BookCardType[];
};

const initialState: InitialType = {
  booksList: [],
  singleBook: null,
  favouritesBooks: [],
  isAllBooksLoading: false,
  previewBook: null,
  isVisibleModal: false,
  searchValue: "",
  searchBooks: [],

};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooks: (_, __: PayloadAction<undefined>) => {},
    setAllBooks: (state, action: PayloadAction<BookCardType[]>) => {
      state.booksList = action.payload;
    },
    getSingleBook: (state, action: PayloadAction<string>) => {},
    setSingleBook: (
      state,
      action: PayloadAction<SingleBooksResponse | null>
    ) => {
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
    setAllBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isAllBooksLoading = action.payload;
    },
    setPreviewBook: (state, action: PayloadAction<string | null>) => {
      state.previewBook = action.payload;
    },
    setPreviewBookVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisibleModal = action.payload;
    },
    getSearchBooks: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSearchBooks: (state, action: PayloadAction<BookCardType[]>) => {
      state.searchBooks = action.payload;
    },
 }});

export const {
  getAllBooks,
  setAllBooks,
  setSingleBook,
  getSingleBook,
  setFavouritesBooks,
  setAllBooksLoading,
  setPreviewBookVisibility,
  setPreviewBook,
  getSearchBooks,
  setSearchBooks,

} = booksSlice.actions;

export default booksSlice.reducer;

export const BooksSelectors = {
  getAllBooks: (state: RootState) => state.books.booksList,
  getSingleBook: (state: RootState) => state.books.singleBook,
  getFavoritesBooks: (state: RootState) => state.books.favouritesBooks,
  getAllBooksLoading: (state: RootState) => state.books.isAllBooksLoading,
  getVisibleModal: (state: RootState) => state.books.isVisibleModal,
  getPreviewBook: (state: RootState) => state.books.previewBook,
  getSearchedBooks: (state: RootState) => state.books.searchBooks,
  getSearchValue: (state: RootState) => state.books.searchValue,
};
