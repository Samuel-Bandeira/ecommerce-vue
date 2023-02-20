<template>
  <div v-if="book" class="product-page-container">
    <BookMain :book="book" />
    <BookInfo :book="book" />
    <ClientActions :book="book" />
  </div>
</template>
<script>
import { getBook } from "../../api/bookApi";
import BookMain from "./BookMain.vue";
import BookInfo from "./BookInfo.vue";
import ClientActions from "./ClientActions.vue";

export default {
  name: "product-page",
  components: {
    BookMain,
    BookInfo,
    ClientActions,
  },
  async created() {
    this.book = await getBook({ id: this.$route.params.id });
  },
  data() {
    return {
      book: null,
    };
  },
};
</script>
<style lang="scss" src="../../scss/product-page/index.scss" />
