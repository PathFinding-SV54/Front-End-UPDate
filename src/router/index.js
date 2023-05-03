import { createRouter, createWebHistory } from 'vue-router'
import LogIn from "@/views/LogIn.vue";

const routes = [
    { path: '/', redirect: "/login" },
    { path: '/login', component: LogIn },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
