import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue(); // Global event bus

new Vue({
  render: h => h(App),
}).$mount('#app')
