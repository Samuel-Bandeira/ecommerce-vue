<template>
  <Card>
    <template #content>
      <div>
        <Button label="Finalizar Pedido" />
        <h2>Resumo do pedido</h2>
        <div class="total-price">
          <p>Total do pedido</p>
          <p>R$ {{ totalCart }}</p>
        </div>
      </div>
    </template>
  </Card>
</template>
<script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "order-sumarry",
  components: {
    Card,
    Button,
  },
  computed: {
    totalCart() {
      return this.$store.getters.totalCartPrice;
    },
  },
};
</script>
<style lang="scss" src="../../scss/cart/order-summary.scss" scoped />
