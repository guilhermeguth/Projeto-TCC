<template>
    <div class="main-container">
        <div>
            <form id="acai-form" @submit="createAcai">
                <div class="input-container">
                    <label for="nome">Nome:</label>
                    <v-text-field variant="outlined" placeholder="Digite seu nome" v-model="nome" ></v-text-field>
                </div>
                <div class="input-container">
                    <label for="copo">Copo:</label>         
                    <v-select
                    v-model="copo"
                    placeholder="Escolha o tamanho do copo"
                    :items="tamanhosCopos"
                    variant="outlined"
                    ></v-select>
                </div>
                <div class="input-container">
                    <label for="adicionalPrincipal">Acompanhamento:</label>
                    <v-select
                        v-model="adicionalPrincipal"
                        placeholder="Escolha o acompanhamento"
                        :items="adicionaisPrincipais"
                        variant="outlined"
                        :disabled="!copo"
                    ></v-select>             
                </div>
                <div class="input-container">
                    <label for="adicionais">Adicionais:</label>
                    <v-select
                        v-model="adicionais"
                        placeholder="Escolha os adicionais"
                        :items="opcionaisSabores"
                        multiple
                        variant="outlined"         
                        :disabled="!copo || !adicionalPrincipal"           
                    ></v-select>            
                </div>
                <div class="input-container">
                    <label id="valor" for="valor">Valor: R$ {{ this.valor }}</label> 
                </div>
                <div class="input-container">
                    <!-- <v-btn class="submit-btn" color="#46295a">Efetuar pedido</v-btn> -->
                    <input type="submit" class="submit-btn" value="Efetuar pedido">
                </div>
            </form>
        </div>
        <div>
            <Message :msg="msg" :tipoMsg="tipoMsg" class="message-component" />
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';

export default {
    name: "AcaiForm",
    data() {
        return {
            copos: [],
            acompanhamentoData: [],
            opcionaisData: [],
            valor: (0).toFixed(2),
            valorAdicionais: (0).toFixed(2),
            precosCopos: {
                '330 ML': 13.00,
                '440 ML': 16.00,
                '550 ML': 18.00
            },
            nome: null,
            copo: null,
            adicionalPrincipal: null,
            adicionais: [],
            status: "Novo",
            msg: '',
            tipoMsg: ''
        }
    },

    computed: {
        tamanhosCopos() {
            return this.copos.map(copo => copo.tamanho);
        },

        adicionaisPrincipais() {
            return this.acompanhamentoData.map(acompanhamento => acompanhamento.tipo)
        },

        opcionaisSabores() {
            return this.opcionaisData.map(opcionais => opcionais.tipo)
        }

    },

    methods: {
        async getCopos() {
            const req = await fetch('http://localhost:3000/acai');
            const data = await req.json();
            this.copos = data.copos;
            this.acompanhamentoData = data.adicionalPrincipal;
            this.opcionaisData = data.adicionais;
        },

        async createAcai(e) {

            e.preventDefault();

            const data = {
                nome: this.nome,
                tamanho: this.copo,
                acompanhamento: this.adicionalPrincipal,
                opcionais: Array.from(this.adicionais),
                valor: this.valor,
                status: 'Novo'
            }

            if (!data.nome) {
                this.msg =  `Necessario informar o seu nome`,
                this.tipoMsg = 'warning';
                setTimeout(() => {
                    this.limparMensagem();
                }, 3000);
                return;
            }

            if (!data.tamanho) {
                this.msg =  `Necessario escolher o tamanho do copo`,
                this.tipoMsg = 'warning';
                setTimeout(() => {
                    this.limparMensagem();
                }, 3000);
                return;
            }

            const dataJson = JSON.stringify(data);

            const req = await fetch('http://localhost:3000/pedidos', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: dataJson
            })

            const res = await req.json();

            this.msg =  `Pedido N° ${res.id} realizado com sucesso`,
            this.tipoMsg = 'sucess';

            // limpa dados
            this.limparDados();

            // limpa a msg
            setTimeout(() => {
                this.limparMensagem();
            }, 3000);
        },

        limparDados() {
            this.nome = '';
            this.copo = '';
            this.adicionalPrincipal = '';
            this.adicionais = [];
            this.valor = (0).toFixed(2);
        },

        limparMensagem() {
            this.msg = "";
            this.tipoMsg = "";
        }
    }, 

    watch: {
        adicionais: function(newAdicionais, oldAdicionais) {
            if (newAdicionais.length > 4) {
                this.adicionais = oldAdicionais;
                return;
            }

            let valorAdicionais = 0; // Inicialize com 0

            // Crie uma cópia dos adicionais selecionados anteriormente
            const adicionaisAnteriores = oldAdicionais.slice();

            // Verifique os adicionais selecionados atualmente
            newAdicionais.forEach(element => {
                if (!adicionaisAnteriores.includes(element) && element !== 'Kit Kat') {
                    // O adicional foi adicionado e não é 'Kit Kat'
                    valorAdicionais += 2.00;
                }
            });

            // Verifique os adicionais que foram removidos
            adicionaisAnteriores.forEach(element => {
                if (!newAdicionais.includes(element) && element !== 'Kit Kat') {
                    // O adicional foi removido e não é 'Kit Kat'
                    valorAdicionais -= 2.00;
                }
            });

            // Atualize o valor apenas uma vez, após o loop
            this.valorAdicionais = valorAdicionais.toFixed(2);
            this.valor = (parseFloat(this.valor) + parseFloat(this.valorAdicionais)).toFixed(2);
        },


        copo: function(newCopo, oldCopo) {
            if (newCopo) {
                const preco = this.precosCopos[newCopo];
                if (preco !== undefined) {
                    this.valor = (parseFloat(preco) + parseFloat(this.valorAdicionais)).toFixed(2);
                }
            }
        },
    },

    mounted() {
        this.getCopos();
    },

    components: {
        Message
    }
}

</script>

<style scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        /* min-height: 100vh; */
    }

    #acai-form {
        max-width: 400px;
        margin: 0 auto;
    }

    #valor {
        text-align: right;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #46295a;
    }

    input, select {
        padding: 5px 10px;
        width: 400px;
    }

    #adicionais-container {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .submit-btn {
        background-color: #46295a;
        color: #ffff00;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: 0.5s;
    }

    .submit-btn:hover {
        background-color: transparent;
        color:#46295a;
    }

    .message-component {
        position: fixed;
        bottom: 10px; /* Ajuste a distância do fundo */
        right: 10px; /* Ajuste a distância da direita */
        color: #ffff00;
        font-weight: bold;
        padding: 10px;
        font-size: 16px;
        margin: 0; /* Remova a margem */
        z-index: 999;
    }

</style>