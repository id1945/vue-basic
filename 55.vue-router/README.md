[Demo](https://id1945.github.io/vue-basic/55.vue-router/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 55.vue-router
npm i vue-router --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/55.vue-router
npm install
npm run serve
```

## [3] Summary
````html
<router-link tag="a" :to="{path:'/user'}" class="nav-item nav-link">User</router-link>

````
````javascript
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: "history", // http://localhost:8080/#/user => http://localhost:8080/user
  routes: [
    {path: '/', name: 'homePage', component: Home},
    {path: '/user', name: 'user', component: User}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

````