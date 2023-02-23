import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import { store } from "./store";
import { createApp } from "vue";
import * as VueRouter from "vue-router";
import axios from "axios";

import Product from "./pages/Product/Product.vue";
import AddedToCart from "./pages/AddedToCart/AddedToCart.vue";
import Home from "./pages/Home.vue";
import Cart from "./pages/Cart/Cart.vue";
import App from "./App.vue";
import Login from "./pages/Login.vue";
import Playground from "./pages/Playground/Playground.vue";
import ListBooks from "./pages/ListBooks.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: <Home />,
  },
  {
    path: "/product/:id",
    component: <Product />,
  },
  {
    path: "/cart",
    component: <Cart />,
  },
  {
    path: "/cart/added",
    component: <AddedToCart />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/playground",
    component: <Playground />,
  },
  {
    path: "/books",
    component: <ListBooks />,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export const app = createApp(App);
app.use(router).use(PrimeVue).use(store);

app.config.globalProperties.$http = axios.create({
  baseURL: "http://localhost:1337/",
});
app.mount("#app");
