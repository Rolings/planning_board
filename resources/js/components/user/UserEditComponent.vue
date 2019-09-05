<template>
    <div>
        <div class="container">
            <form @submit="save">
                <div class="row">
                    <div class="col-lg-4 pull-lg-8 text-xs-center">
                        <img  :src="user.image" class="m-x-auto img-fluid img-circle" alt="avatar">
                        <h6 class="m-t-2">Upload a different photo</h6>
                        <label class="custom-file">
                            <input type="file" id="file" class="custom-file-input">
                            <span class="custom-file-control">Choose file</span>
                        </label>
                    </div>
                    <div class="col-lg-8">
                        <h4 class="m-y-2">Edit Profile</h4>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">First name</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="first_name" :value="user.first_name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="last_name" :value="user.last_name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Email</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="email" name="email" :value="user.email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Phone</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="phone" :value="user.phone" placeholder="Street">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Address</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="address" :value="user.address" placeholder="Street">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Login</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="login" :value="user.login" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Password</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="password" id="password" name="password" autocomplete="of" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="password" id="confirm_password" name="confirm_password"  autocomplete="of" v-on:input="checkPassword" >
                                <small ref="password_confirm_error" class="d-none form-text text-muted alert alert-danger">Passwords do not match.</small>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label"></label>
                            <div class="col-lg-9">
                                <input type="reset" class="btn btn-secondary" value="Cancel">
                                <input type="submit" class="btn btn-primary" value="Save Changes">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserEditComponent",
        mounted() {

        },
        computed: {
            user() {
                this.role_select =  this.$store.getters.user.role_id;
                return this.$store.getters.user;
            },
        },
        methods: {
            checkPassword(event){
                console.log(this.password)
                console.log(this.confirm_password)
/*                if( this.password===this.confirm_password){

                    this.$refs.password_confirm_error.display = 'block';
                }*/
            },
            save(e) {
                e.preventDefault();
                if( this.password===this.confirm_password){
                    this.$store.dispatch('userEdit', {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        email: this.email,
                        phone: this.phone,
                        address: this.address,
                        password: this.password,
                        confirm_password: this.confirm_password,
                    });
                }

            }
        }
    }
</script>

<style scoped>

</style>
