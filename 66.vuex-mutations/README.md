[Demo](https://id1945.github.io/vue-basic/66.vuex-mutations/dist/ "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 66.vuex-mutations
npm install vuex --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/66.vuex-mutations
npm install
npm run serve
```

````html
<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button @click='increment'>+</button>
  </div>
</template>

<script>
export default {
  computed: mapState([
    'count'
  ]),
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    incrementType () {
      this.$store.commit({
        type: 'incrementBy',
        amount: 40
      })
    },
    incrementPayload () {
      this.$store.commit('incrementBy', { amount: 29 });
    }
  }
}
</script>
````

````javascript
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        incrementBy (state, payload) {
            state.count += payload.amount
        }
    }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
````