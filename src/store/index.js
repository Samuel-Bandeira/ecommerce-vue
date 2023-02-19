import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      cartItems: [],
    };
  },
  mutations: {
    increment(state, payload) {
      state.cartItems.push(payload);
    },
  },
});
