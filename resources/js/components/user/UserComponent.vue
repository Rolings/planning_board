<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">User</span></h2>
        </div>
        <div class="menu-breadcrumbs">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/admin/dashboard" v-on:click.native="goBreadcrumb">Dashboard</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/admin/user" v-on:click.native="goBreadcrumb">User</router-link></li>
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
            goBreadcrumb(event){
                this.$emit('goBreadcrumb', {href:event.currentTarget.getAttribute('href')});
            },
            getSingleUser(data){
                this.$store.dispatch('userSingle',{user_id:data.user_id});
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
