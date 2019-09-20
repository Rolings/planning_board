<template>
    <div>
        <div :is="sidebar"></div>
        <div :is="breadcrumb" @modify-breadcrumb="modifyBreadcrumb" :items="items"></div>
        <div class="content-block" :is="content"></div>
    </div>
</template>
<script>
import sidebar im
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
                sidebar: () => import('../components/SidebarMenuComponent'),
                breadcrumb: () => import('../components/BreadcrumbComponent'),
                content: () => import('../components/dashboard/DashboardComponent'),
            };
        },
        mounted() {
            this.$store.dispatch('getAuth',{current: this.$router.currentRoute.path});
        },
        watch: {
            '$route' (to, from) {
                this.content = this.$router.currentRoute.matched[0].components.default;
            }
        },
        methods: {
            modifyBreadcrumb(){
                console.log( this.items[1]);
                this.items[1] = {text:this.$router.currentRoute.name,to:this.$router.currentRoute.path};
                this.items.push({text:this.$router.currentRoute.name,to:this.$router.currentRoute.path});
            }
        }
    };
</script>

<style scoped>

</style>
