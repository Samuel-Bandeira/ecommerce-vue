<template>
  <div class="product-main-info">
    <h1>{{ book.title }}</h1>
    <div
      v-for="author in book.authors"
      :key="author.id"
      class="product-main-info-author"
    >
      <p>por: {{ author.name }}</p>
    </div>
    <div class="product-description">
      <p>
        {{ book.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "center-content",
  props: ["book"]
};
</script>
<style lang="scss" src="../../scss/book-page/mid-column.scss" />
