<template>
  <div v-if="book" class="added-to-cart-container">
    <div class="added-to-cart-product">
      <img :src="getCoverSrcFromBook(book)" alt="book-image" />
      <div class="added-to-cart-product-info">
        <div class="added-to-cart-product-text">
          <i class="pi pi-check-circle" />
          <p>Adicionado ao carrinho</p>
        </div>
        <div class="book-title">
          <p>{{ book.attributes.title }}</p>
        </div>
      </div>
    </div>
    <Subtotal />
  </div>
</template>
<script>
import Subtotal from "@/pages/AddedToCart/Subtotal.vue";
import { getBook } from "@/api/bookApi";
import { getCoverSrcFromBook } from "@/utils";

export default {
  components: {
    Subtotal,
  },
  async created() {
    const id = this.$route.query.newItem;
    this.book = await getBook({ id });
  },
  data() {
    return {
      book: null,
    };
  },
  methods: {
    getCoverSrcFromBook,
  },
};
</script>
<style lang="scss" src="../../scss/added-to-card/index.scss" />
