<template>
    <div class="msg">
        <span class="mess is-light"
              :class="{'is-pulled-right' : message.user === 0,
               'has-background-primary' : message.user === 0,
                'has-background-danger' : message.user !== 0}">
            {{message.message}}
        </span>
        <span class="time" :class="{'is-pulled-right' : message.user !== 0}">
            Sent by: {{message.username}} {{niceTime}}
        </span>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "Message",
        props: ['message'],
        created(){
            setInterval(()=>{
                this.currentTime = new Date()
            },1000)
        },
        data(){
          return {
              currentTime: new Date()
          }
        },
        computed: {
            niceTime(){
                this.currentTime;
                return moment(this.message.time).fromNow();
            }
        }
    }
</script>

<style scoped>
.msg{
    width:100%;
    margin-bottom:5px;
    height:40px;
}
.mess{
    background-color:rgb(50,255,130);
    width:auto;
    height:auto;
    padding:5px 15px;
    border-radius:15px;
}
    .diffColor{
        background-color:rgb(255,50,130);
    }
    .time{
        color:gray;
        font-size:12px;
    }
</style>