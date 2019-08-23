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
            };
        },
        mounted() {
            this.$store.dispatch('getMenu');
        },
       computed: {
           menu () {
                return this.$store.getters.menu;
            },
        },
        methods: {
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
