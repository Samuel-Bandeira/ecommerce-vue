<template>
  <div v-if="book" class="added-to-cart-container">
    <div class="added-to-cart-product">
      <img :src="getCoverSrcFromBook(book)" alt="book-image" />
      <div class="added-to-cart-product-info">
        <div class="added-to-cart-product-text">
          <i class="pi pi-check-circle" />
          <p>Adicionado ao carrinho</p>
        </div>
        <p>{{ book.attributes.title }}</p>
      </div>
    </div>
    <Subtotal />
  </div>
</template>
<script>
import { getBook } from "@/api/book/bookApi";
import { getCoverSrcFromBook } from "@/utils";
import Subtotal from "@/components/Subtotal.vue";
export default {
  components: {
    Subtotal,
  },
  async created() {
    console.log(this.$store.state.cartItems);
    const id = this.$route.query.newItem;
    this.book = await getBook({ id });
    console.log(
      "🚀 ~ file: AddedToCart.vue:11 ~ created ~ this.book",
      this.book
    );
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
<style lang="scss" src="../scss/added-to-card/index.scss" />
