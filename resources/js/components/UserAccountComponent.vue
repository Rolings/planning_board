<template>
    <sidebar-menu :menu="menu" />
</template>
<script>

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    export default {
        name: "UserAccountComponent",
        data() {
            return {
                menu: [
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '#',
                        title: 'Charts',
                        icon: 'fa fa-chart-area'
                    },
                ]
            }
        },
        components: {
            FontAwesomeIcon
        },
        mounted(){
            this.checkAuth();
            this.getMenu();
        },
        methods: {
            getMenu() {
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = "bearer " + localStorage.getItem('access_token');
                this.axios.post(window.baseUrl + '/api/get-menu')
                    .then(function (response) {
                        if (response) {
                            this.menu = response.data;

                        }
                    }).catch(function (error) {
                    currentObj.output = error;
                });
            },
            checkAuth(){
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = "bearer " + localStorage.getItem('access_token');
                this.axios.get(window.baseUrl + '/api/auth/check-auth')
                    .then(function (response) {
                        if (response) {
                            if (response.data.error) {
                                location.href = '/';
                            }
                        }
                    }).catch(function (error) {
                    currentObj.output = error;
                });
            }
        }

    }
</script>

<style scoped>

</style>
