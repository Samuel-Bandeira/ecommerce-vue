<template>
  <div class="product-main">
    <img :src="getCoverSrcFromBook(book)" alt="book_cover" class="book-cover" />
    <div>
      <p>Author</p>
      <div
        v-for="author in authors"
        :key="author.id"
        class="author-info-container"
      >
        <div class="author-profile">
          <img :src="getImageSrcFromEntity(author)" alt="author-profile" />
        </div>
        <div class="author-name">
          <p>{{ author.attributes.name }}</p>
          <p>{{ author.attributes.last_name }}</p>
        </div>
        <Button label="Seguir" />
      </div>
    </div>
  </div>
</template>
<script>
import { getCoverSrcFromBook, getImageSrcFromEntity } from "@/utils";
import Button from "primevue/button";

export default {
  name: "center-content",
  props: ["book"],
  components: {
    Button,
  },
  computed: {
    authors() {
      return this.book.attributes.authors.data;
    },
  },
  methods: {
    getImageSrcFromEntity,
    getCoverSrcFromBook,
  },
};
</script>
<style lang="scss" src="../../scss/product-page/book-main.scss" />
