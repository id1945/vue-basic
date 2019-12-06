import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter(
  "uppercase", function(text) {
    return text.toUpperCase();
  }
);

new Vue({
  render: h => h(App),
}).$mount('#app')
