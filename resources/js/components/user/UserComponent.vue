<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">User</span></h2>
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
        <div class="user-list" :is="contentComponent"></div>
    </div>
</template>

<script>

    let components = {
        'UserList': () => import('./UserListComponent'),
        'UserAdd': () => import('./UserAddComponent'),
        'UserEdit': () => import('./UserEditComponent'),
    };
    let components_name_list = Object.keys(components);
    export default {
        name: "UserComponent",
        component: components,
        data() {
            return {
                componentsArray: components_name_list,
                contentComponent: components.UserList,
            };
        },
        methods: {
            addUser :function () {
                
            },
            editUser :function () {

            },
            deleteUser:function () {
                
            }
        }
    }
</script>

<style scoped>

</style>
