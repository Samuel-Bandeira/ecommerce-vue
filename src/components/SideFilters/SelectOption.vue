<template>
  <div class="select-option">
    <Checkbox
      :inputId="String(option.id)"
      name="category"
      :value="option.attributes.name"
      v-model="selectedCategoriesCopy"
      @change="getFilteredBooks(option.attributes)"
    />
    <p>{{ option.attributes.name }}</p>
  </div>
</template>
<script>
import Checkbox from "primevue/checkbox";
// import { getBooksByCategories } from "@/api/book/bookApi";
export default {
  name: "select-option",
  components: {
    Checkbox,
  },
  props: ["option", "selectedOptions"],
  created() {
    console.log(this.option.attributes.name);
  },
  computed: {
    selectedCategoriesCopy() {
      return this.selectedOptions;
    },
  },
  methods: {
    getFilteredBooks(option) {
      console.log(option);
      console.log("selected:", this.selectedOptions);
      // const data = getBooksByCategories(option);
      // console.log(data);
    },
  },
};
</script>
<style lang="scss"></style>
