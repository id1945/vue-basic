<template>
  <div id="app">
    <router-link :to="{path:'/'}" class="btn btn-success mr-2">home</router-link>
    <router-link :to="{path:'/user'}" class="btn btn-danger ml-2">User</router-link>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
