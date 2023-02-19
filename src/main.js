import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import { store } from "./store";
import { createApp } from "vue";
import * as VueRouter from "vue-router";
import axios from "axios";

import ProductPage from "./pages/ProductPage/Main.vue";
import AddedToCart from "./pages/AddedToCart.vue";
import Home from "./pages/Home.vue";
import Cart from "./pages/Cart.vue";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: <Home />,
  },
  {
    path: "/product/:id",
    component: <ProductPage />,
  },
  {
    path: "/cart",
    component: <Cart />,
  },
  {
    path: "/cart/added",
    component: <AddedToCart />,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router).use(PrimeVue).use(store);
app.config.globalProperties.$http = axios.create({
  baseURL: "https://api.coindesk.com/v1/bpi/",
});
app.mount("#app");
