import { createStore } from "vuex";
import { cartStore } from "./cart";
import { productStore } from "./products";
import { authStore } from "./auth";

export const store = createStore({
  modules: {
    cartStore,
    productStore,
    authStore,
  },
});
