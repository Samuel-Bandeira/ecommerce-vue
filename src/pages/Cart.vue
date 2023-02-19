<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <img :src="getCoverSrcFromBook(item)" alt="book-cover" />
      <p>{{ item.attributes.title }}</p>
      <p>R$ {{ item.attributes.price }}</p>
      <Dropdown
        v-model="selectedQuantity"
        :options="quantities"
        optionLabel="name"
        placeholder="1"
      />
    </div>
    <div>
      <Button label="Finalizar Pedido" />
      <h2>Resumo do pedido</h2>
      <div>
        <p>Items:</p>
        <p>R$ 43.99</p>
      </div>
      <p>Total do pedido: R$ 50.99</p>
    </div>
  </div>
</template>
<script>
import { getCoverSrcFromBook, getQuantityPossibilities } from "@/utils";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

export default {
  name: "cart-page",
  components: {
    Dropdown,
    Button,
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
  },
};
</script>
