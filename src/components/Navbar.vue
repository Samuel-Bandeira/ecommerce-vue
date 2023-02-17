<template>
  <Menubar :model="mainItems" class="main-menu">
    <template #start>
      <img
        alt="logo"
        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        height="40"
        class="mr-2"
        @click="goHome()"
      />
    </template>
  </Menubar>
  <Menubar :model="subItems" class="sub-menu"></Menubar>
</template>
<script>
import Menubar from "primevue/menubar";
export default {
  name: "navbar-component",
  components: {
    Menubar,
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
  data() {
    return {
      mainItems: [
        {
          label: "Login",
          url: "/",
        },
        {
          label: "Pedido e Devoluções",
          url: "/about-me",
        },
        {
          label: "Carrinho",
          url: "/projects",
        },
      ],
      subItems: [
        {
          label: "Mais vendidos",
          url: "/top-selled",
        },
        {
          label: "Eletrônicos",
          url: "/tech",
        },
      ],
    };
  },
};
</script>
<style>
* {
  margin: 0 !important;
}
.main-menu.p-menubar {
  padding: 10px 20px !important;
}
.sub-menu.p-menubar {
  padding: 0px !important;
  border: none !important;
}
.p-menubar-start {
  flex: 1;
}
</style>
