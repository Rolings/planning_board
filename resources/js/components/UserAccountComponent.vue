<template>
<div class="forgot-password"></div>
</template>
<script>
    export default {
        name: "UserAccountComponent",
        mounted(){
            console.log('Component mounted.');
            this.getMenu();
        },
        data() {
            return {}
        },
        methods: {
            getMenu() {
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
                this.axios.get('http://localhost:3000/api/auth/get-menu').then(function (response) {
                    if (response) {
                    }
                }).catch(function (error) {
                        currentObj.output = error;
                    });
            }
        }

    }
</script>

<style scoped>

</style>
