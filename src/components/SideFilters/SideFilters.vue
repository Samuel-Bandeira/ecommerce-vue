<template>
  <div class="side-filters-container">
    <div class="side-filter-category-title">Tipos</div>
    <template v-for="item of items" :key="item.id">
      <SelectOption :item="item" />
    </template>
  </div>
</template>
<script>
import SelectOption from "./SelectOption.vue";
export default {
  name: "side-filters",
  components: {
    SelectOption,
  },
  data() {
    return {
      checked: false,
      items: [
        {
          id: 1,
          name: "Drama",
          value: "drama",
        },
        {
          id: 2,
          name: "Romance",
          value: "drama",
        },
        {
          id: 3,
          name: "Fiction",
          value: "drama",
        },
        {
          id: 4,
          name: "Horror",
          value: "drama",
        },
      ],
    };
  },
};
</script>
<style lang="scss" src="../../scss/side-filters/index.scss"></style>
