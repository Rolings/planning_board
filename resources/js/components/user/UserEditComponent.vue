<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <form class="form" @submit="save">
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
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "UserEditComponent",
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
