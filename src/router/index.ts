import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import PuterApi from "../views/puterApi.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/puter',
        name: 'puter',
        component: PuterApi
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
