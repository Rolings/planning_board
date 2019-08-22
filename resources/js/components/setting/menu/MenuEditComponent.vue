<template>
    <div>
        <div class="container">
            <form action="" class="menu-action-form">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" class="form-control" v-model="title">
                    </div>
                    <div class="form-group">
                        <label for="parent_id">Parent ID</label>
                        <select name="parent_id" id="parent_id"  class="form-control"></select>
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
      props:['title'],
/*      props: {
          menuInformation: [],
          menus: [],

      },*/
      created: function () {
          console.log('user data from parent component:')
          console.log(this.menuInformation)
          console.log(this.menus)
      }
  };
</script>

<style scoped>

</style>
