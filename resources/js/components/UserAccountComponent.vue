<template>
    <div>
        <div class="sidebar-block">
            <SidebarMenu @onItemClick="getItemData"></SidebarMenu>
        </div>
        <div class="content-block" :is="currentComponent">
        </div>
    </div>
</template>
<script>
    import SidebarMenu from '../components/SidebarMenuComponent';
    import Dashboard from '../components/dashboard/DashboardComponent';
    import Menu from './setting/MenuComponents';
    import Setting from '../components/setting/SettingComponent';
    import Page from '../components/page/PageComponent';
    import User from '../components/user/UserComponent';
    import System from '../components/setting/SystemComponent';
    import Permissions from '../components/setting/PermissionsComponent';

    let components = {
        'SidebarMenu': SidebarMenu,
        'contentBlock': Dashboard,
        'dashboard': Dashboard,
        'setting': Setting,
        'menus': Menu,
        'page': Page,
        'user': User,
        'system': System,
        'permissions': Permissions,
    };
    let components_list = Object.keys(components);
    let currentPath = document.URL;
    let currentUrl = currentPath.replace('https:', "").replace('http:', "").replace(window.base, "").split('/');
    currentUrl = currentUrl[currentUrl.length - 1];
    if (!components_list.includes(currentUrl)) {
        currentUrl = 'Dashboard';
    }
    export default {
        name: 'UserAccountComponent',
        components: components,
        data() {
            return {
                menu: [
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-list'
                    }
                ],
                componentsArray: components_list,
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
            onToggleCollapse(collapsed) {
                console.log(collapsed)
            },
            getItemData(data) {
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
