<template>
  <div class="side-filters-container">
    <div class="side-filter-category-title">Tipos</div>
    <template v-for="category in categories" :key="category.id">
      <SelectOption :option="category.attributes" />
    </template>
  </div>
</template>
<script>
import SelectOption from "./SelectOption.vue";
export default {
  name: "side-filters",
  props: {
    categories: Array,
  },
  components: {
    SelectOption,
  },
};
</script>
<style lang="scss" src="../../scss/side-filters/index.scss"></style>
