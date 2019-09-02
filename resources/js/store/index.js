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
        auth: false,
        userList: [],
        userSingle: []
    },
    getters: {
        menu: state => state.menu,
        full_menu: state => state.full_menu,
        auth: state => state.auth,
        login: state => state.login,
        userList: state => state.userList,
        userSingle: state => state.userSingle,
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
        setlogin(state, value) {
            state.login = value
        },
        setUserList(state, value) {
            state.userList = value
        },
        setUserSingle(state, value) {
            state.userSingle = value
        },
    },
    actions: {
        getAuth(context, {current}) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/auth/check')
                .then((resp) => {
                    if (current.parh === '/') {
                        location.href = '/admin/dashboard';
                    }
                }).catch((error) => {
                if (error.response.status === 401)
                    location.href = '/';
                if (current.parh.indexOf('/admin') + 1) {
                    location.href = '/';
                }
            });
        },
        login(context, {email, password}) {
            axios.post(window.base + '/api/auth/login', {email, password})
                .then((resp) => {
                    document.cookie = "Authorization=" + resp.data.access_token + ";expires=" + resp.data.expires_in;
                    localStorage.setItem('access_token', resp.data.access_token);
                    location.href = '/admin/dashboard';
                }).catch(error => {
                if (error.response.status === 401)
                    location.href = '/';
            });
        },
        logout(context) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/auth/logout')
                .then((resp) => {
                    localStorage.removeItem('access_token');
                    location.href = '/';
                }).catch((error) => {
                location.href = '/';
            }).catch(error => {
                if (error.response.status === 401)
                    location.href = '/';
            });

        },
        getMenu(context) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/get-menu')
                .then((resp) => {
                    context.commit('setMenu', resp.data)
                }).catch(error => {
                if (error.response.status === 401)
                    location.href = '/';
            });
        },
        getFullMenu(context) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/get-full-menu')
                .then((resp) => {
                    context.commit('setFullMenu', resp.data)
                }).catch(error => {
                if (error.response.status === 401)
                    location.href = '/';
            });
        },

        getUserList(context) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/user/list')
                .then((resp) => {
                    context.commit('setUserList', resp.data)
                }).catch(error => {
                if (error.response.status === 401)
                    location.href = '/';
            });
        },
        userSingle(context, {user_id}) {
            axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
            axios.post(window.base + '/api/user/single/' + user_id)
                .then((resp) => {
                    context.commit('setUserSingle', resp.data)
                }).catch(error => {
                if (error.response.status === 401)
                    location.href = '/';
            });
        },
        userAdd(context, {field}) {
        },
        userEdit(context, {id}) {
        },
        userDelete(context, {id}) {
        },

    },

});

export default store;
