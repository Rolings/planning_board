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
                breadcrumb_list :[],
                items: [{text: 'Dashboard', to: '/admin/dashboard'}],
                sidebar: null,
                breadcrumb: null,
                content: null,
                full_menu: null,
                current_path: null,
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
            $route(to, from) {
                let components = this.$router.options.routes;

                console.log(this.$router.currentRoute)


                for(let n in this.$router.options.routes){
                    if(components[n].path===this.$route.path){
                        this.content = components[n].component;
                        this.full_menu = this.$store.getters.menu;
                        this.current_path = this.$router.currentRoute.fullPath;
                    }

                }
            }
        },
        methods: {


            menuFound(menu, path,parent=null) {
                for (let i in menu) {
                    if (menu[i].href === path) {
                        if(parent!==null){
                            this.items.push(parent);
                        }
                        this.items.push({text: menu[i].title, to: menu[i].href});
                    } else
                        if (typeof (menu[i].child) !== "undefined") {
                        this.menuFound(menu[i].child, path,{text: menu[i].title, to: menu[i].href})
                    }

                }
            },
            modifyBreadcrumb(){
                this.items= [];
                this.menuFound(this.full_menu,this.current_path,null);
                this.items.unshift({text: 'Dashboard', to: '/admin/dashboard'});

            }
        }
    };
</script>

<style scoped>

</style>
