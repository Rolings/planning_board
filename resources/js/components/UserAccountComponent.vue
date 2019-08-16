<template>
    <div>
        <div class="sidebar-block">
            <sidebar></sidebar>
        </div>
        <div class="content-block">
            <contentBlock></contentBlock>
        </div>
    </div>
</template>
<script>
    import SidebarMenu from '../components/SidebarMenuComponent';
    import Dashboard from '../components/dashboard/DashboardComponent';
    import Menu from '../components/menu/MenuComponents';

    export default {
        name: 'UserAccountComponent',
        components: {
            sidebar: SidebarMenu,
            contentBlock : Dashboard
        },
        data() {
            return {
                menu: [
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-list'
                    }
                ]
            };
        },

        mounted() {
            this.checkAuth();
        },
        methods: {
            checkAuth() {
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
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
            },
            renderContent() {

            }
        }
    };
</script>

<style scoped>

</style>
