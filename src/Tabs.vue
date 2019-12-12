<template>
    <div>
        <div class="tabs">
            <ul>
                <li v-for="(el, index) in els"
                    :class="{'is-active' : active==index}"
                    @click="active=index">
                    <a>{{el.title}}</a>
                </li>
            </ul>
        </div>
        <div v-for="(el, index) in els" class="section " :class="{'closed': active!=index}">
            {{el.content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        props: ['els'],
        data(){
            return {
                active:0,
                content: [],
            }
        },
        mounted(){
            this.content = this.$slots.default.map(e => e)
        }
    }
</script>

<style scoped>
    .section{
        overflow:hidden;
        transition: all .5s ease;
    }
    .closed{
        visibility: hidden;
        height:0;
        padding:0;
    }
</style>