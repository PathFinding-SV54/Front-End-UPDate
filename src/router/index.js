import { createRouter, createWebHistory } from 'vue-router'
import LogIn from "@/views/LogIn.vue";
import NewCommunity from "@/components/new-community.vue";
import Suscription from "@/components/suscription.component.vue";

const routes = [
    { path: '/', redirect: "/login" },
    { path: '/login', component: LogIn },
    { path: '/new-community', component: NewCommunity },
    { path: '/suscription', component: Suscription },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
