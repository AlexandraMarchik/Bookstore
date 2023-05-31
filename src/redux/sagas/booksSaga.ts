import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, all, call, put } from "redux-saga/effects";

import API from "../api";
import {
  AllBooksResponse,
  SearchBooksResponse,
  SearchPaginationResponse,
  SingleBooksResponse,
} from "./@types";
import {
  getAllBooks,
  getSearchBooks,
  getSingleBook,
  setAllBooks,
  setBooksLoading,
  setSearchBooks, setSearchBooksLoading,
  setSingleBook,
} from "src/redux/reducer/booksSlice";

function* getAllBooksWorker() {
  yield put(setBooksLoading(true));
  const { ok, data, problem }: ApiResponse<AllBooksResponse> = yield call(
    API.getBooks
  );
  if (ok && data) {
    yield put(setAllBooks(data.books));
  } else {
    console.warn("Error getting all books", problem);
  }
  yield put(setBooksLoading(false));
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setBooksLoading(true));
  const { ok, data, problem }: ApiResponse<SingleBooksResponse> = yield call(
    API.getSingleBook,
    action.payload
  );
  if (ok && data) {
    yield put(setSingleBook(data));
  } else {
    console.warn("Error getting single book page", problem);
  }
  yield put(setBooksLoading(false));
}

function* getSearchedBooksWorker(
  action: PayloadAction<SearchPaginationResponse>
) {
  yield put(setSearchBooksLoading(true));
  const { page, query } = action.payload;
  const { ok, data, problem }: ApiResponse<SearchBooksResponse> = yield call(
    API.getSearchBooks,
    page,
    query
  );
  if (ok && data) {
    yield put(
      setSearchBooks({ booksList: data.books, booksCount: data.total })
    );
  } else {
    console.warn("Error getting all posts", problem);
  }
  yield put(setSearchBooksLoading(false));
}

export default function* booksSaga() {
  yield all([
    takeLatest(getAllBooks, getAllBooksWorker),
    takeLatest(getSingleBook, getSinglePostWorker),
    takeLatest(getSearchBooks, getSearchedBooksWorker),
  ]);
}
