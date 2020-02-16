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
