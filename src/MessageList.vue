<template>
    <div class="section chatHolder">
        <message v-for="message in messages" :message="message"></message>
    </div>
</template>

<script>
    export default {
        name: "MessageList",
        props: ['messages']
    }
</script>

<style scoped>
    .chatHolder{
        overflow:auto;
        height: 85%;
    }
    @media only screen and (max-width: 755px) {
        .chatHolder{
            height:70vh;
        }
    }
</style>