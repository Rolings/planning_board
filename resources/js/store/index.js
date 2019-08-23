import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        menu: [],
        full_menu : []
    },
    getters: {
        menu: state => state.menu,
        full_menu: state => state.full_menu,
    },
    actions: {
        getMenu(context) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/get-menu')
                .then((resp) => {
                    context.commit('setMenu', resp.data)

                })
        },
        getFullMenu(context){
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/get-full-menu')
                .then((resp) => {
                    context.commit('setFullMenu', resp.data)

                })
        }
    },
    mutations: {
        setMenu (state, value) {
            state.menu = value
        },
        setFullMenu (state, value) {
            state.full_menu = value
        },
    }
});

export default store;
