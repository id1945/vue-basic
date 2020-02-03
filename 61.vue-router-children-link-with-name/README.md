[Demo](https://id1945.github.io/vue-basic/61.vue-router-children-link-with-name/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 61.vue-router-children-link-with-name
npm i vue-router --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/61.vue-router-children-link-with-name
npm install
npm run serve
```

````javascript
const router = new VueRouter({
  // mode: "history", // http://localhost:8080/#/user => http://localhost:8080/user
  routes: [
    {path: '/', name: 'homePage', component: Home},
    {path: '/users', component: Users, children: [
        //UserInfo component is rendered when /user/:uid is matched
        { path: ':uid', name: 'detail', component: UserInfo, props: true }
      ]
    }
  ]
})

````
```html
<router-link tag="a" :to="{path:'/users/1', query:{msg:'Hi!'}}" class="mr-2">User 1</router-link>|
<router-link tag="a" :to="{path:'/users/2', query:{msg:'How are you?'}}" class="ml-2 mr-2">User 2</router-link>|
<router-link tag="a" :to="{name:'detail', params: {uid: 3}, query:{msg:'I`m good. Nice to meet you!'}}" class="ml-2">User 3</router-link>
```