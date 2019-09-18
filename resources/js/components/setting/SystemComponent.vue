<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">System</span></h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'System',
        computed: {
            user() {
                return this.$store.getters.auth;
            },
        },
    };
</script>

<style scoped>

</style>
