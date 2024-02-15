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
    edit: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.map((song) =>
        song.id == action.payload.id ? action.payload : song
      );
    },
  },
});

export const { remove, add, edit } = songsSlice.actions;

export default songsSlice.reducer;
