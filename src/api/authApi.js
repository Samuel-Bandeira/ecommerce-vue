import { api, setAuthorizationHeader } from "./api";
import { store } from "@/store";
export const login = async ({ credentials }) => {
  const response = await api.post("/auth/local", credentials);
  const token = response.data.jwt;
  const user = response.data.user;
  store.commit("authStore/setToken", { token });
  store.commit("authStore/setUser", { user });
  setAuthorizationHeader(token);
  return true;
};

export const verifyToken = async () => {};
