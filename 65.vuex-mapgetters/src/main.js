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
