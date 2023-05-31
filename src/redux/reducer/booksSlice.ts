import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { SetSearchBooksPayload } from "src/redux/reducer/@types";
import {BookCartType} from "src/utils/@globalTypes";
import {
  SearchPaginationResponse,
  SingleBooksResponse,
} from "src/redux/sagas/@types";


type InitialType = {
  booksList: BookCartType[];
  singleBook: SingleBooksResponse | null;
  favouritesBooks: BookCartType[];
  isAllBooksLoading: boolean;
  isSearchBooksLoading:boolean;
  isVisibleModal: boolean;
  previewBook: string | null;
  searchValue: string;
  searchBooks: BookCartType[];
  totalBooks: string;
  page: number;
};

const initialState: InitialType = {
  booksList: [],
  singleBook: null,
  favouritesBooks: [],
  isAllBooksLoading: false,
  isSearchBooksLoading:false,
  previewBook: null,
  isVisibleModal: false,
  searchValue: "",
  searchBooks: [],
  totalBooks: "0",
  page: 1,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooks: (_, __: PayloadAction<undefined>) => {},
    setAllBooks: (state, action: PayloadAction<BookCartType[]>) => {
      state.booksList = action.payload;
    },
    getSingleBook: (state, action: PayloadAction<string>) => {},
    setSingleBook: (
      state,
      action: PayloadAction<SingleBooksResponse | null>
    ) => {
      state.singleBook = action.payload;
    },
    setFavouritesBooks: (state, action: PayloadAction<BookCartType>) => {
      const favoritesIndex = state.favouritesBooks.findIndex(
        (books) => books.isbn13 === action.payload.isbn13
      );
      if (favoritesIndex === -1) {
        state.favouritesBooks.push(action.payload);
      } else {
        state.favouritesBooks.splice(favoritesIndex, 1);
      }
    },
    setBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isAllBooksLoading = action.payload;
    },
    setSearchBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isSearchBooksLoading = action.payload;
    },

    setPreviewBook: (state, action: PayloadAction<string | null>) => {
      state.previewBook = action.payload;
    },
    setPreviewBookVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisibleModal = action.payload;
    },
    getSearchBooks: (_, __: PayloadAction<SearchPaginationResponse>) => {},
    setSearchedValueBooks: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSearchBooks: (
      state,
      {
        payload: { booksList, booksCount },
      }: PayloadAction<SetSearchBooksPayload>
    ) => {
      state.searchBooks = booksList;
      state.totalBooks = booksCount;
    },
  },
});

export const {
  getAllBooks,
  setAllBooks,
  setSingleBook,
  getSingleBook,
  setFavouritesBooks,
  setBooksLoading,
    setSearchBooksLoading,
  setPreviewBookVisibility,
  setPreviewBook,
  getSearchBooks,
  setSearchedValueBooks,
  setSearchBooks,

} = booksSlice.actions;

export default booksSlice.reducer;

export const BooksSelectors = {
  getAllBooks: (state: RootState) => state.books.booksList,
  getSingleBook: (state: RootState) => state.books.singleBook,
  getFavoritesBooks: (state: RootState) => state.books.favouritesBooks,
  getAllBooksLoading: (state: RootState) => state.books.isAllBooksLoading,
  getSearchBooksLoading:(state: RootState) => state.books.isSearchBooksLoading,
  getVisibleModal: (state: RootState) => state.books.isVisibleModal,
  getPreviewBook: (state: RootState) => state.books.previewBook,
  getSearchedBooks: (state: RootState) => state.books.searchBooks,
  getSearchValue: (state: RootState) => state.books.searchValue,
  getTotalCount: (state: RootState) => state.books.totalBooks,
};
