<template>
  <div class="grid">
    <div class="col-2">Filters will be here</div>
    <div class="col-10">
      <div class="grid">
        <template v-for="(item, index) in items" :key="index">
          <div class="col">
            <Card>
              <template #header>
                <img
                  src="https://m.media-amazon.com/images/I/51z0s3GcvwL.jpg"
                  alt="book-cover"
                />
              </template>
              <template #title> Book title </template>
              <template #content> Lorem ipsum dolor, sit amet </template>
              <template #footer>
                <Button label="Buy" />
              </template>
            </Card>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  name: "home-page",
  components: {
    Card,
    Button
  },
  data() {
    return {
        items: new Array(5).fill(0)
    }
  }
};
</script>
<style></style>
