<template>
    <div class="section input-bar">
        <input class="input" @keyup.enter="$emit('join', username, true)" type="text" v-model="username">
        <button class="button" @click="$emit('join', username, true)">Join</button>
    </div>
</template>

<script>
    export default {
        name: "Username",
        data(){
            return{
                username: ''
            }
        }
    }
</script>

<style scoped>
    .input-bar{
        padding-bottom:0px;
        display:flex;
    }
</style>