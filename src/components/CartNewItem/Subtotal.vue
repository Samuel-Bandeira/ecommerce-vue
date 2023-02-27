<template>
  <div class="subtotal-container">
    <div class="subtotal-value-cart">
      <p>Subtotal do carrinho:</p>
      <h2>R$ {{ totalCartValue }}</h2>
    </div>
    <div class="subtotal-actions">
      <Button :label="`Fechar pedido(${totalCartProductCount} items)`" />
      <Button label="Ir para o carrinho" @click="redirectToCart()" />
    </div>
  </div>
</template>
<script>
import Button from "primevue/button";

export default {
  name: "sub-total",
  computed: {
    totalCartValue() {
      return this.$store.getters["cartStore/totalCartPrice"];
    },
    totalCartProductCount() {
      return this.$store.getters["cartStore/itemsQuantity"];
    },
  },
  components: {
    Button,
  },
  methods: {
    redirectToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style lang="scss" src="../../scss/cart-new-item/subtotal.scss" />
