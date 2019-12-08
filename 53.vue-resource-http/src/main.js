import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = "https://jsonplaceholder.typicode.com/";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md