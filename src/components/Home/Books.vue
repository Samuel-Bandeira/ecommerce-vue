<template>
  <div class="grid" style="width: 70%">
    <template v-for="book in books" :key="book.id">
      <div class="xl:col-3 lg:col-4 md:col-6">
        <Book :book="book" />
      </div>
    </template>
  </div>
</template>
<script>
// import BookCard from "./DisplayedBooks/BookCard.vue";
import Book from "./Book.vue";
export default {
  name: "books-container",
  components: {
    Book,
  },
  props: {
    books: Array,
  },
  methods: {},
};
</script>
