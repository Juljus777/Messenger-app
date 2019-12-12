<template>
    <div class="modal" :class="{'is-active': open}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="card">
                <div class="card-content">
                    <slot/>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" @click="close"></button>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: ['open'],
        methods: {
            close(){
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

</style>