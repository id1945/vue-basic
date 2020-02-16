[Demo](https://id1945.github.io/vue-basic/63.vuex-mapstate/dist/ "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 63.vuex-mapstate
npm install vuex --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/63.vuex-mapstate
npm install
npm run serve
```

````html
<template>
  <div class="hello">
    <h1>{{ count }}</h1> <!-- output 3 -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['count'])
  }
  //computed: mapState([
  //  'count'
  //])
}
</script>
````
Hoặc 

````html
<template>
  <div class="hello">
    <h1>{{ count }}</h1> <!-- output 7 -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      localCount: 4
    }
  },
  computed: mapState({
    count: state => state.count,
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
</script>
````

````javascript
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
````