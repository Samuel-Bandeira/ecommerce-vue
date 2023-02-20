<template>
  <div class="side-filters-container">
    <div class="side-filter-category-title">Tipos</div>
    <template v-for="category in categories" :key="category.id">
      <Checkbox
        :inputId="String(category.id)"
        name="category"
        :value="category.attributes.name"
        v-model="selectedCategories"
        @change="getFilteredBooks(category.attributes)"
      />
      <p>{{ category.attributes.name }}</p>
    </template>
  </div>
</template>
<script>
import Checkbox from "primevue/checkbox";
import { getBooksByCategories } from "@/api/book/bookApi";
export default {
  name: "side-filters",
  props: {
    categories: Array,
  },
  components: {
    Checkbox,
  },
  data() {
    return {
      selectedCategories: [],
    };
  },
  methods: {
    getFilteredBooks() {
      const data = getBooksByCategories(this.selectedCategories);
      console.log(data);
    },
  },
};
</script>
<style lang="scss" src="../../scss/side-filters/index.scss"></style>
