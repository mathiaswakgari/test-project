import axios from "axios";

export const requestGetSong = async (id: number) =>
  axios.get(`placeholder.typicode.com/photos/${id}`);
