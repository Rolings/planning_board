<template>
    <div class="container">
        <form class="login"  @submit="formSubmit">
            <p>
                <label for="email">Email:</label>
                <input type="email" name="email" id="login" v-model="email" value="admin@admin.com">
            </p>

            <p>
                <label for="password">Пароль:</label>
                <input type="password" name="password" id="password" v-model="password" value="secret">
            </p>

            <p class="login-submit">
                <button type="submit" class="login-button">Войти</button>
            </p>

            <!--<p class="forgot-password"><a href="index.html">Забыл пароль?</a></p>-->
        </form>
    </div>
</template>

<script>
    export default {
        name: "IndexComponent",
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                this.axios.post('http://localhost:3000/api/auth', {
                    email: this.email,
                    password: this.password
                })
                    .then(function (response) {
                        currentObj.output = response.data;
                    })
                    .catch(function (error) {
                        currentObj.output = error;
                    });
            }
        }
    }
</script>

<style scoped>

</style>
