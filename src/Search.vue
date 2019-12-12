<template>
    <div>
        <div class="section search-bar">
            <input class="input" v-model="searchText" type="text" @input="filter">
            <button class="button" @click="$emit('submit')">Search</button>
        </div>
        <div class="section suggestions" v-if="results.length!=0">
            <ul>
                <li @click="searchText=option" v-for="option in results">{{option}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        props: ['options'],
        data(){
          return {
              searchText: '',
          }
        },
        mtehods: {
            filter(){

            }
        },
        computed: {
            results(){
                return this.options.filter((option)=> {
                    if(this.searchText.length != 0){
                        let sub = option.substr(0, this.searchText.length);
                        return sub.toLocaleLowerCase() == this.searchText.toLocaleLowerCase();
                    }
                    return false;

                });
            }
        }
    }
</script>

<style scoped>
    input {
        width: 200px;
    }
    .suggestions{
        padding-top:0px;
    }
    .search-bar{
        padding-bottom:0px;
    }
    .suggestions ul{
        border-radius:4px;
        border:1px solid #dbdbdb;
        width:200px;
        border-top:none;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;

    }

</style>