[Demo](https://id1945.github.io/vue-basic/60.vue-router-children/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 60.vue-router-children
npm i vue-router --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/60.vue-router-children
npm install
npm run serve
```

## [3] Summary
````javascript
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

````
```html
<router-link tag="a" :to="{path:'/users/1', query:{msg:'Hi!'}}" class="mr-2">User 1</router-link>|
<router-link tag="a" :to="{path:'/users/2', query:{msg:'How are you?'}}" class="ml-2 mr-2">User 2</router-link>|
<router-link tag="a" :to="{path:'/users/3', query:{msg:'I`m good. Nice to meet you!'}}" class="ml-2">User 3</router-link>
```