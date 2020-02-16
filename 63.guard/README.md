[Demo](https://id1945.github.io/vue-basic/63.guard/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 63.guard
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/63.guard
npm install
npm run serve
```

````javascript
const router = new VueRouter({
    mode: "history", // http://localhost:8080/#/user => http://localhost:8080/user
    routes: [{
            path: '/',
            name: 'homePage',
            component: Home,
            meta: {
                requiresAuth: true
            },
        },
        {
            path: '/login',
            name: 'loginPage',
            component: Login,
            meta: {
                requiresAuth: false
            },
            // beforeEnter: (to, from, next) => {
            //     // Guard cho từng route
            // }
        },
        {
            path: '/admin',
            name: 'adminPage',
            component: Admin,
            meta: {
                requiresAuth: true,
                roles: ['ADMIN']
            },
            // beforeEnter: (to, from, next) => {
            //     // Guard cho từng route
            // }
        },
        {
            path: '/users',
            name: 'userPage',
            component: Users,
            meta: {
                requiresAuth: true,
                roles: ['USER']
            },
            // beforeEnter: (to, from, next) => {
            //     // Guard cho từng route
            // },
            children: [
                {
                    path: ':uid',
                    component: UserInfo,
                    props: true
                }
            ]
        },
        {
            path: '/error/404',
            name: 'errorPage',
            component: Error,
            meta: {
                requiresAuth: false
            },
        },
        {
            path: '*',
            redirect: { name: 'errorPage' },
            meta: {
                requiresAuth: false
            },
        }
    ]

})
````

````javascript
// Guard global
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // authenticated: check TOKEN
        if (!store.state.authenticated) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            // permission: check roles
            const roles = store.state.roles;
            const permissionRoles = to.meta.roles;

            const hasPermission = roles.some(role => {
                return permissionRoles ? permissionRoles.includes(role) : true;
            })
          
            if (hasPermission) {
                return next();
            } else {
                return next({ name: 'errorPage' });
            }
        }
    } else {
        return next();
    }
})
````