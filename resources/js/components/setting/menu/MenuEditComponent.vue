<template>
    <div>
        <div class="container">
            <form action="" class="menu-action-form">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="parent_id">Parent ID</label>
                        <select name="parent_id" id="parent_id" class="form-control">
                            <option  v-for="( menu, index ) in full_menu" >{{ menu.title }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="icon">Icon</label>
                        <input type="text" id="icon" name="icon" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="href">Link</label>
                        <input type="text" id="href" name="href" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="order">Order</label>
                        <input type="number" id="order" name="order" class="form-control">
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'EditMenuComponent',

        computed: {
            full_menu() {
                return this.$store.getters.full_menu;
            },
        },
    };
</script>

<style scoped>

</style>
