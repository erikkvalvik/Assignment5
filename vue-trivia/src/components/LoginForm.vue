<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { apiUserRegister, apiUserCheck } from "../api/users";

const store = useStore()
const emit = defineEmits(["onAuthSuccess"])


const username = ref("");
const displayError = ref("");

const onSuccess = user => {
    store.commit("setUser", user[0])
    emit("onAuthSuccess")
    localStorage.setItem("user", JSON.stringify(user[0]))
}

const onSubmit = async () => {
  const test = await apiUserCheck(username.value);
  console.log(test[1].length);
  if (test[1].length === 0) {
    const [error, user] = await apiUserRegister(username.value);
    console.log("great success: ")
    console.log("err", error);
    displayError.value = "";
    onSuccess(user)
    console.log(user)
  
  } else {
    console.log("already exists");
    onSuccess(test[1])
    console.log(test[1])
  }
  
  
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <fieldset class="mb-3">
      <label for="username" aria-label="Username" class="block">Username</label>
      <input
        type="text"
        id="username"
        class="border border-slate-300"
        v-model="username"
        placeholder="Enter your name here.."
      />
    </fieldset>
    <button type="submit" class="bg-emerald-400 text-white p-2 rounded">
      Play Now
    </button>
  </form>

  <div v-if="displayError" class="bg-red-500 text-white p-3">
    <span class="text-lg block mb-3">Error</span>
    <p>{{ displayError }}</p>
  </div>
</template>