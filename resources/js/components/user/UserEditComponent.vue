<template>
    <div>
        <b-container class="bv-example-row">
            <b-form @submit="save">
                <b-row>
                    <b-col>
                        <b-form-group>
                            <b-img :src="user.image" fluid alt="Responsive image"></b-img>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="Name :" label-for="name">
                            <b-form-input id="name" :value="user.name" type="text" required
                                          placeholder="Name"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Email :" label-for="email">
                            <b-form-input id="email" :value="user.email" type="text" required placeholder="Email"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>


            </b-form>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "UserEditComponent",
        mounted() {

        },
        computed: {
            user() {
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
