<template>
  <div>
    <h2>User ID {{uid}}</h2>
    <h4 class="alert alert-danger w-25 m-auto">{{message}}</h4>
  </div>
</template>

<script>
export default {
  props: ["uid"],
  data() {
    return {
      message: ''
    }
  },
  beforeUpdate() {
    this.message = this.$route.query.msg;
  },
  created() {
    this.message = this.$route.query.msg;
  }
}
</script>

<style scoped>
</style>
