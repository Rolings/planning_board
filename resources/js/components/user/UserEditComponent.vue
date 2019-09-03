<template>
    <div>
        <div class="container">

                <form class="form" @submit="save">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <img :src="`${storage}/${user.image}`" alt="" class="rounded">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="name">Name: </label>
                            <input type="text" id="name" name="name" class="form-control" :value="user.name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email: </label>
                            <input type="email" id="email" name="email" class="form-control" :value="user.email">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-dark">Войти</button>
                        </div>
                    </div>
                </form>

        </div>
    </div>
</template>

<script>
  export default {
    name: "UserEditComponent",
      data() {
          return {
              storage: window.storage
          }
      },
      mounted() {
      },
      computed: {
          user() {
              return this.$store.getters.auth.user;
          },
      },
      methods: {
          save(e){
              e.preventDefault();
              this.$store.dispatch('userEdit',{
                  name: this.name,
                  email: this.email
              });
          }
      }
  }
</script>

<style scoped>

</style>
