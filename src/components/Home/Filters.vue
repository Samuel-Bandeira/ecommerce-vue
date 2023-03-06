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
        :value="category.name"
        v-model="selectedCategories"
      />
      <p>{{ category.name }}</p>
    </div>
  </div>
</template>
<script>
import Checkbox from "primevue/checkbox";

export default {
  name: "side-filters",
  props: {
    categories: Array
  },
  components: {
    Checkbox
  },
  data() {
    return {
      selectedCategories: []
    };
  }
};
</script>
<style lang="scss" src="../../scss/side-filters/index.scss" />
