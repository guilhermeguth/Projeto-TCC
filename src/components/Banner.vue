<template>
    <div id="main-banner">
        <h1>Açaí Express</h1>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>
#main-banner {
    background-image: url('../../public/img/acai.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: calc(100vh - 100px); /* Ajuste a subtração para corresponder à altura do seu footer */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
}

#main-banner h1 {
    color: #fff;
    font-size: 60px;
    background-color: #46295a;
    padding: 20px 40px;
    margin-right: 20px;
    color: #ffff00;
    right: 20px;
    bottom: 20px;
}
</style>