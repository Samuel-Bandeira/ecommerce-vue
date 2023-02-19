<template>
  <Card @click="goToPage()">
    <template #header>
      <img
        :src="getCoverSrcFromBook(this.book)"
        alt="book-cover"
        class="book-cover"
      />
    </template>
    <template #title> {{ book.title }} </template>
    <template #content>
      <div>
        <div v-for="author in authors" :key="author.id">
          <p>
            {{ formatFullName(author) }}
          </p>
        </div>
      </div>
      <div v-for="category in categories" :key="category.id">
        <p>{{ category.attributes.name }}</p>
      </div>
      <h2>R$ {{ price }}</h2>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import { getCoverSrcFromBook, formatFullName } from "@/utils";
export default {
  props: ["book"],
  computed: {
    authors() {
      return this.book.attributes.authors.data;
    },
    categories() {
      return this.book.attributes.categories.data;
    },
    price() {
      return this.book.attributes.price;
    },
  },
  methods: {
    getCoverSrcFromBook,
    formatFullName,
    goToPage() {
      this.$router.push(`/product/${this.book.id}`);
    },
  },
  components: {
    Card,
  },
};
</script>

<style src="../scss/book-card/index.scss" lang="scss"></style>
