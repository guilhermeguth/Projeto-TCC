<template>
    <div class="login-container">
        <div class="login-box">
            <h1 class="login-title">Bem-vindo ao Açaí Express</h1>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="username">Usuário:</label>
                    <input type="text" id="username" v-model="username" placeholder="Digite seu nome de usuário" required />
                </div>
                <div class="form-group">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" v-model="password" placeholder="Digite sua senha" required />
                </div>
                <button class="login-button" type="submit">Entrar</button>
            </form>
            <p class="signup-link">Não tem uma conta? <a href="/cadastro">Cadastre-se aqui</a></p>
            <p class="forgot-password-link"><a href="/esqueceu-senha">Esqueceu a senha?</a></p>
        </div>
    </div>
    <div>
        <Message :msg="msg" :tipoMsg="tipoMsg" class="message-component" />
    </div>
</template>
  
<script>
import Message from './Message.vue';

export default {
    data() {
        return {
            username: '',
            password: '',
            msg: '',
            tipoMsg: ''
        };
    },

    methods: {
        login() {
            if (this.username === 'teste' && this.password === 'teste') {
                this.$router.push('/home');
            } else {
                this.msg = `Credenciais Incorretas`,
                this.tipoMsg = 'warning';
                this.limparDados();

                setTimeout(() => {
                    this.limparMensagem();
                }, 3000);
            }
        },

        limparDados() {
            this.username = "";
            this.password = "";
        },

        limparMensagem() {
            this.msg = "";
            this.tipoMsg = "";
        }
    },

    components: {
        Message
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
    width: 300px;
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

input {
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

.forgot-password-link {
    margin-top: 10px;
}

.forgot-password-link a {
    color: #46295a;
    text-decoration: none;
    font-weight: bold;
}

.forgot-password-link a:hover {
    text-decoration: underline;
}

.message-component {
    position: fixed;
    bottom: 10px;
    /* Ajuste a distância do fundo */
    right: 10px;
    /* Ajuste a distância da direita */
    color: #ffff00;
    font-weight: bold;
    padding: 10px;
    font-size: 16px;
    margin: 0;
    /* Remova a margem */
    z-index: 999;
}
</style>