<template>
  <div class="home-container" v-if="books && categories">
    <SideFilters :categories="categories" />
    <DisplayedBook :books="books" />
  </div>
  <div v-else>
    <div>Loading...</div>
  </div>
</template>
<script lang="js">

import { getBooks, getBooksCategories } from '../api/book/bookApi'
import DisplayedBook from '@/components/DisplayedProducts/DisplayedBooks.vue';
import SideFilters from '@/components/SideFilters.vue'

export default {
  name: "home-page",
  computed: {
    products() {
      return this.$store.state.homeProducts
    }
  },
  watch: {
    products(newValue) {
      this.books = newValue
    }
  },
  async created() {
    this.categories = await getBooksCategories()
    const fetchedProducts = await getBooks();

    this.$store.commit('setProducts', {
      fetchedProducts
    })
    this.books = this.$store.state.homeProducts
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
