import { takeLatest } from "redux-saga/effects";

import { add, getSongs, remove } from "../../state/songs/songsSlice";
import {
  handleAddSong,
  handleDeleteSong,
  handleGetSongs,
} from "./handlers/songs";

export function* watchGetSongs() {
  yield takeLatest(getSongs.type, handleGetSongs); //import from handler
}
export function* watchAddSong() {
  yield takeLatest(add.type, handleAddSong);
}
export function* watchRemoveSong() {
  yield takeLatest(remove.type, handleDeleteSong);
}
