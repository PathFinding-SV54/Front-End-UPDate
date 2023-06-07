import { createRouter, createWebHistory } from 'vue-router'
import NewCommunity from "@/components/new-community.vue";
import Suscription from "@/components/suscription.component.vue";
import NewActivity from "@/components/new-activity.vue";
import LoginComponent from "@/components/views/pages/login.component.vue";
import SignupComponent from "@/components/views/pages/signup.component.vue";

const routes = [
    { path: '/', redirect: "/login" },
    { path: '/login', component: LoginComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/new-activity', component: NewActivity},
    { path: '/new-community', component: NewCommunity },
    { path: '/suscription', component: Suscription },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
