import { createStore } from "vuex";
import { apiUserRegister, apiUserCheck } from "./api/users"

const initUser = () => {
    const storedUser = localStorage.getItem("user")
    if(!storedUser){
        return null
    }

    return JSON.parse(storedUser)
}

export default createStore({
    state: {
        user: initUser(),
    },
    mutations: {
        setUser: (state, user) => {
            state.user = user
        }
    },
    actions: {

    }
})