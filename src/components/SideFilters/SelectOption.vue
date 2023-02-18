<template>
  <div class="select-option">
    <Checkbox name="item" value="item" v-model="selectedCategories" />
    <p>{{ item.name }}</p>
  </div>
</template>
<script>
import Checkbox from "primevue/checkbox";

export default {
  name: "select-option",
  components: {
    Checkbox,
  },
  props: {
    item: {
      id: Number,
      name: String,
      value: [String, Number],
    },
  },
  data() {
    return {
      selectedCategories: [],
    };
  },
};
</script>
<style lang="scss"></style>
