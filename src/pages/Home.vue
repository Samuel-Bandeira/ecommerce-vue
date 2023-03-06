<template>
  <div class="home-container">
    <Banner />
    <Books label="Os mais vendidos" :books="books" />
    <Books label="Ofertas" :books="books" />
    <Books label="Lançamentos" :books="books" />
  </div>
</template>
<script lang="js">

import { getCategories } from '@/data/website/categories'
import { getBooks } from '@/data/website/books';
import Banner from '@/components/Home/Banner.vue';
import Books from '@/components/Home/Books.vue';

export default {
  name: "home-page",
  async created() {
    this.categories = getCategories()
    this.books = getBooks();
  },
  components: {
    Books,
    Banner
  },
  data() {
    return {
      books:null,
      categories:null
    };
  },
};
</script>
<style lang="scss" src="../scss/home/home.scss" scoped />
