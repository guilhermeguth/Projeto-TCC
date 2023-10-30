<template>
    <nav id="nav">
        <router-link to="/home" id="logo-url">
            <img :src="require('@/assets/logo.png')" id="logo">
        </router-link>
        <router-link to="/home">Home</router-link>
        <router-link to="/lista-pedidos">Pedidos</router-link>
        <router-link to="/novo-pedido">Novo Pedido</router-link>
    </nav>
    <router-view/>
</template>

<script>
export default {
    name: "Navbar",
    props: ["alt"]
}
</script>

<style scoped>
    #nav {
        background-color: #46295a;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo {
        width: 60px;
        height: 40px;
    }

    #nav a {
        color: #ffff00;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover {
        color: #FFF;
    }
</style>