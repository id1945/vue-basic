<template>
  <div id="app">
    <header-app/>
    <user-app/>
    <footer-app/>
  </div>
</template>

<script>

import Header from './components/layout/header.vue';
import Footer from './components/layout/footer.vue';
import User from './components/user/list.vue';

export default {
  name: 'app',
  components: {
    HeaderApp: Header,
    'footer-app': Footer,
    UserApp: User
  }
}
</script>

<style>
#app {
  position: relative;
  text-align: center;
  padding: 15px;
  border: 1px solid red;
}
</style>
