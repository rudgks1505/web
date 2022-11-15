import { createRouter, createWebHistory } from "vue-router";
import home from "../src/components/home/home.vue";
import hometest from "../src/components/home/hometest.vue";

const routes = [
    {
        path: '/',
        component: home,
        name: "home"
    },
    {
        path: '/hometest',
        component: hometest,
        name: "hometest"
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 