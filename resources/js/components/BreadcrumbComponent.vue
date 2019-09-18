<template>
    <b-breadcrumb v-if="items" :items="items" @click="modify"></b-breadcrumb>
</template>

<script>
    export default {
        props: ['items'],
        watch: {
            '$route' (to, from) {
                this.content = this.$router.currentRoute.matched[0].components.default;
                this.modify();
            }
        },
        methods: {
            modify () {
                this.$emit('modify-breadcrumb')
            }
        }
    }
</script>


<style scoped>

</style>