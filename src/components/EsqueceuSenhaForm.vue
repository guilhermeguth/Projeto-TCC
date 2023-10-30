<template>
    <div class="login-container">
      <div class="login-box">
        <h1 class="login-title">Esqueceu Sua Senha</h1>
        <form @submit.prevent="enviarEmail">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" placeholder="Digite seu email" required />
          </div>
          <button class="login-button" type="submit">Enviar Email de Redefinição</button>
        </form>
        <p class="signup-link">Lembrou a senha? <a href="/login">Faça o login aqui</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      enviarEmail() {
        // Implemente a lógica de envio do email de redefinição de senha aqui
        // O endereço de email inserido pelo usuário está disponível em 'this.email'
        // Envie o email com as instruções apropriadas para redefinir a senha
        alert('Instruções de redefinição de senha enviadas para o seu email.');
        // Redirecione o usuário para a página de login ou outra página apropriada
        this.$router.push('/login'); // Substitua '/login' pela rota apropriada
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #46295a;
    margin: 0;
  }
  
  .login-box {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .login-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #46295a;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    color: #46295a;
  }
  
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login-button {
    background-color: #46295a;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #32204a;
  }
  
  .signup-link {
    margin-top: 20px;
  }
  
  .signup-link a {
    color: #46295a;
    text-decoration: none;
    font-weight: bold;
  }
  
  .signup-link a:hover {
    text-decoration: underline;
  }
  </style>