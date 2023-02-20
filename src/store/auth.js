export const authStore = {
  namespaced: true,
  state() {
    return {
      token: "",
      user: null,
    };
  },
  mutations: {
    setToken(state, { token }) {
      state.token = token;
    },
    setUser(state, { user }) {
      state.user = user;
    },
  },
};
