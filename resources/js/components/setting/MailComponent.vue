<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">Mail</span></h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Mail',
        computed: {
            user() {
                return this.$store.getters.auth;
            },
        },
    };
</script>

<style scoped>

</style>
