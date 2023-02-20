export const productStore = {
  namespaced: true,
  state() {
    return {
      homeProducts: [],
    };
  },
  mutations: {
    setProducts(state, payload) {
      state.homeProducts = payload.fetchedProducts;
    },
    changeFilteredBooks(state, payload) {
      state.homeProducts = payload.filteredProducts;
    },
  },
};
