<template>
<sidebar-menu @toggle-collapse="onToggleCollapse" @item-click="onItemClick" :menu="menu"/>
</template>
<script>
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    export default {
        name: 'SidebarMenuComponent',
        components: {
            FontAwesomeIcon
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
            this.getMenu();
        },
        methods: {
            getMenu() {
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
                this.axios.post(window.base + '/api/get-menu')
                    .then(response => {
                        this.menu = response.data;
                    }).catch(function (error) {
                    currentObj.output = error;
                });
            },
            onToggleCollapse(collapsed) {
                this.$emit('onToggleCollapse', {collapsed:collapsed});
            },
            onItemClick(event, item) {
                this.$emit('onItemClick', {event:event,item:item})
            }
        }

    };
</script>

<style scoped>

</style>
