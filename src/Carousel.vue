<template>
    <div class="section">
        <div class="frame">
            <figure
                    :class="{'animated': animate}"
                    v-for="(img, index) in displayedImages"
                    class="image is-128x128"
                    :style="{'margin-left': (index==0) ? offset + 'px': 0 }"
            >
                <img :src="img">
            </figure>
        </div>
        <br>
        <button class="button is-primary" @click="left">Left</button>
        <button class="button is-primary" @click="right">Right</button>
        {{pos}}
    </div>
</template>
<script>
    export default {
        name: "Carousel",
        props: ['images'],
        data(){
            return {
                offset: -128,
                pos: 0,
                animate: true
            }
        },
        methods: {
            left(){
                this.offset -= 128;
                this.animate=true;
                setTimeout(()=> {
                    this.pos++;
                    if(this.pos==12){
                        this.pos=2;
                    }
                    this.animate=false;
                    this.offset += 128;
                },500);
            },
            right(){
                this.offset += 128;
                this.animate=true;
                setTimeout(()=> {
                    this.pos--;
                    if (this.pos == -10) {
                        this.pos = 0;
                    }
                    this.animate=false;
                    this.offset -= 128;
                },500);
            }
        },
        computed: {
            displayedImages(){
                let displayImages=[];
                let start = this.pos - 1;
                let end = this.pos+5;
                if(start<0){
                    let imgs = this.images.filter((img, index) => index>= this.images.length + start);
                    displayImages.push(...imgs);
                }
                let imgs = this.images.filter((img, index) => index>= start && index <= end);
                displayImages.push(...imgs);
                if(end >= this.images.length){
                    let imgs = this.images.filter((img, index) => index <= end - this.images.length);
                    displayImages.push(...imgs);
                }
                return displayImages;
            }
        }
    }
</script>


<style scoped>
    .frame{
        display:inline-flex;
    }
    .section{
        overflow:hidden;
        padding-left:0;
        width:640px;
        margin:auto;
    }
    .image:animated{
        transition: all .5s ease;
    }
    .animated{
        transition: all .5s ease;
    }
</style>