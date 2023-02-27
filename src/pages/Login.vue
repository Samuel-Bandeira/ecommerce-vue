<template>
  <div class="logo-container">
    <img
      src="../assets/amazon_logo.svg.png"
      alt="amazon-logo"
      class="amazon-logo"
    />
  </div>
  <div class="page-container">
    <div class="login-container">
      <div class="email-input-container">
        <label for="email">E-mail</label>
        <InputText type="text" placeholder="E-mail" v-model="form.identifier" />
      </div>
      <div class="password-input-container">
        <p for="password">Password</p>
        <InputText
          type="password"
          v-model="form.password"
          placeholder="Password"
        />
      </div>
      <Button label="Continuar" @click="postLogin()" />
    </div>
    <div class="go-to-register-container">
      <p>Novo na amazon?</p>
      <Button label="Criar sua conta da Amazon" />
    </div>
  </div>
</template>
<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { login } from "../api/authApi";
export default {
  name: "login-page",
  components: {
    Button,
    InputText,
  },
  data() {
    return {
      form: {
        identifier: "",
        password: "",
      },
    };
  },
  methods: {
    postLogin() {
      const isLogged = login({
        credentials: this.form,
      });

      if (isLogged) {
        //mergeCart()
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="scss" src="../scss/login/index.scss" scoped />
