<template>
  <div>
    <Navbar v-if="!isLoginPage" :alt="app_name"/>
    <Footer v-if="!isLoginPage" />
    <Login v-if="isLoginPage"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/LoginForm";

export default {
  components: {
    Navbar,
    Footer,
    Login
  },

  data() {
    return {
      app_name: "Açaí Express"
    }
  },

  computed: {
    isLoginPage() {
      return this.$route.name === 'login';
    }
  }
}
</script>

<style>
 * {
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 }

 .main-container {
  margin: 50px;
  min-height: 250px;
 }

 h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
 }
</style>
