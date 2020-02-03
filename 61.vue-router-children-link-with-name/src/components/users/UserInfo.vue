<template>
  <div>
    <h2>User ID {{uid}}</h2>
    <h4 class="alert alert-danger w-25 m-auto">{{message}}</h4>
  </div>
</template>

<script>
export default {
  props: ["uid"], // Params
  data() {
    return {
      message: ''
    }
  },
  watch: {
    '$route'(to, from) {
      this.message = to.query.msg,
      console.log(from);
    }
  }
}
</script>

<style scoped>
</style>
