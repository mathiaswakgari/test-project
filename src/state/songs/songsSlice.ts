import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song } from "../../models/song";

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
    addSongSlice: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
      return state;
    },
    removeSongSlice: (state, action: PayloadAction<Song>) => {
      const songs = state.songs.filter((song) => song.id !== action.payload.id);
      state.songs = songs;

      return state;
    },
    editSongSlice: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.map((song) =>
        song.id == action.payload.id ? action.payload : song
      );
      return state;
    },

    getSongsSlice: (state, action: PayloadAction<Array<Song>>) => {
      state.songs = action.payload;
      return state;
    },
  },
});

export const { removeSongSlice, addSongSlice, editSongSlice, getSongsSlice } =
  songsSlice.actions;

export default songsSlice.reducer;
