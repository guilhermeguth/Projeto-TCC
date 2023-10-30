<template>
    <div class="login-container">
        <div class="login-box">
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="username">Usuário:</label>
                    <input type="text" id="username" v-model="username" placeholder="Digite seu nome de usuário" required />
                </div>
                <div class="form-group">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" v-model="password" placeholder="Digite sua senha" required />
                </div>
                <button type="submit">Entrar</button>
            </form>
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
    /* Define a cor de fundo */
}

.login-box {
    width: 300px;
    padding: 20px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
}

.login-box h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
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
}</style>