<template>
  <div>
    <h2>User template</h2>
    <button @click="details" class="btn btn-info">View Details</button>
  </div>
</template>

<script>
  export default {
    methods: {
      details() {
        this.$router.push({ path:'/Users/123', query:{msg:'HelloWorld'}});
      }
    }
  }
</script>

<style scoped>
</style>