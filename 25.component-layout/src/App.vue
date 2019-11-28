<template>
  <div id="app">
    <header-app/>
    <list-app/>
    <footer-app/>
  </div>
</template>

<script>

import Header from './components/layout/header.vue';
import Footer from './components/layout/footer.vue';
import List from './components/server/list.vue';

export default {
  name: 'app',
  components: {
    HeaderApp: Header,
    'footer-app': Footer,
    ListApp: List
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
