<template>
    <div class="message-container">
        <v-alert v-if="tipoMsg === 'sucess'"
            type="success"
            :title="msg"
        ></v-alert>
        <v-alert v-if="tipoMsg === 'warning'"
            type="warning"
            :title="msg"
        ></v-alert>
        <v-alert v-if="tipoMsg === 'error'"
            type="error"
            :title="msg"
        ></v-alert>
        <v-alert v-if="tipoMsg === 'info'"
            type="info"
            :title="msg"
        ></v-alert>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        msg: String,
        tipoMsg: String
    }
}

</script>

<style scoped>
    .message-container {
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
    }
</style>