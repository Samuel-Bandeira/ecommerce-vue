import { getUserCart } from "@/api/user";
//http://localhost:1337/api/carts?filters[users_permissions_user][username][$eq]=testing&populate=*

export const cartStore = {
  namespaced: true,
  state() {
    return {
      cart: []
    };
  },
  mutations: {
    increment(state, { book, quantity }) {
      let alreadyIn = false;

      state.cart.forEach((item) => {
        if (item.id === book.id) alreadyIn = true;
      });

      if (alreadyIn) {
        state.cart.forEach((item) => {
          if (item.id == book.id) {
            item.quantity += quantity;
          }
        });
      } else {
        state.cart.push({ ...book, quantity: quantity });
      }

      console.log("newest cart", state.cart);
    },
    changeQuantity(state, payload) {
      state.cart.forEach((item) => {
        if (item.id === payload.idToUpdate) {
          item.quantity = payload.newQuantity;
        }
      });
    },
    clearCart(state) {
      state.cart = [];
    },
    fillUserCart(state, { cart }) {
      console.log("filling cart");
      state.cart = cart;
    }
  },
  actions: {
    async getAndSetUserCart({ commit }, { userId }) {
      const cart = await getUserCart({ userId });
      commit("fillUserCart", { cart });
    }
  },
  getters: {
    totalCartPrice(state) {
      if (state.cart.length === 0) return 0;

      return state.cart.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      );
    },
    itemsQuantity(state) {
      if (state.cart.length === 0) return 0;

      return state.cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
      );
    }
  }
};
