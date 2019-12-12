//import Notify from "./notify";
//Notify.notice('no rice');
//Notify.alert('esketit')
//alert('allo');
//require('./main.ts');
//require('./main.coffee');
require('./main.scss');
const axios = require('axios').default;
import Vue from 'vue';
import Button from "./Button.vue";
import Modal from "./Modal.vue";
import Tabs from "./Tabs.vue";
import Carousel from "./Carousel.vue";
import Search from "./Search.vue";

import Chat from "./Chat.vue";
import Textfield from "./Textfield.vue";
import Message from "./Message.vue";
import MessageList from "./MessageList.vue";
import Username from "./Username.vue";
import Userlist from "./Userlist.vue";


Vue.component('my-button', Button);
Vue.component('modal', Modal);
Vue.component('tabs', Tabs);
Vue.component('carousel', Carousel);
Vue.component('search', Search);

Vue.component('chat', Chat);
Vue.component('message', Message);
Vue.component('message-list', MessageList);
Vue.component('textfield', Textfield);
Vue.component('username', Username);
Vue.component('userlist', Userlist);

let app = new Vue({
    el: '#app',
    data: {

    }
});