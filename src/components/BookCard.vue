<template>
  <Card @click="goToPage()">
    <template #header>
      <img :src="item.cover" alt="book-cover" class="px-6 pt-5 bg-gray-100" />
    </template>
    <template #title> {{ item.title }} </template>
    <template #content>
      <div>por {{ item.author }}</div>
      <h2>R$ {{ item.price }}</h2>
    </template>
  </Card>
</template>
<script>
import Card from "primevue/card";
export default {
  props: {
    item: {
      title: String,
      cover: String,
      author: String,
      price: Number,
    },
    test: String,
  },
  methods: {
    goToPage() {
      this.$router.push(`/product/${this.item.id}`);
    },
  },
  components: {
    Card,
  },
};
</script>
<style></style>
