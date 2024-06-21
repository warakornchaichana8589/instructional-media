<template> 
  <div class="flex flex-col justify-center items-center">
    <h1>ทดสอบ ตรวจสอบประโยค</h1>
    <input type="text" v-model="input" @input="update" class="input border-1">
    <button @click="check">Send</button>
    <button @click="atothai"></button>
   <h2>result : {{ validateSentence.result }}</h2>
input : {{ input }}

<p>{{ arabicToThaiNumber(Number(input)) }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { validateSentenceStore } from "@/stores/validateSentence";
const validateSentence = validateSentenceStore();
const input = ref('');
const result = ref('');

const update = () =>{
  validateSentence.sentence = input.value;
}
const check = () => {
  validateSentence.checkSentence(input.value);
}
function arabicToThaiNumber(num) {
  if(num === undefined){
        return 0;
      }
      const thaiNumbers = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
      return num.toString().split('').map(digit => thaiNumbers[digit]).join('');
    }
</script>

<style lang="scss" scoped>
</style>