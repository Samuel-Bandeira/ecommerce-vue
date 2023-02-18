<template>
  <div v-if="book" class="product-page-container">
    <div class="product-main">
      <img :src="getCoverSrc()" alt="book_cover" />
      <div>
        <p>Author</p>
        <div v-for="author in book.attributes.authors.data" :key="author.id">
          <img :src="getAuthorImageSrc(author)" alt="author" />
          <p>{{ author.attributes.name }} {{ author.attributes.last_name }}</p>
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
import { getBook } from "../api/book/bookApi";
export default {
  name: "product-page",
  async created() {
    this.book = await getBook({ id: this.$route.params.id });
  },
  methods: {
    getCoverSrc() {
      return (
        process.env.VUE_APP_API_BASE_URL +
        this.book.attributes.cover.data.attributes.formats.thumbnail.url
      );
    },
    getAuthorImageSrc(author) {
      return (
        process.env.VUE_APP_API_BASE_URL +
        author.attributes.image.data.attributes.formats.thumbnail.url
      );
    },
  },
  data() {
    return {
      book: null,
    };
  },
};
</script>
<style lang="scss" src="../scss/product-page/index.scss"></style>
