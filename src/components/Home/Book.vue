<template>
  <!-- <Card @click="goToPage()">
    <template #header>
      <img :src="book.cover" alt="book-cover" class="book-cover" />
    </template>
    <template #content>
      {{ book.title }}
      <div>
        <div v-for="author in book.authors" :key="author.id">
          <p>{{ author.name }}</p>
        </div>
      </div>
      <div v-for="category in book.categories" :key="category.id">
        <p>{{ category.name }}</p>
      </div>
      <h2>R$ {{ book.price }}</h2>
    </template>
  </Card> -->
  <div class="card" @click="goToBookPage()">
    <div class="cover-container">
      <img :src="book.cover" alt="book-cover" />
    </div>
    <p class="title">{{ book.title }}</p>
    <p class="price">R$ {{ book.price }}</p>
    <Button label="Comprar" class="p-button-warning"></Button>
  </div>
</template>

<script>
// import Card from "primevue/card";
import Button from "primevue/button";
export default {
  name: "book-component",
  props: ["book"],
  methods: {
    goToBookPage() {
      this.$router.push(`/product/${this.book.id}`);
    }
  },
  components: {
    Button
    // Card
  }
};
</script>

<style src="../../scss/home/book.scss" lang="scss" scoped></style>
