import axios from "axios";
const URL_PREFIX = "https://jsonplaceholder.typicode.com";
export const getPhotos = async ({ page }) => {
  const response = await axios.get(URL_PREFIX + `/photos?_page=${page}`);
  return response;
};
