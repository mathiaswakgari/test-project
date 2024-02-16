import { put, takeEvery } from "redux-saga/effects";
import {
  requestAddSong,
  requestEditSong,
  requestGetSongs,
  requestRemoveSong,
} from "./requests/songs";
import {
  addSongSlice,
  editSongSlice,
  getSongsSlice,
  removeSongSlice,
} from "../../state/songs/songsSlice";
import { AxiosResponse } from "axios";
import { requestGetSong } from "./requests/song";
import { setSongSlice } from "../../state/song/songSlice";
import {
  CREATE_SONG,
  DELETE_SONG,
  EDIT_SONG,
  GET_SONG,
  GET_SONGS,
} from "../types";

export function* getSongsSaga() {
  const songs: AxiosResponse = yield requestGetSongs();
  yield put(getSongsSlice(songs.data.slice(0, 5)));
}

export function* getSongSaga(action) {
  yield requestGetSong(action.song);
  yield put(setSongSlice(action.song));
}

export function* createSongSaga(action) {
  yield put(addSongSlice(action.song));
  const resp: AxiosResponse = yield requestAddSong(action.song);
}

export function* updateSongSaga(action) {
  console.log("editing", action.song);
  yield put(editSongSlice(action.song));
  yield requestEditSong(action.song);
}

export function* deleteSongSaga(action) {
  yield put(removeSongSlice(action.song));
  yield requestRemoveSong(action.song);
}

export function* watchSongsAsync() {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(GET_SONG, getSongSaga);
  yield takeEvery(CREATE_SONG, createSongSaga);
  yield takeEvery(EDIT_SONG, updateSongSaga);
  yield takeEvery(DELETE_SONG, deleteSongSaga);
}
