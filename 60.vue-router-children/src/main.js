import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from "./components/Home";
import Users from "./components/users/User";
import UserInfo from "./components/users/UserInfo";

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: "history", // http://localhost:8080/#/user => http://localhost:8080/user
  routes: [
    {path: '/', name: 'homePage', component: Home},
    {path: '/users', component: Users, children: [
        //UserInfo component is rendered when /user/:uid is matched
        { path: ':uid', component: UserInfo, props: true }
      ]
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
