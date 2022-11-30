import { createRouter, createWebHistory } from "vue-router";
import scroll2 from "../src/components/home/scroll2.vue";
import scrolltest from "../src/components/test/scrolltest.vue";
import slide from "./components/slide/slide.vue";
import slide_bottom from "./components/slide/slide_bottom.vue";
import slide1 from "./components/intro_component/slide1.vue";
import intro4 from "../src/components/intro_component/intro4.vue";
import portfo from "../src/components/portfo/portfo.vue";
import qest from "../src/components/qest/qest.vue";
import hire from "../src/components/hire/hire.vue";
import vision from "./components/home/vision.vue";
import gameinsservice from "./components/home/gameinsservice.vue";
import introvideo from "./components/home/introvideo.vue";
import ment from "./components/home/ment.vue";
import pop from "./components/portfo/pop.vue";
import circle from "./components/test/circle.vue";
import test from "./components/intro_component/test.vue";
import story from "./components/story/story.vue";
import storyintro from "./components/story/storyintro.vue";
import ceo from "./components/story/ceo.vue";


const routes = [

    {
        path: '/',
        component: scroll2,
        name: "scroll2"
    },
    {
        path: '/scrolltest',
        component: scrolltest,
        name: "scrolltest"
    },
    {
        path: '/slide',
        component: slide,
        name: "slide"
    },
    {
        path: '/slide_bottom',
        component: slide_bottom,
        name: "slide_bottom"
    },
    {
        path: '/slide1',
        component: slide1,
        name: "slide1"
    },
    {
        path: '/intro4',
        component: intro4,
        name: "intro4"
    },
    {
        path: '/ceo',
        component: ceo,
        name: "ceo"
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
    {
        path: '/test',
        component: test,
        name: "test"
    },
    {
        path: '/story',
        component: story,
        name: "story"
    },
    {
        path: '/storyintro',
        component: storyintro,
        name: "storyintro"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 