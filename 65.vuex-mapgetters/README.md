[Demo](https://id1945.github.io/vue-basic/65.vuex-mapgetters/dist/ "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 65.vuex-mapgetters
npm install vuex --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/65.vuex-mapgetters
npm install
npm run serve
```

````html
<template>
  <h1> text: {{ getTodoById(1).text }} </h1> <!-- text: A -->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: { 
    ...mapGetters(['doneTodos', 'getTodoById'])
  }
  //computed: mapGetters([
  //   'doneTodos', 'getTodoById'
  //])
}
</script>
````

````javascript
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'A', done: true },
      { id: 2, text: 'B', done: false }
    ]
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
````