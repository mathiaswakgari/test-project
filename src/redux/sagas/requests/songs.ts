import axios from "axios";
import { Song } from "../../../models/song";

export function requestGetSongs() {
  return axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/photos",
  });
}

export function requestAddSong(song: Song) {
  return axios.post("https://jsonplaceholder.typicode.com/photos", {
    title: song.title,
    thumbnailUrl: song.thumbnailUrl,
  });
}

export async function requestRemoveSong(song: Song) {
  return axios.delete(`https://jsonplaceholder.typicode.com/photos/${song.id}`);
}

export async function requestEditSong(song: Song) {
  return axios.put(
    `https://jsonplaceholder.typicode.com/photos/${song.id}`,
    song
  );
}
