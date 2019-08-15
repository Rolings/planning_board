<template>
    <sidebar-menu :menu="menu" />
</template>
<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    export default {
        name: "SidebarMenuComponent",
        data() {
            return {
                menu: [
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-list'
                    }
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
                this.axios.post(window.base + '/api/get-menu')
                    .then(response => {
                            this.menu = response.data;
                    }).catch(function (error) {
                    currentObj.output = error;
                });
            },
            checkAuth(){
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = "bearer " + localStorage.getItem('access_token');
                this.axios.get(window.base + '/api/auth/check-auth')
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
