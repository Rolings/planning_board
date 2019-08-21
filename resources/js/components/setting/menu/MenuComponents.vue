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
        <div class="menu-breadcrumbs">

        </div>
        <div class="menu-list">
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
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="getInformationSelectMenu(menu.id)">Edit</button>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="deleteSelectMenu(menu.id)">Delete</button>
                </span>
                    </li>
                </draggable>
            </ul>
        </div>

    </div>

</template>

<script>
    import {draggable} from 'vuedraggable/src/vuedraggable.js';

    let id = 1;
    export default {
        name: 'Menu',
        display: 'Simple',
        order: 0,
        component:{
            'AddMenu': () => import('../../setting/menu/AddMenuComponent'),
            'EditMenu': () => import('../../setting/menu/EditMenuComponent'),
        },
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
            getInformationSelectMenu(menu_id){
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
                this.axios.post(window.base + '/api/get-menu-information',{ id:menu_id })
                    .then(response => {
                        console.log(response.data)
                    //    this.menus = response.data;
                    }).catch(function (error) {
                    currentObj.output = error;
                });
            },
            deleteSelectMenu(menu_id){
                console.log(menu_id)
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
