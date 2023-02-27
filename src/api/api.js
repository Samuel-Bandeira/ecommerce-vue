import axios from "axios";
const jwtToken = localStorage.getItem("jwt");
console.log(jwtToken);

export const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

export const setAuthorizationHeader = (token) => {
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else api.defaults.headers.common["Authorization"] = null;
};
