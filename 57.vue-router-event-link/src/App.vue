<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <a class="navbar-brand" href="#">Vue-Router</a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link
            exact
            tag="a" 
            :to="{path:'/'}"
            active-class="active"
            class="nav-item nav-link">Home</router-link>
          <router-link
            tag="a" 
            :to="{path:'/user'}"
            active-class="active"
            class="nav-item nav-link">User</router-link>
        </div>
      </div>
    </nav>
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
}
</style>
