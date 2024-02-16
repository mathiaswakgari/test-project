import { takeLatest } from "redux-saga/effects";

import {
  addSongSlice,
  getSongsSlice,
  removeSongSlice,
} from "../../state/songs/songsSlice";
import {
  handleAddSong,
  handleDeleteSong,
  handleGetSongs,
} from "./handlers/songs";

export function* watchGetSongs() {
  yield takeLatest(getSongsSlice.type, handleGetSongs); //import from handler
}
export function* watchAddSong() {
  yield takeLatest(addSongSlice.type, handleAddSong);
}
export function* watchRemoveSong() {
  yield takeLatest(removeSongSlice.type, handleDeleteSong);
}
