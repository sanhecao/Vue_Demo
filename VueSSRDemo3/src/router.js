import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default function createRouter() {
    let router = new VueRouter({
        mode: 'history',
        routes: [
            {
                alias: '/',
                path: '/home',
                component: require('./views/home.vue')
            },
            {
                path: '/like',
                component: require('./views/like.vue')
            },
            {
                path: '/about',
                component: require('./views/about.vue')
            }

        ]
    });
    return router;
}
