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
    <div v-if="user" class="login-container" @click="logUserOut()">
      <p>Olá {{ user.username }}</p>
      <p>Logout</p>
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
      <Badge v-if="cart" :value="cart.attributes.quantity" />
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
  getBooksCategories
} from "../api/bookApi";
import { getCoverSrcFromBook } from "../utils/index";
import { logout } from "../api/authApi";
import { getUser, getUserCart } from "@/api/user";
// import { getSubNavbarItems } from "../utils/index";

export default {
  name: "navbar-component",
  components: {
    Menubar,
    AutoComplete,
    Dropdown,
    Badge
  },
  async created() {
    this.books = await getBooks();
    this.categories = await getBooksCategories();

    if (this.$store.state.authStore.user) {
      const userId = this.$store.state.authStore.user.id;
      this.user = await getUser({ userId });
      this.cart = await getUserCart({ userId });
      console.log(this.cart);
    }
  },
  watch: {
    selectedCategory(newValue) {
      this.changeCategory({ category: newValue });
    }
  },

  data() {
    return {
      books: [],
      cart: null,
      user: null,
      selectedBook: null,
      filteredBooks: null,
      selectedCategory: null,
      categories: null,
      subNavbarItems: [
        {
          label: "",
          url: ""
        }
      ]
    };
  },
  methods: {
    getCoverSrcFromBook,
    getUser,
    logUserOut() {
      logout();
      this.redirectToLogin();
    },
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
        filteredProducts: books
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
    }
  }
};
</script>
<style src="../scss/navbar/index.scss" lang="scss" />
