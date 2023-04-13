import { ApiResponse } from "apisauce";
import { takeLatest, all, call, put } from "redux-saga/effects";

import API from "../api";

import {AllBooksResponse, SearchBooksResponse, SingleBooksResponse} from "./@types";
import {
  getAllBooks, getSearchBooks,
  getSingleBook,
  setAllBooks,
  setAllBooksLoading, setSearchBooks,
  setSingleBook,
} from "src/redux/reducer/booksSlice";
import { PayloadAction } from "@reduxjs/toolkit";


function* getAllBooksWorker() {
  yield put(setAllBooksLoading(true));
  const { ok, data, problem }: ApiResponse<AllBooksResponse> = yield call(
    API.getBooks
  );
  if (ok && data) {
    yield put(setAllBooks(data.books));
  } else {
    console.warn("Error getting all books", problem);
  }
  yield put(setAllBooksLoading(false));
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { ok, data, problem }: ApiResponse<SingleBooksResponse> = yield call(
    API.getSingleBook,
    action.payload
  );
  if (ok && data) {
    yield put(setSingleBook(data));
  } else {
    console.warn("Error getting single book page", problem);
  }
}

function* getSearchedBooksWorker(action: PayloadAction<string>) {
  yield put(setAllBooksLoading(true));
  const { ok, data, problem }: ApiResponse<SearchBooksResponse> = yield call(
    API.getSearchBooks,action.payload
  );
  if (ok && data) {
    yield put(setSearchBooks(data.books));
  } else {
    console.warn("Error getting all posts", problem);
  }
  yield put(setAllBooksLoading(false))
}


export default function* booksSaga() {
  yield all([
    takeLatest(getAllBooks, getAllBooksWorker),
    takeLatest(getSingleBook, getSinglePostWorker),
    takeLatest(getSearchBooks, getSearchedBooksWorker),
  ]);
}
