import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

// telling vue.js to use this package
Vue.use(VueResource);

Vue.http.interceptors.push(function(request,next){

  // modifying request headers
  // request.headers.set('X-CSRF-TOKEN', 'TOKEN');
  // request.headers.set('Authorization', 'Bearer TOKEN');

  next(function(response){
      //logging the response body
      console.log(response.body)
  });
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// https://reactgo.com/vue-resource-interceptors/
// https://github.com/pagekit/vue-resource/blob/develop/docs/http.md#interceptors