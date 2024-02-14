import { createSlice } from "@reduxjs/toolkit";
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
    add: (state) => {
      state.songs.push({
        title: "Check In",
        albumTitle: "Rehab",
        id: 1,
        thumbnailUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6NTJBXieVjETP82VXNE2Hk3CMAe5A0bpLv3L3bPU5zhjxpJ9S3NqtVAFx55O6yzBC9E&usqp=CAU",
      });
    },
  },
});

export const { add } = songsSlice.actions;

export default songsSlice.reducer;
