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
            <div class="d-flex bd-highligh col-sm-12">
                <div v-for="( user, index ) in userList" :key="user.first_name" class="p-2 flex-fill bd-highlight border border-success">
                    <div class="col-sm-12">
                        <div class="d-flex bd-highlight bd-highlight">
                            <div class="p-2 bd-highlight">
                                <div class="text-center">
                                    <img :src="user.image" alt="..." class="rounded rounded-sm" width="100">
                                </div>
                            </div>
                            <div class="p-2 bd-highlight">
                                <span class="mdl-list__item-primary-content">
                                    <span>{{ user.first_name }}</span>
                                    <span class="mdl-list__item-text-body"></span>
                                </span>
                            </div>
                            <div class="p-2 bd-highlight">
                                <span class="mdl-list__item-secondary-action">
                                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="getInformationSelectUser(user.id)">Edit</button>
                                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="deleteSelectUser(user.id)">Delete</button>
                                </span>
                            </div>
                        </div>


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
                console.log('List component', user_id);
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
