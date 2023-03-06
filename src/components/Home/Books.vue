<template>
  <div class="section-container">
    <p class="section-label">{{ label }}</p>
    <Carousel :value="books" :numVisible="5" :numScroll="1">
      <template #item="{ data }">
        <Book :book="data" />
      </template>
    </Carousel>
  </div>
</template>
<script>
// import BookCard from "./DisplayedBooks/BookCard.vue";
import Carousel from "primevue/carousel";

import Book from "./Book.vue";
export default {
  name: "books-container",
  components: {
    Book,
    Carousel
  },
  props: ["books", "label"],
  methods: {}
};
</script>
<style lang="scss" src="../../scss/home/books.scss"></style>
