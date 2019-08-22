<template>
    <div>
        <ul class="demo-list-three mdl-list">
            <draggable :list="menus" :disabled="!enabled" class="list-group" ghost-class="ghost" :move="checkMove"
                       @start="dragging = true" @end="dragging = false">
                <li v-for="( menu, index ) in menus" class="mdl-list__item mdl-list__item--three-line"
                    :key="menu.title">
                    <span class="mdl-list__item-primary-content">
                      <i class="material-icons">menu</i>
                      <span>{{ menu.title }}</span>
                      <span class="mdl-list__item-text-body">
                      </span>
                    </span>
                    <span class="mdl-list__item-secondary-action">
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                                @click="getInformationSelectMenu(menu.id)">Edit</button>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                                @click="deleteSelectMenu(menu.id)">Delete</button>
                </span>
                </li>
            </draggable>
        </ul>
    </div>
</template>

<script>
    import {draggable} from 'vuedraggable/src/vuedraggable.js';
    let id = 1;
    export default {
        name: 'MenuListComponent',
        display: 'Simple',
        order: 0,

        data() {
            return {
                menus: [
                    {id: 1, title: 'Load'}
                ],
                enabled: true,
                dragging: false
            };
        },
        mounted() {
            this.getMenu();
        },
        methods: {
            getMenu() {
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
                this.axios.post(window.base + '/api/get-full-menu')
                    .then(response => {
                        this.menus = response.data;
                    }).catch(function (error) {
                    currentObj.output = error;
                });
            },
            getInformationSelectMenu(menu_id) {
                this.$emit('getInformationSelectMenu', {menu_id:menu_id});
            },
            deleteSelectMenu(menu_id) {
                this.$emit('deleteSelectMenu', {menu_id:menu_id});
                console.log(menu_id);
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
    };
</script>

<style scoped>

</style>
