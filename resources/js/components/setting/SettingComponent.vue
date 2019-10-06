<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">Setting</span></h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Setting',
        computed: {
            user() {
                return this.$store.getters.auth;
            },
        },
    };
</script>

<style scoped>

</style>
