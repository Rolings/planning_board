<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">Dashboard</span></h2>
        </div>
        <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
        <b-container>
            <b-row>
                <b-col>
                    <div class="col-lg-4 pull-lg-8 text-xs-center">
                        <img src="//placehold.it/150" class="m-x-auto img-fluid img-circle" alt="avatar">
                        <h6 class="m-t-2">Upload a different photo</h6>
                        <label class="custom-file">
                            <input type="file" id="file" class="custom-file-input">
                            <span class="custom-file-control">Choose file</span>
                        </label>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    export default {
        name: 'Dashboard',
        data() {
            return {
                breadcrumb: [
                    {
                        text: 'Dashboard',
                        href: '/admin/dashboard',
                    },
                ]
            }
        },
        computed: {
            user() {
                console.log(this.$store.getters.auth)
                return this.$store.getters.auth;
            },
        },
        methods: {
            goBreadcrumb(event) {
                this.$emit('goBreadcrumb', {href: event.currentTarget.getAttribute('href')});
            },
        }
    };
</script>

<style scoped>

</style>
