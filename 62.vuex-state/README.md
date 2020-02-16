[Demo](https://id1945.github.io/vue-basic/62.vuex-state/dist/ "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 62.vuex-state
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/62.vuex-state
npm install
npm install vuex --save
npm run serve
```

````html
<template>
   <h1>{{count}}</h1>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>
````

````javascript
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 3
    }
});

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
````
