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
            <select
              name="quantity"
              :key="index"
              :value="item.quantity"
              @change="changeProductQuantity($event, item.id)"
            >
              <option
                v-for="(quantity, index) in quantities"
                :key="index"
                :value="quantity.value"
              >
                {{ quantity.name }}
              </option>
            </select>
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
import Card from "primevue/card";
import OrderSummary from "../components/Cart/OrderSummary.vue";
export default {
  name: "cart-page",
  components: {
    Card,
    OrderSummary,
  },
  data() {
    return {
      selectedQuantity: "",
      quantities: [],
    };
  },
  created() {
    this.quantities = getQuantityPossibilities();
  },
  computed: {
    items() {
      console.log("items", this.$store.state.cartItems);
      return this.$store.state.cartStore.cartItems;
    },
  },
  methods: {
    getCoverSrcFromBook,
    getAuthorsFromBook,
    formatFullName,
    changeProductQuantity(event, idToUpdate) {
      const newQuantity = Number(event.target.value);
      this.$store.commit("cartStore/changeQuantity", {
        idToUpdate,
        newQuantity,
      });
    },
  },
};
</script>
<style lang="scss" src="../scss/cart/index.scss" scoped />
