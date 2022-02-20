import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import Login from "./views/Login.vue";
import QuestionScreen from "./views/QuestionScreen.vue"


const authGuard = (to, from, next) => {
    if (!store.state.user){
        next("/")
    }else{
        next()
    }
}

const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/questions",
        component: QuestionScreen,
        beforeEnter: authGuard
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})