<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">Permissions</span></h2>
        </div>
        <div class="menu-breadcrumbs">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/admin/dashboard" v-on:click.native="goBreadcrumb">Dashboard</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/admin/permission" v-on:click.native="goBreadcrumb">Permission</router-link></li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PermissionsComponent",
        methods: {
            goBreadcrumb(event){
                this.$emit('goBreadcrumb', {href:event.currentTarget.getAttribute('href')});
            },
        }
    }
</script>

<style scoped>

</style>
