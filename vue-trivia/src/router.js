import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import Login from "./views/Login.vue";
import QuestionScreen from "./views/QuestionScreen.vue"
import ResultScreen from "./views/ResultScreen.vue"

const authGuard = (to, from, next) => {
    if (!store.state.user){
        next("/")
    }else{
        next()
    }
}

const loginGuard = (_to, _from, next) => {
    if(store.state.user){
        next("/questions")
    }else{
        next()
    }
}

const routes = [
    {
        path: "/",
        component: Login,
        beforeEnter: loginGuard
    },
    {
        path: "/questions",
        component: QuestionScreen,
        beforeEnter: authGuard
    },
    {
        path: "/results",
        component: ResultScreen,
        beforeEnter: authGuard
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})