<template>
  <div v-if="book" class="product-page-container">
    <div class="product-main">
      <img :src="getCoverSrcFromBook(book)" alt="book_cover" />
      <div>
        <p>Author</p>
        <div v-for="author in authors" :key="author.id">
          <p>hello</p>
          <img :src="getImageSrcFromEntity(author)" alt="author" />
          <p>{{ formatFullName(author) }}</p>
          <button>Seguir</button>
        </div>
      </div>
    </div>
    <div class="product-main-info">
      <p>Product Info</p>
    </div>
    <div class="product-payment-action">Payment action</div>
  </div>
</template>
<script>
import {
  getCoverSrcFromBook,
  getImageSrcFromEntity,
  formatFullName,
} from "@/utils";
import { getBook } from "../api/book/bookApi";

export default {
  name: "product-page",
  async created() {
    this.book = await getBook({ id: this.$route.params.id });
  },
  computed: {
    authors() {
      return this.book.attributes.authors.data;
    },
  },
  methods: {
    getImageSrcFromEntity,
    getCoverSrcFromBook,
    formatFullName,
  },
  data() {
    return {
      book: null,
    };
  },
};
</script>
<style lang="scss" src="../scss/product-page/index.scss"></style>
