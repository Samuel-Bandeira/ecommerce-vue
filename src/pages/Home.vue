<template>
  <div class="home-container">
    <SideFilters />
    <BooksContainer :items="items" />
  </div>
</template>
<script lang="js">
import BooksContainer from '@/components/BooksContainer.vue';
import SideFilters from '@/components/SideFilters/SideFilters.vue'
import { getBooks } from '../api/book/bookApi'
export default {
  name: "home-page",
  async created() {
    const response = getBooks();
    this.items = response
  },
  components: {
    BooksContainer,
    SideFilters
  },
  data() {
    return {
      items:[]
    };
  },
};
</script>
<style lang="scss" src="../scss/home/index.scss" />
