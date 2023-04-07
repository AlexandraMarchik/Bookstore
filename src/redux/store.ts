import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/rootSaga";
import bookReduces from './reducer/booksSlice'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
               books: bookReduces,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;