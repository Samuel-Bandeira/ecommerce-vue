<template>
  <div v-if="book" class="product-page-container">
    <MidColumn :book="book" />
    <LeftColumn :book="book" />
    <RightColumn :book="book" />
  </div>
</template>
<script>
import { getBook } from "../api/bookApi";
import MidColumn from "../components/BookPage/MidColumn.vue";
import LeftColumn from "../components/BookPage/LeftColumn.vue";
import RightColumn from "../components/BookPage/RightColumn.vue";

export default {
  name: "product-page",
  components: {
    MidColumn,
    LeftColumn,
    RightColumn,
  },
  async created() {
    this.book = await getBook({ id: this.$route.params.id });
  },
  data() {
    return {
      book: null,
    };
  },
};
</script>
<style lang="scss" src="../scss/book-page/book-page.scss" />
