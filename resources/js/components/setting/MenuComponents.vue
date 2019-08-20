<template>
    <div>
        <div class="menu-list">

            <ul class="demo-list-three mdl-list">
                <li v-for="( menu, index ) in menus" class="mdl-list__item mdl-list__item--three-line">
                    <span class="mdl-list__item-primary-content">
                      <i class="material-icons">menu</i>
                      <span>{{ menu.title }}</span>
                      <span class="mdl-list__item-text-body">
                      </span>
                    </span>
                    <span class="mdl-list__item-secondary-content">
                      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">create</i></a>
                      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">delete_sweep</i></a>
                </span>
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
                    {id: 1, title: 'iPhone7'}
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
                this.axios.post(window.base + '/api/get-menu')
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
