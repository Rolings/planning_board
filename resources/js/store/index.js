import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        menu: [{
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user'
        }],
        full_menu: [],
        auth : false
    },
    getters: {
        menu: state => state.menu,
        full_menu: state => state.full_menu,
        auth: state => state.auth,
    },
    mutations: {
        setMenu(state, value) {
            state.menu = value
        },
        setFullMenu(state, value) {
            state.full_menu = value
        },
        setAuth(state, value) {
            state.auth = value
        },
    },
    actions: {
        getMenu(context) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/get-menu')
                .then((resp) => {
                    context.commit('setMenu', resp.data)
                })
        },
        getFullMenu(context) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/get-full-menu')
                .then((resp) => {
                    context.commit('setFullMenu', resp.data)
                })
        },
        getAuth(context){
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.get(window.base + '/api/auth/check-auth')
                .then((resp) => {
                    if (resp.data.error) {
                   //     location.href = '/';
                    }
                })
        }
    },

});

export default store;
