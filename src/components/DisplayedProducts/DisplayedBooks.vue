<template>
  <div class="grid" style="width: 70%">
    <template v-for="book in books" :key="book.id">
      <div class="xl:col-3 lg:col-4 md:col-6">
        <BookCard :book="book" />
      </div>
    </template>
  </div>
</template>
<script>
import BookCard from "./BookCard.vue";
export default {
  name: "books-container",
  components: {
    BookCard,
  },
  props: {
    books: Array,
  },
  methods: {},
};
</script>
