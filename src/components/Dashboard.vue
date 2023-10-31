<template>
    <div id="acai-table">
        <div>
            <div id="acai-table-heading">
                <div class="order-id">ID</div>
                <div>Cliente</div>
                <div>Tamanho</div>
                <div>Acompanhamento</div>
                <div>Adicionais</div>
                <div>Valor</div>
                <div>Status</div>
            </div>
            <div id="acai-table-rows">
                <div class="acai-table-row" v-for="pedido in pedidos" :key="pedido.id">
                    <div class="order-number">{{ pedido.id }}</div>
                    <div>{{ pedido.nome }}</div>
                    <div>{{ pedido.tamanho }}</div>
                    <div>{{ pedido.acompanhamento }}</div>
                    <div>
                        <ul>
                            <li v-for="(opcional, index) in pedido.opcionais" :key="index">
                                {{ opcional }}
                            </li>
                        </ul>
                    </div>
                    <div>R$ {{ pedido.valor }}</div>
                    <div>
                        <select name="status" id="status" @change="updatePedido($event, pedido.id)">
                            <option v-for="status in statusPedidos" :key="status.id" :value="status.tipo" :selected="pedido.status == status.tipo">
                                {{ status.tipo }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Message :msg="msg" :tipoMsg="tipoMsg" class="message-component" />
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';

export default {
    name: "Dashboard",
    data() {
        return {
            pedidos: null,
            pedidoId: null,
            statusPedidos: [],
            msg: '',
            tipoMsg: ''
        }
    },

    methods: {
        async getPedidos() {
            const req = await fetch("http://localhost:3000/pedidos");
            const data = await req.json();
            this.pedidos = data;

            this.getStatusPedidos();
        },

        async getStatusPedidos() {
            const req = await fetch("http://localhost:3000/status");
            const data = await req.json();
            this.statusPedidos = data;
        },

        async updatePedido(event, id) {
            const option = event.target.value;

            const dataJson = JSON.stringify({ status: option });

            const req = await fetch(`http://localhost:3000/pedidos/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json"},
                body: dataJson
            });

            const res = await req.json();

            this.msg =  `Pedido N° ${id} alterado para "${option}" com sucesso`,
            this.tipoMsg = 'sucess';

            // limpa a msg
            setTimeout(() => {
                this.limparMensagem();
            }, 3000);
        },

        limparMensagem() {
            this.msg = "";
            this.tipoMsg = "";
        }
    },

    mounted() {
        this.getPedidos();
        this.getStatusPedidos();
    },

    components: {
        Message
    }
}

</script>

<style scoped>
    #acai-table {
        max-width: 1200px;
        margin: 0 auto;
    }

    #acai-table-heading,
    #acai-table-rows,
    .acai-table-row {
        display: flex;
        flex-wrap: wrap;
    }

    #acai-table-heading {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
    }

    #acai-table-heading div,
    .acai-table-row div {
        width: 15%;
    }

    .acai-table-row {
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;
    }

    #acai-table-heading .order-id,
    .acai-table-row .order-number {
        width: 5%;
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

    select {
        padding: 12px 6px;
        margin-right: 12px;
    }

</style>