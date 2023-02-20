<template>
  <div class="home-container" v-if="books && categories">
    <SideFilters :categories="categories" />
    <DisplayedBook :books="books" />
  </div>
</template>
<script lang="js">

import { getBooks, getBooksCategories } from '../api/book/bookApi'
import DisplayedBook from '@/components/DisplayedProducts/DisplayedBooks.vue';
import SideFilters from '@/components/SideFilters.vue'

export default {
  name: "home-page",
  async created() {
    this.books = await getBooks()
    this.categories = await getBooksCategories()
  },
  components: {
    DisplayedBook,
    SideFilters
  },
  data() {
    return {
      books:null,
      categories:null
    };
  },
  methods: {}
};
</script>
<style lang="scss" src="../scss/home/index.scss" />
