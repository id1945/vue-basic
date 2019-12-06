import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      test_name: "Hello world ! - TEST Mixin"
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
