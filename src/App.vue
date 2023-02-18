<template>
  <Navbar />
  <router-view />
  <div class="app-container"></div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style src="./scss/app.scss" lang="scss"></style>
