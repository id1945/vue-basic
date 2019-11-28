import Vue from 'vue'
import App from './App.vue'
import Contact from './components/Contact.vue'

Vue.config.productionTip = false

Vue.component("contactComponent", Contact);

new Vue({
  render: h => h(App),
}).$mount('#app')
