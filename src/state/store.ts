import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songs/songsSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../redux/sagas/root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
