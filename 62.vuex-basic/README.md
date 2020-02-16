[Demo](https://id1945.github.io/vue-basic/62.vuex-basic/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 62.vuex-basic
npm install vuex --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/62.vuex-basic
npm install
npm run serve
```

HelloWorld.vue
````html
<template>
  <div>
    <button @click="toggleMe">Toggle Me</button>
    <div v-if="isTrue">
      <h1>Hello world</h1>
    </div>
  </div>
</template>
````

````javascript
<script>
export default {
  computed: {
    isTrue: function () {
      return this.$store.getters.isTrue
    }
  },
  methods: {
    toggleMe: function () {
      this.$store.dispatch('toggle')
    }
  }
}
</script>
````

store/index.js
````javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTrue: true
  },
  getters: {
    isTrue: function (state) {
      return state.isTrue
    }
  },
  mutations: {
    toggle: function (state) {
      state.isTrue = !state.isTrue
    }
  },
  actions: {
    toggle: function (context) {
      context.commit('toggle')
    }
  }
})
````

main.js
````javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

````