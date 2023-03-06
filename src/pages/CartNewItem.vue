<template>
  <div class="added-to-cart-container">
    <div class="added-to-cart-product">
      <img :src="book.cover" alt="book-image" />
      <div class="added-to-cart-product-info">
        <div class="added-to-cart-product-text">
          <i class="pi pi-check-circle" />
          <p>Adicionado ao carrinho</p>
        </div>
        <div class="book-title">
          <p>{{ book.title }}</p>
        </div>
      </div>
    </div>
    <Subtotal />
  </div>
</template>
<script>
import Subtotal from "@/components/CartNewItem/Subtotal.vue";
import { getCoverSrcFromBook } from "@/utils";
import { getBook } from "@/data/website/books";
export default {
  components: {
    Subtotal
  },
  async created() {
    const id = Number(this.$route.query.newItem);
    this.book = getBook({ id });
  },
  data() {
    return {
      book: null
    };
  },
  methods: {
    getCoverSrcFromBook
  }
};
</script>
<style lang="scss" src="../scss/cart-new-item/cart-new-item.scss" />
