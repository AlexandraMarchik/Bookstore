import { ApiResponse } from "apisauce";
import { takeLatest, all, call, put } from "redux-saga/effects";

import API from "../api";

import {AllBooksResponse} from "./@types";
import {getAllBooks, setAllBooks} from "src/redux/reducer/booksSlice";


function* getAllBooksWorker() {

  const { ok, data, problem }: ApiResponse<AllBooksResponse> = yield call(
    API.getBooks
  );
  if (ok && data) {
    yield put(setAllBooks(data.books));
  } else {
    console.warn("Error getting all posts", problem);
  }
}

// function* getSinglePostWorker(action: PayloadAction<string>) {
//   const { ok, data, problem }: ApiResponse<CardType> = yield call(
//     API.getSinglePost,
//     action.payload
//   );
//   if (ok && data) {
//     yield put(setSinglePost(data));
//   } else {
//     console.warn("Error getting single post", problem);
//   }
// }
//
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

  ]);
}
