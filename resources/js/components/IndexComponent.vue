<template>
    <div class="form-container">
        <div class="grid align__item">
            <div class="register">
                <h2>Sign Up</h2>
                <form  class="form" @submit="login">
                    <div class="form__field"  >
                        <input type="email" name="email" id="login" v-model="email" value="admin@admin.com" class="form-control">
                    </div>
                    <div class="form__field">
                        <input type="password" name="password" id="password" v-model="password" value="secret" class="form-control">
                    </div>
                    <div class="form__field">
                        <button type="submit" class="btn btn-dark">Войти</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexComponent",
        mounted() {
            if(!!localStorage.getItem('access_token')){
                this.$store.dispatch('getAuth');
            }
        },
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            login(e) {
                e.preventDefault();
                this.$store.dispatch('login',{
                    email: this.email,
                    password: this.password
                });
            },

        }
    }
</script>

<style scoped>

</style>
