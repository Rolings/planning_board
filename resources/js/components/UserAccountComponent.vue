<template>
    <div>
        <component :is="sidebar"></component>
        <component :is="breadcrumb" @modify-breadcrumb="modifyBreadcrumb" :items="items"></component>
        <component class="content-block" :is="content"></component>
    </div>
</template>
<script>

    export default {
        name: 'UserAccountComponent',
        data() {
            return {
                items: [
                    {
                        text: 'Dashboard',
                        to: '/admin/dashboard'
                    },
                    {
                        text: '',
                        to: ''
                    },
                ],
                sidebar: null,
                breadcrumb: null,
                content: null,
            };
        },
        computed: {
            loaderSidebar() {
                return () => import('../components/SidebarMenuComponent')
            },
            loaderBreadcrumb() {
                return () => import('../components/BreadcrumbComponent')
            },
            loaderContent() {
                return () => import('../components/dashboard/DashboardComponent')
            },
        },
        mounted() {
            this.loaderSidebar()
                .then(() => { this.sidebar = () => this.loaderSidebar() })
                .catch(() => { this.sidebar = () => import('../components/SidebarMenuComponent') });
            this.loaderBreadcrumb()
                .then(() => { this.breadcrumb = () => this.loaderBreadcrumb() })
                .catch(() => { this.breadcrumb = () => import('../components/BreadcrumbComponent') });
            this.loaderContent()
                .then(() => { this.content = () => this.loaderContent() })
                .catch(() => { this.content = () => import('../components/dashboard/DashboardComponent') });
            this.$store.dispatch('getAuth',{current: this.$router.currentRoute.path});
        },
        watch: {
            '$route' (to, from) {
                this.content = this.$router.currentRoute.matched[0].components.default;
            }
        },
        methods: {
            modifyBreadcrumb(){
                this.items.push({text:this.$router.currentRoute.name,to:this.$router.currentRoute.path});
            }
        }
    };
</script>

<style scoped>

</style>
