<template>
    <div>
        <h1 v-html="">Menu component</h1>
        <div class="menu-list-control"></div>
        <div>
            <ul class="menu-list">
                <li  class="menu-list-item title"></li>
                <li class="menu-list-item" v-for="menu in menus">
                    <div class="menu-item-title">
                        <label>{{ menu.title }}</label>
                    </div>
                    <div class="menu-item-action">
                        <ul>
                            <li>
                                <span class="menu-item-action-button">Edit</span>
                            </li>
                            <li>
                                <span class="menu-item-action-button">Delete</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Menu',
        data() {
            return {
                menus: [
                    {id: 1, title: 'iPhone7'},
                ]
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
            }
        }
    };
</script>

<style scoped>

</style>
