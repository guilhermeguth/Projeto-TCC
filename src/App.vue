<template>
  <div>
    <Login v-if="isLoginPage"/>
    <Cadastro v-if="isCadastroPage"/>
    <EsqueceuSenha v-if="isEsqueceuSenhaPage"/>
    <Navbar v-if="!isLoginPage && !isCadastroPage && !isEsqueceuSenhaPage" :alt="app_name"/>
    <Footer v-if="!isLoginPage && !isCadastroPage && !isEsqueceuSenhaPage" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/LoginForm";
import Cadastro from "./components/CadastroForm";
import EsqueceuSenha from "./components/EsqueceuSenhaForm";

export default {
  components: {
    Navbar,
    Footer,
    Login,
    Cadastro,
    EsqueceuSenha
  },

  data() {
    return {
      app_name: "Açaí Express"
    }
  },

  computed: {
    isLoginPage() {
      return this.$route.name === 'login';
    },

    isCadastroPage() {
      return this.$route.name === 'cadastro';
    },

    isEsqueceuSenhaPage() {
      return this.$route.name === 'esqueceu-senha';
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
