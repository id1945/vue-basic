[Demo](https://id1945.github.io/vue-basic/51.interceptors/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 51.interceptors
npm install vue-resource --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/51.interceptors
npm install
npm run serve
```

## [3] Summary
````javascript
export default {
  data() {
    return {
      btc_price: ''
    }
  },
  methods: {
    getData() {
      this.$http.get('https://blockchain.info/ticker').then(response => {
        // success callback
        this.btc_price = response.body.USD.sell
        console.log(response);
      }, response => {
        // error callback
        console.error(response);
      });
    }
  }
}

````
````javascript
import Vue from 'vue'
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

new Vue({
  render: h => h(App),
}).$mount('#app')
````