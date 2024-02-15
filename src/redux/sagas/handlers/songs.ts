import { call, put } from "redux-saga/effects";
import { setSongs } from "../../../state/songs/songsSlice";
import { requestGetSongs } from "../requests/songs";
import { AxiosResponse } from "axios";

export function* handleGetSongs() {
  try {
    const response: AxiosResponse = yield call(requestGetSongs); // requestGetSongs
    const { data } = response;
    yield put(setSongs(data));
  } catch (error) {
    console.log(error);
  }
}
