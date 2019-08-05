require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueRouter from 'vue-router';
import routes from './routes';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueSidebarMenu);
Vue.component('index-component', require('./components/IndexComponent.vue').default);
Vue.component('user-account-component', require('./components/UserAccountComponent.vue').default);

const url =  window.baseUrl;
const router = new VueRouter({
    routes,
    base: url,
    mode: 'history'
});

const app = new Vue({el: '#app', router,});
