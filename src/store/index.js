import { createStore } from "vuex";
import { cartStore } from "./modules/cart";
import { productStore } from "./modules/products";
import { authStore } from "./modules/auth";

export const store = createStore({
  modules: {
    cartStore,
    productStore,
    authStore,
  },
});
