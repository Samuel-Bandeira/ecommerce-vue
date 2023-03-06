<template>
  <div v-if="book" class="product-page-container">
    <LeftColumn :book="book" />
    <MidColumn :book="book" />
    <RightColumn :book="book" />
  </div>
</template>
<script>
import { getBook } from "@/data/website/books";

import MidColumn from "../components/BookPage/MidColumn.vue";
import LeftColumn from "../components/BookPage/LeftColumn.vue";
import RightColumn from "../components/BookPage/RightColumn.vue";

export default {
  name: "product-page",
  components: {
    MidColumn,
    LeftColumn,
    RightColumn
  },
  async created() {
    const bookId = Number(this.$route.params.id);
    this.book = getBook({ id: bookId });
    console.log("on book page, book", this.book);
  },
  data() {
    return {
      book: null
    };
  }
};
</script>
<style lang="scss" src="../scss/book-page/book-page.scss" />
