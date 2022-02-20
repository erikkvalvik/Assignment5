import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import QuestionScreen from "./views/QuestionScreen.vue"

const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/questions",
        component: QuestionScreen
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})