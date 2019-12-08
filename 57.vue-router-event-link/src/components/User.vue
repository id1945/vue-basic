<template>
  <div>
    User template<br/>
    <button @click="backToHome" class="btn btn-info">Back to home</button>
  </div>
</template>

<script>
export default {
  methods: {
    backToHome() {
      this.$router.push('/');
    } 
  }
}
</script>

<style scoped>
</style>
