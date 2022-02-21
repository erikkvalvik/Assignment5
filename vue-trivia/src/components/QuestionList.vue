<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import QuestionListItem from "./QuestionListItem.vue";

const store = useStore()
const questions = computed(() => store.state.questions)
console.log(questions)

</script>

<template>
    <ul>
        <!-- <QuestionListItem v-for="question in questions" :key="question.question" /> -->
    </ul>
</template>