<template> 
  <div class="flex flex-col justify-center items-center">
    <h1>ทดสอบ ตรวจสอบประโยค</h1>
    <input type="text" v-model="input" @input="update" class="input border-1">
    <button @click="validateSentence.checkSentence">Send</button>
   <h2>result : {{ validateSentence.result }}</h2>
input : {{ input }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import { validateSentenceStore } from "@/stores/validateSentence";
const validateSentence = validateSentenceStore();
const input = ref('');
const update = () =>{
  validateSentence.sentence = input.value;
}


</script>

<style lang="scss" scoped>
</style>