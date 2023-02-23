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
        optionLabel="attributes.name"
        placeholder="Category"
        v-model="selectedCategory"
      />
      <AutoComplete
        optionLabel="attributes.title"
        class="w-full"
        v-model="selectedBook"
        :suggestions="filteredBooks"
        @complete="searchBook($event)"
      >
        <template #item="slotProps">
          <div
            class="slot-autocomplete"
            @click="search(slotProps.item)"
            @keyup.enter="search(slotProps.item)"
          >
            <img :src="getCoverSrcFromBook(slotProps.item)" alt="book_cover" />
            <div>{{ slotProps.item.attributes.title }}</div>
          </div>
        </template>
      </AutoComplete>
      <div class="search-bar-icon">
        <i class="pi pi-search" />
      </div>
    </div>
    <div v-if="user" class="login-container">
      <p>Bem vindo</p>
      <p>{{ user.username }}</p>
    </div>
    <div v-else class="login-container" @click="redirectToLogin()">
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
      <Badge :value="totalItemsQuantity" />
    </div>
  </div>
  <Menubar :model="subNavbarItems" class="sub-menu" />
</template>

<script>
import AutoComplete from "primevue/autocomplete";
import Dropdown from "primevue/dropdown";
import Menubar from "primevue/menubar";
import Badge from "primevue/badge";

import {
  getBooks,
  getBooksByCategories,
  getBooksCategories,
} from "../api/bookApi";
import { getSubNavbarItems, getCoverSrcFromBook } from "../utils/index";
export default {
  name: "navbar-component",
  components: {
    Menubar,
    AutoComplete,
    Dropdown,
    Badge,
  },
  async created() {
    this.books = await getBooks();
    this.categories = await getBooksCategories();
    console.log("cate", this.categories);
    this.subNavbarItems = getSubNavbarItems();
  },
  watch: {
    selectedCategory(newValue) {
      this.changeCategory({ category: newValue });
    },
  },
  computed: {
    totalItemsQuantity() {
      return this.$store.getters["cartStore/itemsQuantity"];
    },
    user() {
      return this.$store.state.authStore.user;
    },
  },
  data() {
    return {
      books: [],
      selectedBook: null,
      filteredBooks: null,
      selectedCategory: null,
      categories: null,
      subNavbarItems: [],
    };
  },
  methods: {
    getCoverSrcFromBook,
    search(book) {
      this.redirectToBookPage({ bookId: book.id });
    },
    searchBook(event) {
      if (!event.query.trim().length) {
        this.filteredBooks = [...this.books];
      } else {
        this.filteredBooks = this.books.filter((book) => {
          return book.attributes.title
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }
    },
    async changeCategory({ category }) {
      const books = await getBooksByCategories([category.attributes.name]);
      this.$store.commit("productStore/changeFilteredBooks", {
        filteredProducts: books,
      });
    },
    redirectToHome() {
      this.$router.push({ path: "/" });
    },
    redirectToCart() {
      this.$router.push({ path: "/cart" });
    },
    redirectToLogin() {
      this.$router.push({ path: "/login" });
    },
    redirectToBookPage({ bookId }) {
      this.$router.push({ path: `/product/${bookId}` });
    },
  },
};
</script>
<style src="../scss/navbar/index.scss" lang="scss" />
