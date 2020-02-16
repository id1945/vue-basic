// Vuejs
import Vue from 'vue'
import VueRouter from 'vue-router'
// Project
import Home from "../components/Home";
import Login from "../components/login";
import Admin from "../components/admin";
import Users from "../components/users/User";
import UserInfo from "../components/users/UserInfo";
import Error from "../components/error";
import authGuard from '../guard/authGuard';
// Use
Vue.use(VueRouter)

const router = new VueRouter({
    // mode: "history", // http://localhost:8080/#/user => http://localhost:8080/user
    routes: [{
            path: '/',
            name: 'homePage',
            component: Home,
            meta: { // https://router.vuejs.org/guide/advanced/meta.html
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

router.beforeEach(authGuard)

// Không có next: không thể ảnh hưởng đến điều hướng
router.afterEach((to, from) => {
    console.log('// Start afterEach');
    console.log(to, from);
    console.log('// End afterEach');
})

export default router;