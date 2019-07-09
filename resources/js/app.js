require('./bootstrap');
window.Vue = require('vue');
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);
Vue.component('index-component', require('./components/IndexComponent.vue').default);
const url = '/';
const router = new VueRouter({
    routes,
    base: url,
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router,
});
