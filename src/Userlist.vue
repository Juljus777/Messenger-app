<template>
    <div class="userbox">
        <div class="list is-hoverable userWrapper">
            <p class="list-item has-background-primary">Users online: </p>
            <p class="list-item username" v-for="user in users">
                {{user}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Userlist",
        props: ['users']
    }
</script>

<style scoped>
    .userbox{
        height:100%;
        overflow:auto;
    }
    .userWrapper{
        height:100%;
    }
    .list{
        text-align: center;
        border:none ;
        border-radius:0;
        box-shadow:none;
    }
    .list-item {
        text-align: center;
        border:none ;
        border-radius:0 ;
        color:black;
    }
    .username{
        visibility:visible;
        color:black;
        height:auto;
    }
    @media only screen and (max-width: 765px) {
        .list-item {
            text-align: center ;
            border:none ;
            border-radius:0;
            color:White;
        }
        .userbox{
            height:40px;
            overflow:hidden;
            transition: all .5s ease;
        }
        .userbox:hover{
            height:175px;
            overflow:auto;
        }
        .username{
            visibility: hidden;
            transition: all .5s ease;
        }
        .userWrapper:hover .username{
            height:40px;
            visibility: visible;
            color:black;
        }
    }

</style>