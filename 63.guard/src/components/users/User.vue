<template>
  <div class="m-auto">
    User template<br/>
    <button @click="backToHome" class="btn btn-info">Back to home</button>
    <br/><br/>
    <strong>Select a user</strong>
    <br/>
    <div class="boder-cool">
      <router-link tag="a" :to="{path:'/users/1', query:{msg:'Hi!'}}" class="mr-2">User 1</router-link>|
      <router-link tag="a" :to="{path:'/users/2', query:{msg:'How are you?'}}" class="ml-2 mr-2">User 2</router-link>|
      <router-link tag="a" :to="{path:'/users/3', query:{msg:'I`m good. Nice to meet you!'}}" class="ml-2">User 3</router-link>
    </div>
    <br/><br/>
    <router-view></router-view>
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
.boder-cool {
  width: 300px;
  margin: auto;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
</style>
