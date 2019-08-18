<template>
    <div>
        <div class="sidebar-block">
            <SidebarMenu @onItemClick="getItemMenu"></SidebarMenu>
        </div>
        <div class="content-block" :is="currentComponent"></div>
    </div>
</template>
<script>
    // Load components
    let components = {
        'SidebarMenu': () => import('../components/SidebarMenuComponent'),
        'dashboard': () => import('../components/dashboard/DashboardComponent'),
        'setting': () => import('./setting/SettingComponent'),
        'menus': () => import('../components/setting/MenuComponents'),
        'page': () => import('../components/page/PageComponent'),
        'user': () => import('../components/user/UserComponent'),
        'system': () => import('../components/setting/SystemComponent'),
        'permissions': () => import('../components/setting/PermissionsComponent'),
    };

    // Create array keys from components object
    let components_name_list = Object.keys(components);

    let currentUrl = document.URL.replace('https:', "").replace('http:', "").replace(window.base, "").split('/');
    currentUrl = currentUrl[currentUrl.length - 1];
    if (!components_name_list.includes(currentUrl))
        currentUrl = 'Dashboard';
    export default {
        name: 'UserAccountComponent',
        components: components,
        data() {
            return {
                componentsArray: components_name_list,
                currentComponent: currentUrl,
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
            getItemMenu(data) {
                let url = data.event.target.baseURI.replace('https:', "").replace('http:', "").replace(window.base, "").split('/');
                let select_menu = url[url.length - 1];
                if (this.componentsArray.includes(select_menu)) {
                    this.currentComponent = select_menu;
                }
            }
        }
    };
</script>

<style scoped>

</style>
