import { api, setAuthorizationHeader, unSetAuthorizationHeader } from "./api";
import { store } from "@/store";

export const login = async ({ credentials }) => {
  let successOnLogin = false;
  try {
    const { data } = await api.post("/auth/local", credentials);
    const { user, jwt } = data;

    setAuthorizationHeader(jwt);

    localStorage.setItem("jwtToken", jwt);
    console.log("jwt", jwt);
    localStorage.setItem("user", JSON.stringify(user));

    store.commit("authStore/setToken", { jwt });
    store.commit("authStore/setUser", { user });

    successOnLogin = true;
  } catch (e) {
    console.log("Login Error");
  }
  return successOnLogin;
};

export const logout = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("user");
  store.commit("authStore/clearUserAndToken");
  store.commit("cartStore/clearCart");
  unSetAuthorizationHeader();
};
