<template>
    <div>
        <b-container class="bv-example-row">
            <b-form @submit="save">
                <b-row>
                    <b-col>
                        <div class="col-lg-4 pull-lg-8 text-xs-center">
                            <img  :src="user.image" class="m-x-auto img-fluid img-circle" alt="avatar">
                            <h6 class="m-t-2">Upload a different photo</h6>
                            <label class="custom-file">
                                <input type="file" id="file" class="custom-file-input">
                                <span class="custom-file-control">Choose file</span>
                            </label>
                        </div>
                    </b-col>
                    <b-col>
                        <h4 class="m-y-2">Edit Profile</h4>
                        <form role="form">
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" :value="user.first_name">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" :value="user.last_name">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="email" :value="user.email">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Phone</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" :value="user.phone" placeholder="Street">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Address</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" :value="user.address" placeholder="Street">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label"></label>
                                <div class="col-lg-6">
                                    <input class="form-control" type="text" value="" placeholder="City">
                                </div>
                                <div class="col-lg-3">
                                    <input class="form-control" type="text" value="" placeholder="State">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Login</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" :value="user.login" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Password</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="password" value="11111122333">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="password" value="11111122333">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label"></label>
                                <div class="col-lg-9">
                                    <input type="reset" class="btn btn-secondary" value="Cancel">
                                    <input type="button" class="btn btn-primary" value="Save Changes">
                                </div>
                            </div>
                        </form>
                    </b-col>
                </b-row>
            </b-form>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "UserEditComponent",
        data() {
            return {
                role_select: null,
                roles: [
                    { value: null, text: 'Please select an option' },
                    { value: 'a', text: 'This is First option' },
                    { value: 'b', text: 'Selected Option' },
                    { value: { C: '3PO' }, text: 'This is an option with object value' },
                    { value: 'd', text: 'This one is disabled', disabled: true }
                ]
            }
        },
        mounted() {

        },
        computed: {
            user() {
                this.role_select =  this.$store.getters.user.role_id;
                return this.$store.getters.user;
            },
        },
        methods: {
            save(e) {
                e.preventDefault();
                this.$store.dispatch('userEdit', {
                    name: this.name,
                    email: this.email
                });
            }
        }
    }
</script>

<style scoped>

</style>
