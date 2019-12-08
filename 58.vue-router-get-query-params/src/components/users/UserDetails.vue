<template>
  <div>
    <h2>User details</h2>
    <button @click="backToHome" class="btn btn-info">Back to home</button>
    <br/>
    <br/>
    <h6><b>User ID:</b> {{id}}</h6>
    <h6><b>Message:</b> {{msg}}</h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      msg: this.$route.query.msg
    }
  },
  methods: {
    backToHome() {
      this.$router.push('/');
    } 
  }
}
</script>

<style scoped>
</style>
