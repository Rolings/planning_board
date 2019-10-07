<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">Permission</span></h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Permission',
        mounted() {
            this.$store.dispatch('getPermissions');
        },
        computed: {
            user() {
                console.log(this.$store.getters.permissions);
            },
        },
    };
</script>

<style scoped>

</style>
