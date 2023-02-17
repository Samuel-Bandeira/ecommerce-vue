<template>
  <div class="flex">
    <div class="px-8">
      <h1>Filters will be here</h1>
    </div>
    <div class="grid">
      <template v-for="(item, index) in items" :key="index">
        <div class="xl:col-3 lg:col-4 md:col-6">
          <BookCard :item="item" />
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="js">
import BookCard from '@/components/BookCard.vue';
export default {
  name: "home-page",
  components: {
    BookCard
  },
  data() {
    return {
      test: "hello",
      items: [
        {
          id: 1,
          title: "IT",
          author: "Lorem Ypsum",
          cover: "https://m.media-amazon.com/images/I/51z0s3GcvwL.jpg",
          price: 34.9
        },
        {
          id: 2,
          title: "IT",
          author: "Lorem Ypsum",
          cover: "https://m.media-amazon.com/images/I/51z0s3GcvwL.jpg",
          price: 34.9
        },
        {
          id: 3,
          title: "IT",
          author: "Lorem Ypsum",
          cover: "https://m.media-amazon.com/images/I/51z0s3GcvwL.jpg",
          price: 34.9
        },
        {
          id: 4,
          title: "IT",
          author: "Lorem Ypsum",
          cover: "https://m.media-amazon.com/images/I/51z0s3GcvwL.jpg",
          price: 34.9
        },
        {
          id: 5,
          title: "IT",
          author: "Lorem Ypsum",
          cover: "https://m.media-amazon.com/images/I/51z0s3GcvwL.jpg",
          price: 34.9
        },
      ],
    };
  },
};
</script>
<style></style>
