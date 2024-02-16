import axios from "axios";
import { Song } from "../../../models/song";

export const url = "https://jsonplaceholder.typicode.com/photos";

export const requestGetSong = async (id: number) => axios.get(`${url}/${id}`);

export function requestGetSongs() {
  return axios.get(url);
}

export function requestAddSong(song: Song) {
  return axios.post(url, {
    title: song.title,
    thumbnailUrl: song.thumbnailUrl,
  });
}

export async function requestRemoveSong(song: Song) {
  return axios.delete(`${url}/${song.id}`);
}

export async function requestEditSong(song: Song) {
  return axios.put(`${url}/${song.id}`, song);
}
