<template>
    <div class="form-container">
        <div class="grid align__item">
            <div class="register">
                <h2>Sign Up</h2>
                <form  class="form" @submit="formSubmit">
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
            console.log('Component mounted.');
            this.checkAuth();
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
                this.axios.post(window.base+'/api/auth', {
                    email: this.email,
                    password: this.password
                }).then(function (response) {
                        if(response){
                            if(response.data.status===true){
                                window.axios.defaults.headers.common['Authorization'] = "bearer " + response.data.access_token;
                                localStorage.setItem('access_token', response.data.access_token);
                            //    location.href = '/admin/dashboard';

                            }
                        }
                    })
                    .catch(function (error) {
                        currentObj.output = error;
                    });
            },
            checkAuth(){
                let currentObj = this;
                window.axios.defaults.headers.common['Authorization'] = "bearer " + localStorage.getItem('access_token');
                this.axios.get(window.base+'/api/auth/check-auth').then(function (response) {
                    if (response) {
                        if(!response.data.error){
                           // location.href = '/admin/dashboard';
                        }
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
