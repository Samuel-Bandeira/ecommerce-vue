<template>
  <div class="home-container" v-if="books && categories">
    <Filters :categories="categories" />
    <Books :books="books" />
  </div>
  <div v-else>
    <div>Loading...</div>
  </div>
</template>
<script lang="js">

import { getBooks, getBooksCategories } from '../api/bookApi'
import Books from '@/components/Home/Books.vue';
import Filters from '@/components/Home/Filters.vue'

export default {
  name: "home-page",
  computed: {
    products() {
      return this.$store.state.productStore.homeProducts
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
    console.log(fetchedProducts)
    this.$store.commit('productStore/setProducts', {
      fetchedProducts
    })
    this.books = this.$store.state.productStore.homeProducts
  },
  components: {
    Books,
    Filters
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
<style lang="scss" src="../scss/home/home.scss" />
