import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import { store } from "./store";
import { createApp } from "vue";
import * as VueRouter from "vue-router";

import Product from "./pages/BookPage.vue";
import AddedToCart from "./pages/CartNewItem.vue";
import Home from "./pages/Home.vue";
import Cart from "./pages/Cart.vue";
import App from "./App.vue";
import Login from "./pages/Login.vue";
import ListBooks from "./pages/BooksDataTable.vue";
import DataTableChallenge from "./pages/DataTableChallenge.vue";
import InfinityScrollDataTable from "./pages/InfinityScrollDataTable.vue";
import VueObserveVisibility from "vue-observe-visibility";

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
    path: "/books",
    component: <ListBooks />,
  },
  {
    path: "/data-table-challenge",
    component: <DataTableChallenge></DataTableChallenge>,
  },
  {
    path: "/infinity-scroll-data-table",
    component: <InfinityScrollDataTable />,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export const app = createApp(App);
app.use(router).use(PrimeVue).use(store).use(VueObserveVisibility);
app.directive("observe-visibility", VueObserveVisibility.ObserveVisibility);
app.mount("#app");
