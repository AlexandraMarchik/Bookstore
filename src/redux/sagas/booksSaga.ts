import { ApiResponse } from "apisauce";
import { takeLatest, all, call, put } from "redux-saga/effects";

import API from "../api";

import {AllBooksResponse, SingleBooksResponse} from "./@types";
import {getAllBooks, getSingleBook, setAllBooks, setAllBooksLoading, setSingleBook} from "src/redux/reducer/booksSlice";
import {PayloadAction} from "@reduxjs/toolkit";


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

//
// function* getSearchedPostsWorker(action: PayloadAction<string>) {
//   const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
//     API.getPosts,
//     0,
//     action.payload
//   );
//   if (ok && data) {
//     yield put(setSearchedPosts(data.results));
//   } else {
//     console.warn("Error getting all posts", problem);
//   }
// }



export default function* booksSaga() {
  yield all([
    takeLatest(getAllBooks, getAllBooksWorker),
    takeLatest(getSingleBook, getSinglePostWorker),

  ]);
}
