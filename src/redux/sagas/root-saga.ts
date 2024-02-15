import { fork, all } from "redux-saga/effects";
import { watchGetSongs } from "./saga";

const rootSaga = function* () {
  yield all([fork(watchGetSongs)]);
};

export default rootSaga;
