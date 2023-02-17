import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import PrimeVue from "primevue/config";
import * as VueRouter from "vue-router";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: <Home />,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router).use(PrimeVue);
app.mount("#app");
