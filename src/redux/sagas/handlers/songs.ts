import { call, put } from "redux-saga/effects";
import { add, remove, setSongs } from "../../../state/songs/songsSlice";
import {
  requestAddSong,
  requestGetSongs,
  requestRemoveSong,
} from "../requests/songs";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../../models/song";

export function* handleGetSongs() {
  try {
    console.log("Executing....");
    const response: AxiosResponse = yield call(requestGetSongs); // requestGetSongs
    const { data } = response;
    yield put(setSongs(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddSong(action: PayloadAction<Song>) {
  try {
    console.log("Adding");
    console.log(action.payload);
    const response: AxiosResponse = yield call(requestAddSong, action.payload);
    const { data } = response;
    yield put(add(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteSong(action: PayloadAction<Song>) {
  try {
    console.log("Deleting");
    const response: AxiosResponse = yield call(
      requestRemoveSong,
      action.payload
    );
    const { data } = response;
    yield put(remove(data));
  } catch (error) {
    console.log(error);
  }
}
