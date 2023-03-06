<template>
  <div class="orders-container">
    <h1>Orders</h1>
    <div v-for="order in orders" :key="order.id" class="order-container">
      <div class="header">
        <div class="header-left">
          <div>
            <p>PEDIDO REALIZADO EM:</p>
            <p>{{ order.created_date }}</p>
          </div>
          <div>
            <p>TOTAL</p>
            <p>{{ order.price }}</p>
          </div>
          <div>
            <p>ENVIAR PARA</p>
            <p>Samuel Bandeira de Oliveira</p>
          </div>
        </div>
        <div class="header-right">
          <p>PEDIDO N° {{ order.number }}</p>
          <div>
            <p>Exibir detalhes do pedido</p>
            <p>Exibir recibo</p>
          </div>
        </div>
      </div>
      <div class="order-items-container">
        <h2>{{ `${order.status} at ${order.delivered_date}` }}</h2>
        <div v-for="item in order.items" :key="item.id" class="order-item">
          <div class="book-cover">
            <img :src="item.book.cover" alt="book-cover" />
          </div>
          <div>
            <p>{{ item.book.title }}</p>
            <p v-for="author in item.book.authors" :key="author.id">
              {{ author.name }}
            </p>
            <p>Quantity: {{ item.quantity }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getOrdersByUserId } from "../data/website/orders";
export default {
  name: "orders-page",
  created() {
    this.orders = getOrdersByUserId();
    console.log("orders", this.orders);
  },
  data() {
    return {
      orders: null
    };
  },
  methods: {
    getOrdersByUserId
  }
};
</script>
<style lang="scss" src="../scss/order.scss" scoped></style>
