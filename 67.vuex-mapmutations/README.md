[Demo](https://id1945.github.io/vue-basic/67.vuex-mapmutations/dist/ "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 67.vuex-mapmutations
npm install vuex --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/67.vuex-mapmutations
npm install
npm run serve
```

````html
<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button @click='increment'>+</button>
    <button @click='incrementBy({amount: 2})'>+ 2</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  computed: { 
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations([
        'increment',
        'incrementBy'
    ])
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
    store,
    render: h => h(App),
}).$mount('#app')
````