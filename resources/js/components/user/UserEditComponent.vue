<template>
    <div>
        <div class="">
            <form @submit="formSubmit">
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
                                <input class="form-control" type="text" name="first_name"  v-model="user.first_name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="last_name" v-model="user.last_name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Email</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="email" name="email" v-model="user.email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Phone</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="phone" v-model="user.phone" placeholder="Street">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Address</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="address" v-model="user.address" placeholder="Street">
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
                                <input class="form-control" type="password" id="password" name="password" autocomplete="off" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="password" id="confirm_password" name="confirm_password"  autocomplete="off"  >
                                <small ref="password_confirm_error" class="d-none form-text text-muted alert alert-danger">Passwords do not match.</small>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label"></label>
                            <div class="col-lg-9">
                                <input type="reset" class="btn btn-secondary" value="Cancel">
                                <button  type="submit" class="btn btn-primary">Save Changes</button>
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
        dara(){
            return {
                first_name:'',
                last_name: '',
                email: '',
                phone: '',
                address: '',
                password: '',
                confirm_password: '',
            }
        },
        computed: {
            user() {
                this.role_select =  this.$store.getters.user.role_id;
                return this.$store.getters.user;
            },
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let data = {
                    user_id: this.user.id,
                    form: {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        email: this.email,
                        phone: this.phone,
                        address: this.address,
                        password: this.password,
                        confirm_password: this.confirm_password,
                    }
                };
                this.$store.dispatch('userEdit', data);

            }
        }
    }
</script>

<style scoped>

</style>
