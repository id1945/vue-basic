[Demo](https://id1945.github.io/vue-basic/59.vue-router-watch-query-params/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 59.vue-router-watch-query-params
npm i vue-router --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/59.vue-router-watch-query-params
npm install
npm run serve
```

## [3] Summary
````javascript
const router = new VueRouter({
  // mode: "history", // http://localhost:8080/#/user => http://localhost:8080/user
  routes: [
    {path: '/', name: 'homePage', component: Home},
    {path: '/users', name: 'users', component: Users},
    {path: '/users/:id', name: 'userDetails', component: UserDetails}
  ]
})

````
````javascript
export default {
  data() {
    return {
      id: this.$route.params.id,
      msg: this.$route.query.msg
    }
  },
  watch: {
    '$route'(to, from) {
      this.id = to.params.id,
      this.msg = from.query.msg
    }
  }
}
````