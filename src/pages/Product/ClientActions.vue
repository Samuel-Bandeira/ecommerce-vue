<template>
  <div class="product-payment-action">
    <div class="price-info">
      <p>Comprar</p>
      <h2>R$ {{ book.attributes.price }}</h2>
    </div>
    <div>
      <h2>Em estoque</h2>
    </div>
    <div class="product-quantity">
      <p>Quantidade:</p>
      <Dropdown
        v-model="selectedQuantity"
        :options="quantities"
        optionLabel="name"
        placeholder="1"
      />
    </div>
    <div class="actions">
      <Button
        label="Adicionar ao carrinho"
        class="p-button-warning"
        @click="addToCart()"
      />
      <Button label="Comprar agora" class="p-button-warning" />
    </div>
  </div>
</template>
<script>
import { getQuantityPossibilities } from "@/utils";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
export default {
  name: "right-content",
  props: ["book"],
  components: {
    Dropdown,
    Button,
  },
  created() {
    this.quantities = getQuantityPossibilities();
  },
  methods: {
    addToCart() {
      this.$store.commit("cartStore/increment", {
        book: this.book,
        quantity: Number(this.selectedQuantity.value),
      });
      this.$router.push({
        path: `/cart/added`,
        query: {
          newItem: this.book.id,
        },
      });
    },
  },
  data() {
    return {
      selectedQuantity: {
        name: "1",
        value: "1",
      },
      quantities: [],
    };
  },
};
</script>
<style lang="scss" src="../../scss/product-page/client-actions.scss" />
