export const authStore = {
  namespaced: true,
  state() {
    return {
      isLoggedIn: true,
      token: "token",
      user: {
        name: "Samuel",
        last_name: "Bandeira de Oliveira",
        role: "client"
      }
    };
  },
  mutations: {
    // setToken(state, { token }) {
    //   state.token = token;
    // },
    // setUser(state, { user }) {
    //   state.user = user;
    // },
    // userLoggedOut(state) {
    //   state.isLoggedIn = false;
    //   state.user = null;
    //   state.token = null;
    // }
  }
};
