import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      homeProducts: [],
      cartItems: [],
    };
  },
  mutations: {
    increment(state, payload) {
      state.cartItems.push(payload);
    },
  },
  getters: {
    totalCartPrice(state) {
      const total = state.cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.attributes.price,
        0
      );
      return total;
    },
    itemsQuantity(state) {
      return state.cartItems.length;
    },
  },
});
