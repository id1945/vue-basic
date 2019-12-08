<template>
  <div class="m-auto w-50">
    <!-- form -->
    <form @submit="onSubmit">
      <div class="form-group">
        <label>User Id</label>
        <input type="number" v-model="inputUri" placeholder="Enter User Id" class="form-control"/>
      </div>
      <button type="submit" class="btn btn-success">Get data</button>
    </form>
    <br/>
    <!-- data table -->
    <table class="table table-bordered text-left">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">UserId</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in post" :key="i">
          <th scope="row">{{item.id}}</th>
          <td>{{item.userId}}</td>
          <td>{{item.title}}</td>
          <td>@{{item.body}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      resource: {},
      post: [],
      inputUri: ''
    };
  },
  methods: {
    onSubmit(e) {
      this.resource.getUriData({ userId: this.inputUri }) 
      .then(res => {
        this.post = res.body;
      });
      e.preventDefault();
    }
  },
  created() {
    // https://jsonplaceholder.typicode.com/posts/1
    const customAction = {
      getUriData: { method: 'GET' }
    }
    this.resource = this.$resource('posts', '', customAction)
  }
  // https://github.com/pagekit/vue-resource
  // https://medialize.github.io/URI.js/uri-template.html
}
</script>

<style scoped>
</style>