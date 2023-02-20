import { createStore } from "vuex";
export const store = createStore({
  state() {
    return {
      homeProducts: [],
      cartItems: [],
    };
  },
  mutations: {
    setProducts(state, payload) {
      state.homeProducts = payload.fetchedProducts;
    },
    increment(state, payload) {
      let alreadyIn = false;
      state.cartItems.forEach((item) => {
        if (item.id === payload.book.id) alreadyIn = true;
      });

      if (alreadyIn) {
        state.cartItems.forEach((item) => {
          if (item.id == payload.book.id) {
            item.quantity += payload.quantity;
          }
        });
      } else {
        state.cartItems.push({ ...payload.book, quantity: payload.quantity });
      }
    },
    changeQuantity(state, payload) {
      state.cartItems.forEach((item) => {
        if (item.id === payload.idToUpdate) {
          item.quantity = payload.newQuantity;
        }
      });
    },
    changeFilteredBooks(state, payload) {
      state.homeProducts = payload.filteredProducts;
    },
  },
  getters: {
    totalCartPrice(state) {
      const total = state.cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.attributes.price * currentValue.quantity,
        0
      );
      return total;
    },
    itemsQuantity(state) {
      const quantity = state.cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
      );
      return quantity;
    },
  },
});
