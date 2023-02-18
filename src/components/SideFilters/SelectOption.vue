<template>
  <div class="select-option">
    <Checkbox
      :name="option.name"
      :value="option.name"
      v-model="selectedCategories"
    />
    <p>{{ option.name }}</p>
  </div>
</template>
<script>
import Checkbox from "primevue/checkbox";

export default {
  name: "select-option",
  components: {
    Checkbox,
  },
  props: ["option"],
  data() {
    return {
      selectedCategories: [],
    };
  },
};
</script>
<style lang="scss"></style>
