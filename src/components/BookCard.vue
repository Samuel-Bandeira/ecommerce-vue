<template>
  <Card @click="goToPage()">
    <template #header>
      <img :src="coverSrc" alt="book-cover" class="px-6 pt-5 bg-gray-100" />
    </template>
    <template #title> {{ book.title }} </template>
    <template #content>
      <div>
        <div v-for="author in authorsInfo" :key="author.id">
          <p>
            {{ author.attributes.name + " " + author.attributes.last_name }}
          </p>
        </div>
      </div>
      <div v-for="category in categories" :key="category.id">
        <p>{{ category.name }}</p>
      </div>
      <h2>R$ {{ price }}</h2>
    </template>
  </Card>
</template>
<script>
import Card from "primevue/card";
export default {
  props: ["book"],
  computed: {
    coverSrc() {
      const thumbnail =
        this.book.attributes.cover.data.attributes.formats.thumbnail.url;
      const value = process.env.VUE_APP_API_BASE_URL + thumbnail;
      return value;
    },
    authorsInfo() {
      const authors = this.book.attributes.authors.data;
      return authors;
    },
    categories() {
      const categories = this.book.attributes.categories.data;
      console.log(categories);
      return categories[0];
    },
    price() {
      return this.book.attributes.price;
    },
  },
  methods: {
    goToPage() {
      this.$router.push(`/product/${this.book.id}`);
    },
  },
  components: {
    Card,
  },
};
</script>
<style></style>
