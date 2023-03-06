<template>
  <div class="cart-container">
    <Card>
      <template #content>
        <div class="cart-product" v-for="item in cartItems" :key="item.id">
          <img :src="item.cover" alt="book-cover" class="cart-item-image" />
          <div>
            <p>{{ item.title }}</p>
            <p>R$ {{ item.price }}</p>
            <p v-for="author in item.authors" :key="author.id">
              Por {{ author.name }}
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
  formatFullName
} from "@/utils";
import Card from "primevue/card";
import OrderSummary from "../components/Cart/OrderSummary.vue";
export default {
  name: "cart-page",
  components: {
    Card,
    OrderSummary
  },
  created() {
    this.quantities = getQuantityPossibilities();
  },
  data() {
    return {
      selectedQuantity: "",
      quantities: []
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cartStore.cart;
    }
  },
  methods: {
    getCoverSrcFromBook,
    getAuthorsFromBook,
    formatFullName,
    changeProductQuantity(event, idToUpdate) {
      const newQuantity = Number(event.target.value);
      this.$store.commit("cartStore/changeQuantity", {
        idToUpdate,
        newQuantity
      });
    }
  }
};
</script>
<style lang="scss" src="../scss/cart/index.scss" scoped />
