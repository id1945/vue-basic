<template>
  <div>
    <h2>User details</h2>
    <br/>
    <router-link tag="a" :to="{path:'/users/12',query:{msg:'Anthony'}}" class="btn btn-success mr-2">User 12</router-link>
    <router-link tag="a" :to="{path:'/users/13',query:{msg:'Antonio'}}" class="btn btn-info">User 13</router-link>
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
  watch: {
    '$route'(to, from) {
      this.id = to.params.id,
      this.msg = from.query.msg
    }
  }
}
</script>

<style scoped>
</style>
