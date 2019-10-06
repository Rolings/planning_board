<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">User</span></h2>
        </div>
        <div class="container user-form">
            <form @submit="formSubmit"  @reset="formReset" >
                <input type="hidden" name="user_id"  v-model="user.id">
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
                                <button type="reset" class="btn btn-secondary">Cancel</button>
                                <button type="submit" class="btn btn-primary">Save Changes</button>
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
        data(){
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
        mounted() {
            this.$store.dispatch('userSingle',{user_id:this.$router.currentRoute.params.user_id});
        },
        computed: {
            user() {
                return this.$store.getters.user;
            },
        },
        methods: {
            formReset(e){
                e.preventDefault();
                this.$router.push({ path: '/admin/users'});

            },
            formSubmit(e) {
                e.preventDefault();
               let data = {
                   user_id:this.$router.currentRoute.params.user_id,
                    form: {
                        first_name: this.user.first_name,
                        last_name: this.user.last_name,
                        email: this.user.email,
                        phone: this.user.phone,
                        address: this.user.address,
                        password: this.user.password,
                        confirm_password: this.user.confirm_password,
                    }
                };
                this.$store.dispatch('userEdit', {data});
                this.$router.push({ path: '/admin/user'});

            }
        }
    }
</script>

<style scoped>

</style>
