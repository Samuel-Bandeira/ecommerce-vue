<template>
  <div class="navbar-container">
    <img
      src="../assets/amazon_logo_white.svg.png"
      alt="amazon_logo"
      class="amazon-logo"
      @click="goHome()"
    />
    <div class="address-container">
      <div class="pi pi-map-marker"></div>
      <div class="address-container-text">
        <p>Olá</p>
        <p>Selecione o endereço</p>
      </div>
    </div>
    <div class="search-bar">
      <Dropdown
        :options="categories"
        optionLabel="name"
        placeholder="Category"
        v-model="selectedCategory"
      />
      <AutoComplete optionLabel="name" class="w-full" />
      <div class="search-bar-icon">
        <i class="pi pi-search" />
      </div>
    </div>
    <div>
      <p>Olá, faça seu login</p>
    </div>
    <div>
      <p>Pedidos</p>
    </div>
    <div class="shopping-cart">
      <i class="pi pi-shopping-cart" style="font-size: 2em" />
      <p>Carrinho</p>
      <!-- <Badge value="2"></Badge> -->
    </div>
  </div>
  <Menubar :model="subItems" class="sub-menu"></Menubar>
</template>

<script>
import AutoComplete from "primevue/autocomplete";
import Menubar from "primevue/menubar";
import Dropdown from "primevue/dropdown";
import { getBooksCategories } from "../api/book/bookApi";
// import Badge from "primevue/badge";

export default {
  name: "navbar-component",
  components: {
    Menubar,
    AutoComplete,
    Dropdown,
    // Badge,
  },
  created() {
    const response = getBooksCategories();
    this.categories = response;
  },
  data() {
    return {
      selectedCategory: "",
      categories: [],
      mainItems: [
        {
          label: "Login",
          url: "/login",
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
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    login() {},
  },
};
</script>
<style src="../scss/navbar/index.scss" lang="scss" />
