<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">Menu</span></h2>
        </div>
        <div class="menu-breadcrumbs">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
        </div>
        <div class="menu-control">
            <button class="mdl-button mdl-js-button mdl-button--fab">
                <i class="material-icons">add</i>
            </button>
            <button class="mdl-button mdl-js-button mdl-button--fab">
                <i class="material-icons">delete_sweep</i>
            </button>
            <button class="mdl-button mdl-js-button mdl-button--fab">
                <i class="material-icons">filter_list</i>
            </button>
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
