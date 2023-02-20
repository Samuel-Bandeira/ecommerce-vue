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
      console.log("cart i", this.state.cartItems);
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
