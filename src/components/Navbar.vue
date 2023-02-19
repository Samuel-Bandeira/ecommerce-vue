<template>
  <div class="navbar-container">
    <img
      src="../assets/amazon_logo_white.svg.png"
      alt="amazon_logo"
      class="amazon-logo"
      @click="redirectToHome()"
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
    <div class="login-container">
      <p>Olá, bem vindo</p>
      <p>faça seu login</p>
    </div>
    <div class="orders-container">
      <p>Devoluções</p>
      <p>e Pedidos</p>
    </div>
    <div class="shopping-cart" @click="redirectToCart()">
      <i class="pi pi-shopping-cart" style="font-size: 2em" />
      <p>Carrinho</p>
    </div>
  </div>
  <Menubar :model="subNavbarItems" class="sub-menu" />
</template>

<script>
import AutoComplete from "primevue/autocomplete";
import Menubar from "primevue/menubar";
import Dropdown from "primevue/dropdown";
import { getBooksCategories } from "../api/book/bookApi";
import { getSubNavbarItems } from "../utils/index";
export default {
  name: "navbar-component",
  components: {
    Menubar,
    AutoComplete,
    Dropdown,
  },
  async created() {
    this.categories = await getBooksCategories();
    this.subNavbarItems = getSubNavbarItems();
  },
  data() {
    return {
      selectedCategory: null,
      categories: null,
      subNavbarItems: [],
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push({ path: "/" });
    },
    redirectToCart() {
      this.$router.push({ path: "/cart" });
    },
  },
};
</script>
<style src="../scss/navbar/index.scss" lang="scss" />
