import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Song from "../../models/song";

interface SongsState {
  songs: Array<Song>;
}

const initialState: SongsState = {
  songs: [],
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
  },
});

export const { add } = songsSlice.actions;

export default songsSlice.reducer;
