<template>
    <div>
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
        <section>
            <div class="user-list row">
                <div  v-for="( user, index ) in userList" :key="user.first_name" class="card" style="width: 18rem;">
                    <img :src="user.image"  class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{user.first_name}} {{ user.last_name}}</h5>
                        <p class="card-text">  </p>
                        <button @click="getInformationSelectUser(user.id)" class="btn btn-primary stretched-link">Edit</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "UserListComponent",
        display: 'Simple',
        order: 0,
        data() {
            return {
                enabled: true,
                dragging: false
            };
        },
        mounted() {
            this.$store.dispatch('getUserList');
        },
        computed: {
            userList() {
                return this.$store.getters.userList;
            },
        },
        methods: {
            getInformationSelectUser(user_id) {
                this.$emit('getInformationSelectUser', {user_id: user_id});
            },
            deleteSelectUser(user_id) {
                this.$emit('deleteSelectUser', {user_id: user_id});
                console.log(user_id);
            },
            add: function () {
                this.list.push({title: 'Juan ' + id, id: id++});
            },
            replace: function () {
                this.list = [{title: 'Edgard', id: id++}];
            },
            checkMove: function (e) {
                window.console.log('Future index: ' + e.draggedContext.futureIndex);
            }
        }
    }
</script>

<style scoped>

</style>
