<template>
<div>
    <button @click="clicks++">click me!</button>
    {{clicks}}
</div>
</template>

<script>
    export default {
        name: "Button",
        data(){
            return {
                clicks: 0
            }
        }
    }
</script>

<style scoped>

</style>
