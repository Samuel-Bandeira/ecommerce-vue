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

    <Card style="width: 25rem; margin-bottom: 2em">
      <template #content>
        <div class="complete-purchase-card">
          <Button label="Finalizar Pedido" />
          <h2>Resumo do pedido</h2>
          <div class="total-price">
            <p>Total do pedido</p>
            <p>R$ {{ totalCart }}</p>
          </div>
        </div>
      </template>
    </Card>
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
import Button from "primevue/button";
import Card from "primevue/card";
export default {
  name: "cart-page",
  components: {
    Dropdown,
    Button,
    Card,
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
    totalCart() {
      return this.$store.getters.totalCartPrice;
    },
  },
  methods: {
    getCoverSrcFromBook,
    getAuthorsFromBook,
    formatFullName,
  },
};
</script>
<style lang="scss" src="../scss/cart/index.scss" />
