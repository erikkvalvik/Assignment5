<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";


const store = useStore()
const user = computed(() => store.state.user)

</script>
<template>
    <h1>Results</h1>
    <p>{{user.username}}</p>
    <p>{{user.highScore}}</p>
</template>