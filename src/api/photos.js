import axios from "axios";
const URL_PREFIX = "https://jsonplaceholder.typicode.com";
export const getPhotos = async () => {
  const response = await axios.get(URL_PREFIX + `/photos?_page=${1}`);
  return response;
};
