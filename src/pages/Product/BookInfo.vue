<template>
  <div class="product-main-info">
    <h1>{{ book.attributes.title }}</h1>
    <div
      v-for="author in authors"
      :key="author.id"
      class="product-main-info-author"
    >
      <p>por: {{ formatFullName(author) }}</p>
    </div>
    <div class="product-description">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem vero
        qui cumque temporibus, voluptas nam! Accusamus, ratione? Omnis quasi,
        nemo beatae repudiandae obcaecati dolorem magni. A voluptatibus ad
        eveniet.
      </p>
    </div>
  </div>
</template>
<script>
import { formatFullName } from "@/utils";

export default {
  name: "center-content",
  props: ["book"],
  methods: {
    formatFullName,
  },
};
</script>
<style lang="scss" src="../../scss/product-page/book-info.scss" />
