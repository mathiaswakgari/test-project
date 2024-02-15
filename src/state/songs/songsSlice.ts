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
    remove: (state, action: PayloadAction<Song>) => {
      const songs = state.songs.filter((song) => song.id !== action.payload.id);
      state.songs = songs;
    },
  },
});

export const { remove, add } = songsSlice.actions;

export default songsSlice.reducer;
