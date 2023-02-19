<template>
  <div v-if="book" class="product-page-container">
    <LeftContent :book="book" />
    <CenterContent :book="book" />
    <RightContent :book="book" />
  </div>
</template>
<script>
import { getBook } from "../../api/book/bookApi";
import LeftContent from "./LeftContent.vue";
import CenterContent from "./CenterContent.vue";
import RightContent from "./RightContent.vue";

export default {
  name: "product-page",
  components: {
    LeftContent,
    CenterContent,
    RightContent,
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
<style lang="scss" src="../../scss/product-page/index.scss"></style>
