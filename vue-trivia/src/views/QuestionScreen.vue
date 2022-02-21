<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import QuestionListVue from "../components/QuestionList.vue";
import QuestionListItemVue from "../components/QuestionListItem.vue";

const store = useStore()
const user = computed(() => store.state.user)
const questions = computed(() => store.state.questions)
onMounted( async () =>{
    await store.dispatch("fetchQuestions")
})
console.log(questions.value[1].category)


</script>

<template>
    <h1>questions</h1>
    <p>{{user.username}}</p>
    <p>{{user.highScore}}</p>
    <ul class="bg-slate-400 text-white font-semibold block p-5 pt-10 pb-10">
        <div v-for="question in questions" :key="question.question">
            <p class="m-2" >{{question.question}}</p>
            <label for="correct">{{question.correct_answer}}</label>
            <input type="checkbox" name="correct">
            <label for="incorrect">{{question.incorrect_answers[0]}}</label>
            <input type="checkbox" name="incorrect" >
        </div>
    </ul>
    <!-- <QuestionList /> -->
    <!-- <QuestionListItem v-for="question in questions" :key="question.question" :question="question" /> -->
</template>