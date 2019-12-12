<template>
    <div>
        <div class="section input-bar">
            <input class="input" @keyup.enter="$emit('send', textfield, true)" type="text" v-model="textfield">
            <button class="button" @click="$emit('send', textfield, true)">Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Textfield",
        data(){
            return {
                textfield: '',
            }
        },
    }
</script>

<style scoped>
    .input-bar{
        padding-bottom:0px;
        display:flex;
    }
</style>