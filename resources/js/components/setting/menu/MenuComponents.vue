<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">Menu</span></h2>
        </div>
        <div class="menu-list" :is="contentComponent" @getInformationSelectMenu="getInformationSelectMenu"></div>
    </div>

</template>

<script>

    let components = {
        'MenuList': () => import('./MenuListComponent'),
        'MenuAdd': () => import('./MenuAddComponent'),
        'MenuEdit': () => import('./MenuEditComponent')
    };

    let components_name_list = Object.keys(components);
    export default {
        name: 'Menu',
        component: components,
        data() {
            return {
                componentsArray: components_name_list,
                contentComponent: components.MenuList,
                menuInformation : [],
                title:'work'
            };
        },
        methods: {
            goBreadcrumb(event){
                this.$emit('goBreadcrumb', {href:event.currentTarget.getAttribute('href')});
            },
            getInformationSelectMenu(menu_id) {
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
                this.axios.post(window.base + '/api/get-menu-information', {id: menu_id})
                    .then(response => {
                        console.log(response.data);
                        this.menuInformation = response.data;
                        this.contentComponent = components.MenuEdit;

                    }).catch(function (error) {
                    currentObj.output = error;
                });
            },
        }
    };
</script>

<style scoped>

</style>
