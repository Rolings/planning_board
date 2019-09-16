<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">User</span></h2>
        </div>
        <b-breadcrumb :items="breadcrumb" v-on:click.native="goBreadcrumb"></b-breadcrumb>
        <div class="container">
            <div class="user-container" :is="contentComponent" @getInformationSelectUser="getSingleUser"></div>
        </div>

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
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        href: '/admin/dashboard',
                    },
                    {
                        text: 'User',
                        href: '/admin/user',
                    },
                ],
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
                this.$store.dispatch('getRoles');
                this.breadcrumb.push({text:'Single',to:'#'});
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
