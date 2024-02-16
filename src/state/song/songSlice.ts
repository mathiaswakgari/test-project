import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song } from "../../models/song";

interface SongState {
  song: Song;
}

const initialState: SongState = {
  song: {
    albumTitle: "",
    title: "",
    thumbnailUrl: "",
    id: 11,
  } as Song,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSongSlice: (state, action: PayloadAction<Song>) => {
      state.song = action.payload;
      return state;
    },
  },
});

export const { setSongSlice } = songSlice.actions;

export default songSlice.reducer;
