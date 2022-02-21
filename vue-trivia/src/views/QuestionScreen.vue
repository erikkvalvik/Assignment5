<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import QuestionListVue from "../components/QuestionList.vue";

const store = useStore()
const user = computed(() => store.state.user)
const questions = computed(() => store.state.questions)
onMounted( async () =>{
    await store.dispatch("fetchQuestions")
})
console.log(questions.value)
const qArr = [questions.value]
console.log(qArr)

</script>

<template>
    <h1>questions</h1>
    <p>{{user.username}}</p>
    <p>{{user.highScore}}</p>
    <!-- <QuestionList /> -->
</template>