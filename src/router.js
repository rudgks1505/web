import { createRouter, createWebHistory } from "vue-router";
import scroll2 from "../src/components/home/scroll2.vue";
import intro1 from "../src/components/intro_component/intro1.vue";
import intro2 from "../src/components/intro_component/intro2.vue";
import intro3 from "../src/components/intro_component/intro3.vue";
import intro4 from "../src/components/intro_component/intro4.vue";
import intro5 from "../src/components/intro_component/intro5.vue";
import portfo from "../src/components/portfo/portfo.vue";
import qest from "../src/components/qest/qest.vue";
import hire from "../src/components/hire/hire.vue";
import vision from "./components/home/vision.vue";
import gameinsservice from "./components/home/gameinsservice.vue";
import introvideo from "./components/home/introvideo.vue";
import ment from "./components/home/ment.vue";
import pop from "./components/portfo/pop.vue";
import circle from "./components/test/circle.vue";



const routes = [

    {
        path: '/',
        component: scroll2,
        name: "scroll2"
    },
    {
        path: '/intro1',
        component: intro1,
        name: "intro1"
    },
    {
        path: '/intro2',
        component: intro2,
        name: "intro2"
    },
    {
        path: '/intro3',
        component: intro3,
        name: "intro3"
    },
    {
        path: '/intro4',
        component: intro4,
        name: "intro4"
    },
    {
        path: '/intro5',
        component: intro5,
        name: "intro5"
    },
    {
        path: '/portfo',
        component: portfo,
        name: "portfo"
    },
    {
        path: '/qest',
        component: qest,
        name: "qest"
    },
    {
        path: '/hire',
        component: hire,
        name: "hire"
    },
    {
        path: '/vision',
        component: vision,
        name: "vision"
    },
    {
        path: '/gameinsservice',
        component: gameinsservice,
        name: "gameinsservice"
    },
    {
        path: '/introvideo',
        component: introvideo,
        name: "introvideo"
    },
    {
        path: '/ment',
        component: ment,
        name: "ment"
    },
    {
        path: '/pop',
        component: pop,
        name: "pop"
    },
    {
        path: '/circle',
        component: circle,
        name: "circle"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 