[Demo](https://id1945.github.io/vue-basic/68.actions/dist/ "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 68.actions
npm install vuex --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/68.actions
npm install
npm run serve
```

````html
<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button @click='increment'>+</button>
    <button @click='testAction'>-</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: { 
    ...mapState(['count'])
  },
  methods: {
    increment () {
        this.$store.dispatch('incrementAsync');
    },
    decrement () {
        this.$store.commit('decrement');
    },
    testAction () {
        this.$store.dispatch('actionA').then(() => {
          console.log('OK');
        })
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
        decrement (state) {
            state.count--
        }
    },
    actions: {
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        },
        actionA ({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('decrement')
                    resolve()
                }, 1000)
            })
        },
        // actionB ({ dispatch, commit }) {
        //     return dispatch('actionA').then(() => {
        //         commit('someOtherMutation')
        //     })
        // },
        // async actionC ({ commit }) {
        //     commit('gotData', await getData())
        // },
        // async actionD ({ dispatch, commit} ) {
        //     await dispatch('actionC')
        //     commit('gotOtherData', await getOtherData())
        // }
    }
});

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
````