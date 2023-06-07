import { createRouter, createWebHistory } from 'vue-router'
import NewCommunity from "@/components/pages/new-community.vue";
import Suscription from "@/components/views/suscription.component.vue";
import NewActivity from "@/components/pages/new-activity.vue";
import LoginComponent from "@/components/pages/login.component.vue";
import SignupComponent from "@/components/pages/signup.component.vue";
import NotFoundComponent from "@/components/views/not-found.component.vue";
import HomeComponent from "@/components/views/home.component.vue";

const routes = [
    { path: '/', redirect: "/login" },
    { path: '/home', component: HomeComponent },
    { path: '/login', component: LoginComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/new-activity', component: NewActivity},
    { path: '/new-community', component: NewCommunity },
    { path: '/suscription', component: Suscription },
    { path: '/:catchAll(.*)', component: NotFoundComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
