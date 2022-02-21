<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import QuestionListItem from "./QuestionListItem.vue";

const store = useStore()
const questions = computed(() => store.state.questions)



</script>

<template>
    <ul>
        <!-- <QuestionListItem v-for="question in questions" :key="question.question" :question="question" /> -->
        <p v-for="question in questions" :key="question.question">{{question.question}}</p>
    </ul>
</template>