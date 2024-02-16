import { all } from "redux-saga/effects";
import { watchSongsAsync } from "./song";

const rootSaga = function* () {
  yield all([watchSongsAsync()]);
};

export default rootSaga;
