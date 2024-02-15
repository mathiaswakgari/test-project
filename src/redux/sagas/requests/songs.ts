import axios from "axios";

export function requestGetSongs() {
  return axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/photos",
  });
}
