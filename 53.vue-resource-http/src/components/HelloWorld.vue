<template>
  <div>
    <ul class="list-group w-25 m-auto text-left">
      <li class="list-group-item"><b>Id:</b> {{post.id}}</li>
      <li class="list-group-item"><b>Title:</b> {{post.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      post: ""
    };
  },
  created() {
    // https://jsonplaceholder.typicode.com/posts/1
    this.$http.get("posts/1") 
    .then(res => {
      this.post = res.body;
    });
  }
}
</script>

<style scoped>
</style>
