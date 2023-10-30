<template>
    <div class="login-container">
        <div class="login-box">
            <h1 class="login-title">Cadastro</h1>
            <form @submit.prevent="cadastrar">
                <div class="form-group">
                    <label for="nomeCompleto">Nome Completo:</label>
                    <input type="text" id="nomeCompleto" v-model="nomeCompleto" placeholder="Digite seu nome completo"
                        required />
                </div>
                <div class="form-group">
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" v-model="cpf" placeholder="Digite seu CPF" required @input="formatarCpf" />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" placeholder="Digite seu email" required />
                </div>
                <div class="form-group">
                    <label for="usuario">Usuário:</label>
                    <input type="text" id="usuario" v-model="usuario" placeholder="Escolha um nome de usuário" required />
                </div>
                <div class="form-group">
                    <label for="senha">Senha:</label>
                    <input type="password" id="senha" v-model="senha" placeholder="Digite sua senha" required />
                </div>
                <div class="form-group">
                    <label for="confirmarSenha">Confirmação de Senha:</label>
                    <input type="password" id="confirmarSenha" v-model="confirmarSenha" placeholder="Confirme sua senha"
                        required />
                </div>
                <button class="login-button" type="submit">Cadastrar</button>
            </form>
            <p class="signup-link">Já tem uma conta? <a href="/login">Faça o login aqui</a></p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            nomeCompleto: '',
            cpf: '',
            email: '',
            usuario: '',
            senha: '',
            confirmarSenha: ''
        };
    },
    methods: {
        cadastrar() {
            // Implemente a lógica de cadastro aqui
            if (this.senha !== this.confirmarSenha) {
                alert('As senhas não coincidem. Tente novamente.');
                return;
            }
            // Os dados de cadastro estão disponíveis nos campos 'this.nomeCompleto', 'this.cpf', 'this.email', 'this.usuario', 'this.senha'
            // Realize ações de cadastro conforme necessário
            // Redirecione o usuário para a página após o cadastro bem-sucedido
            this.$router.push('/dashboard'); // Substitua '/dashboard' pela rota após o cadastro
        },
        formatarCpf() {
            // Remove caracteres não numéricos e adiciona a máscara do CPF
            this.cpf = this.cpf.replace(/\D/g, '');
            if (this.cpf.length <= 11) {
                this.cpf = this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
            }
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
    width: 600px;
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
</style>
  