<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">User</span></h2>
        </div>
        <div class="container-fluid">
            <div class="user-container" :is="content_user" @getInformationSelectUser="getSingleUser"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserComponent",
        data() {
            return {
                content_user: () => import('./UserListComponent'),
            };
        },
        methods: {
            getSingleUser(data){
                this.$router.push({ path: `/admin/users/${data.user_id}` });
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
