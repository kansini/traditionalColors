import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
