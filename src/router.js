import { createRouter, createWebHistory } from "vue-router";
import home from "../src/components/home/home.vue";
import hometest from "../src/components/home/hometest.vue";
import aaa from "../src/components/home/aaa.vue";
import bbb from "../src/components/home/bbb.vue";

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
    {
        path: '/aaa',
        component: aaa,
        name: "aaa"
    },
    {
        path: '/bbb',
        component: bbb,
        name: "bbb"
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 