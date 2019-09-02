<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">User</span></h2>
        </div>
        <div class="menu-breadcrumbs">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/admin/dashboard">Dashboard</a></li>
                    <li class="breadcrumb-item"><a href="/admin/user">User</a></li>
                </ol>
            </nav>
        </div>

        <div class="user-list" :is="contentComponent" @getInformationSelectUser="getSingleUser"></div>
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
            getSingleUser(data){
                this.contentComponent = components.UserEdit;
            },
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
