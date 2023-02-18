<template>
  <div class="grid">
    <template v-for="(item, index) in items" :key="index">
      <div class="xl:col-3 lg:col-4 md:col-6">
        <BookCard :item="item" />
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
    items: Array,
  },
  methods: {
    log() {
      console.log(this.items);
    },
  },
};
</script>
