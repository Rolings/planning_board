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
            console.log('Component mounted.');
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
                this.axios.post(window.baseUrl+'/api/auth', {
                    email: this.email,
                    password: this.password
                })
                    .then(function (response) {
                        if(response){
                            if(response.data.status===true){
                                window.axios.defaults.headers.common['Authorization'] = "bearer " + response.data.access_token;
                                localStorage.setItem('access_token', response.data.access_token);
                                let now = new Date();
                                let time = now.getTime();
                                time += 1000 * response.data.expires_in;
                                now.setTime(time);
                                document.cookie="access_token="+response.data.access_token+"; path=/; expires="+ now.toUTCString();
                              //  location.href = '/account?token='+response.data.access_token;
                                location.href = '/account';
                            }
                        }
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
