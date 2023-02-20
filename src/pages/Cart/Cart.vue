<template>
  <div class="cart-container">
    <Card>
      <template #content>
        <div class="cart-product" v-for="item in items" :key="item.id">
          <img
            :src="getCoverSrcFromBook(item)"
            alt="book-cover"
            class="cart-item-image"
          />
          <div>
            <p>{{ item.attributes.title }}</p>
            <p>R$ {{ item.attributes.price }}</p>
            <p v-for="author in getAuthorsFromBook(item)" :key="author.id">
              Por {{ formatFullName(author) }}
            </p>
            <Dropdown
              v-model="selectedQuantity"
              :options="quantities"
              optionLabel="name"
              placeholder="1"
            />
          </div>
        </div>
      </template>
    </Card>
    <OrderSummary />
  </div>
</template>
<script>
import {
  getCoverSrcFromBook,
  getQuantityPossibilities,
  getAuthorsFromBook,
  formatFullName,
} from "@/utils";
import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
import OrderSummary from "./OrderSummary.vue";
export default {
  name: "cart-page",
  components: {
    Dropdown,
    Card,
    OrderSummary,
  },
  data() {
    return {
      selectedQuantity: null,
      quantities: [],
    };
  },
  created() {
    this.quantities = getQuantityPossibilities();
  },
  computed: {
    items() {
      console.log("items", this.$store.state.cartItems);
      return this.$store.state.cartItems;
    },
  },
  methods: {
    getCoverSrcFromBook,
    getAuthorsFromBook,
    formatFullName,
  },
};
</script>
<style lang="scss" src="../../scss/cart/index.scss" scoped />
