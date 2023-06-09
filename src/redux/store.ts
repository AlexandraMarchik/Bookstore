import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/rootSaga";
import bookReducer from "./reducer/booksSlice";
import cartReducer from "./reducer/cartSlice";
import userReducer from "./reducer/userSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    books: bookReducer,
    cart: cartReducer,
    user: userReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
