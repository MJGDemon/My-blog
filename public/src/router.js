import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default function createRouter() {
    let router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path:'/login',
                component:require('./routers/login.vue')
            },
            {
                path: '/admin',
                component: require('./routers/admin.vue'),
                children:[
                    {
                        path:'',
                        component:require('./components/admin/body/content.vue')
                    },
                    {
                        path: '/about',
                        component: require('./routers/about.vue')
                    },
                ]
            },

            {
                path: '/404',
                component: require('./routers/NotFound.vue')
            },
            {
                alias: '/',
                path: '/home',
                component: require('./routers/home.vue'),
                children:[
                    {
                        path:'',
                        component:require('./components/user/body/content.vue'),
                    },
                    {
                        path: '/about',
                        component: require('./routers/about.vue')
                    },
                    {
                        path:':title',
                        component:require('./components/user/body/postContent.vue'),
                    }
                ]
            },
            
        ]
    })

    return router
}