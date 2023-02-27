export const authStore = {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem("token"),
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  mutations: {
    setToken(state, { token }) {
      state.token = token;
    },
    setUser(state, { user }) {
      state.user = user;
    },
    clearUserAndToken(state) {
      state.user = null;
      state.token = null;
    },
  },
};
