<template>
    <div>
        <div class="sidebar-block">
            <SidebarMenu @goBreadcrumb="goBreadcrumb"></SidebarMenu>
        </div>
        <div class="content-block" @goBreadcrumb="goBreadcrumb" :is="currentComponent"  ></div>
    </div>
</template>
<script>
    // Load components
    let components = {
        'SidebarMenu': () => import('../components/SidebarMenuComponent'),
        'dashboard': () => import('../components/dashboard/DashboardComponent'),
        'setting': () => import('./setting/SettingComponent'),
        'menus': () => import('./setting/menu/MenuComponents'),
        'page': () => import('../components/page/PageComponent'),
        'user': () => import('../components/user/UserComponent'),
        'system': () => import('../components/setting/SystemComponent'),
        'permissions': () => import('./setting/PermissionComponent')
    };

    // Create array keys from components object
    let components_name_list = Object.keys(components);

    let currentUrl = document.URL.replace('https:', '').replace('http:', '').replace(window.base, '').split('/');
    currentUrl = currentUrl[currentUrl.length - 1];
    if (!components_name_list.includes(currentUrl))
        currentUrl = 'dashboard';
    export default {
        name: 'UserAccountComponent',
        components: components,
        data() {
            return {
                componentsArray: components_name_list,
                currentComponent: currentUrl
            };
        },
        mounted() {
            this.$store.dispatch('getAuth',{current: this.$router.currentRoute});
        },
        methods: {
            goBreadcrumb(data) {
                let url = data.href.replace('https:', '').replace('http:', '').replace(window.base, '').split('/');
                let select_menu = url[url.length - 1].trim();
                if (this.componentsArray.includes(select_menu)) {
                    this.currentComponent = select_menu;
                }
                if (select_menu === 'logout')
                    this.$store.dispatch('logout');
            }
        }
    };
</script>

<style scoped>

</style>
