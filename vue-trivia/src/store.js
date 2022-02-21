import { createStore } from "vuex";
import { apiUserRegister, apiUserCheck } from "./api/users"
import {apiFetchQuestions} from "./api/questions"

const initUser = () => {
    const storedUser = localStorage.getItem("user")
    if(!storedUser){
        return null
    }

    return JSON.parse(storedUser)
}
const initQuestions = () => {
    const storedQuestions = localStorage.getItem("questions")
    if(!storedQuestions){
        return null
    }
    return JSON.parse(storedQuestions)
}

export default createStore({
    state: {
        user: initUser(),
        questions: initQuestions()
    },
    mutations: {
        setUser: (state, user) => {
            state.user = user
        },
        setQuestions: (state, questions) => {
            state.questions = questions
        }
    },
    actions: {
        async fetchQuestions({ commit }){
            //API request
            const [ questions ] = await apiFetchQuestions()

            commit("setQuestions", questions)
            return null
            //set the state
            
        }
    }
})