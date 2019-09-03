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
        <ul class="demo-list-three mdl-list">
            <draggable :list="userList" :disabled="!enabled" class="list-group" ghost-class="ghost" :move="checkMove"
                       @start="dragging = true" @end="dragging = false">
                <li v-for="( user, index ) in userList" class="mdl-list__item mdl-list__item--three-line"
                    :key="user.name">
                    <span class="mdl-list__item-primary-content">
                      <i class="material-icons">menu</i>
                      <span>{{ user.name }}</span>
                      <span class="mdl-list__item-text-body">
                      </span>
                    </span>
                    <span class="mdl-list__item-secondary-action">
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                                @click="getInformationSelectUser(user.id)">Edit</button>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                                @click="deleteSelectUser(user.id)">Delete</button>
                </span>
                </li>
            </draggable>
        </ul>
    </div>
</template>

<script>
    import {draggable} from 'vuedraggable/src/vuedraggable.js';

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
