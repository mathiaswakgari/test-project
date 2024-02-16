import { Song } from "../../models/song";

export const GET_SONGS = "GET_SONGS";
export const GET_SONG = "GET_SONG";
export const CREATE_SONG = "CREATE_SONG";
export const EDIT_SONG = "EDIT_SONG";
export const DELETE_SONG = "DELETE_SONG";

export interface Action {
  song: Song;
  type: string;
}
