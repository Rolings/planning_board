<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">Dashboard</span></h2>
        </div>
        <div class="menu-breadcrumbs">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/admin/dashboard" v-on:click.native="goBreadcrumb">Dashboard</router-link>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        methods: {
            goBreadcrumb(event) {
                this.$emit('goBreadcrumb', {href: event.currentTarget.getAttribute('href')});
            },
        }
    };
</script>

<style scoped>

</style>
