import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from "./components/Home";
import Users from "./components/users/User";
import UserDetails from "./components/users/UserDetails";

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: "history", // http://localhost:8080/#/user => http://localhost:8080/user
  routes: [
    {path: '/', name: 'homePage', component: Home},
    {path: '/users', name: 'users', component: Users},
    {path: '/users/:id', name: 'userDetails', component: UserDetails}
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
