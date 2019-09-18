<template>
    <div>
        <div>
            <h2><span class="badge badge-secondary">Imap</span></h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Imap',
        computed: {
            user() {
                return this.$store.getters.auth;
            },
        },
    };
</script>

<style scoped>

</style>
