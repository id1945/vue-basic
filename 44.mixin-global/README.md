[Demo](https://id1945.github.io/vue-basic/44.mixin-global/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 44.mixin-global
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/44.mixin-global
npm install
npm run serve
```

````javascript
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
````
````html
<template>
  <div>
    {{test_name}}
  </div>
</template>
````