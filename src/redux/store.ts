import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../state/songs/songsSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/root-saga";
import songReducer from "../state/song/songSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    song: songReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
