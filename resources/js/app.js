require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
import routes from './routes';
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.component('index-component', require('./components/IndexComponent.vue').default);
Vue.component('user-account-component', require('./components/UserAccountComponent.vue').default);

const url =  window.baseUrl;
const router = new VueRouter({
    routes,
    base: url,
    mode: 'history'
});

const app = new Vue({el: '#app', router,});
