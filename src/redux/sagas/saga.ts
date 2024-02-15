import { takeLatest } from "redux-saga/effects";

import { getSongs } from "../../state/songs/songsSlice";
import { handleGetSongs } from "./handlers/songs";

export function* watchGetSongs() {
  yield takeLatest(getSongs.type, handleGetSongs); //import from handler
}
