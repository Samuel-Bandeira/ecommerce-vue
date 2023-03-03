import axios from "axios";

const generateAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
  });

  const jwtToken = localStorage.getItem("jwtToken");

  if (jwtToken) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
  }

  return axiosInstance;
};

export const api = generateAxiosInstance();

export const setAuthorizationHeader = (jwtToken) => {
  api.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
};

export const unSetAuthorizationHeader = () => {
  api.defaults.headers.common.Authorization = null;
};
