<template>
  <div class="home-container">
    <SideFilters :categories="categories" />
    <BooksContainer :books="books" />
  </div>
</template>
<script lang="js">
import BooksContainer from '@/components/BooksContainer.vue';
import SideFilters from '@/components/SideFilters/index.vue'
import { getBooks, getBooksCategories } from '../api/book/bookApi'

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
      books:[],
      categories:[]
    };
  },
};
</script>
<style lang="scss" src="../scss/home/index.scss" />
