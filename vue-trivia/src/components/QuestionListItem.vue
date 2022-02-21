<script setup>
defineProps({
    question: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <li>
        <span>{{question.question}}</span>
        <p>{{question.correct_answer}}</p>
    </li>
</template>