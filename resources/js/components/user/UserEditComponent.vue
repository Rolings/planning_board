<template>
    <div>
        <div class="row">
            <div class="col-lg-4">
                <form action="">
                    <div class="form-group">
                        <label for="name">Name: </label>
                        <input type="text" id="name" name="name" class="form-control" :value="user.name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email: </label>
                        <input type="email" id="email" name="email" class="form-control" :value="user.email">
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: "UserEditComponent",
      mounted() {
        //  this.$store.dispatch('userSingle', {user_id: data.user_id});
          console.log()
      },
      computed: {
          user() {
              return this.$store.getters.auth.user;
          },
      },
  }
</script>

<style scoped>

</style>
