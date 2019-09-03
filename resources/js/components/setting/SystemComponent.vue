<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">System</span></h2>
        </div>
        <div class="menu-breadcrumbs">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/admin/dashboard" v-on:click.native="goBreadcrumb">Dashboard</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/admin/system" v-on:click.native="goBreadcrumb">System</router-link></li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SystemComponent"
    }
</script>

<style scoped>

</style>
