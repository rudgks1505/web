import { createRouter, createWebHistory } from "vue-router";
import home from "../src/components/home/home.vue";
import hometest from "../src/components/home/hometest.vue";
import aaa from "../src/components/home/aaa.vue";
import bbb from "../src/components/home/bbb.vue";
import scroll from "../src/components/home/scroll.vue";
import scroll1 from "../src/components/home/scroll1.vue";
import scroll2 from "../src/components/home/scroll2.vue";

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
    {
        path: '/scroll1',
        component: scroll1,
        name: "scroll1"
    },
    {
        path: '/scroll2',
        component: scroll2,
        name: "scroll2"
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 