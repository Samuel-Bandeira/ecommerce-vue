<template>
  <div class="side-filters-container">
    <div class="side-filter-category-title">Tipos</div>
    <div
      class="side-filter-option"
      v-for="category in categories"
      :key="category.id"
    >
      <Checkbox
        :inputId="String(category.id)"
        name="category"
        :value="category.attributes.name"
        v-model="selectedCategories"
        @change="getFilteredBooks(category.attributes)"
      />
      <p>{{ category.attributes.name }}</p>
    </div>
  </div>
</template>
<script>
import { getBooksByCategories } from "@/api/bookApi";
import Checkbox from "primevue/checkbox";

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
    async getFilteredBooks() {
      const filteredProducts = await getBooksByCategories(
        this.selectedCategories
      );
      this.$store.commit("productStore/changeFilteredBooks", {
        filteredProducts,
      });
    },
  },
};
</script>
<style lang="scss" src="../../scss/side-filters/index.scss" />
