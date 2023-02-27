import { api, setAuthorizationHeader } from "./api";
import { store } from "@/store";
export const login = async ({ credentials }) => {
  const response = await api.post("/auth/local", credentials);
  if (response.status != 200) return false;

  const token = response.data.jwt;
  const user = response.data.user;

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  store.commit("authStore/setToken", { token });
  store.commit("authStore/setUser", { user });

  setAuthorizationHeader(token);

  return true;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setAuthorizationHeader(null);
  store.commit("authStore/clearUserAndToken");
  store.commit("cartStore/clearCart");
};

export const verifyToken = async () => {};
