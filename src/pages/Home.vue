<template>
  <div class="home-container" v-if="books && categories">
    <SideFilters :categories="categories" />
    <BooksContainer :books="books" />
  </div>
</template>
<script lang="js">

import { getBooks, getBooksCategories } from '../api/book/bookApi'
import BooksContainer from '@/components/BooksContainer.vue';
import SideFilters from '@/components/SideFilters/index.vue'

export default {
  name: "home-page",
  async created() {
    this.books = await getBooks()
    this.categories = await getBooksCategories()
  },
  components: {
    BooksContainer,
    SideFilters
  },
  data() {
    return {
      books:null,
      categories:null
    };
  },
};
</script>
<style lang="scss" src="../scss/home/index.scss" />
