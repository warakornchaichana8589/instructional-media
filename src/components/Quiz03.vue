<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนเขียนคำจากภาพที่กำหนดให้แล้วนำไปแต่งประโยค
    </h1>
    <div class="w-full h-full flex justify-center items-center">
        
    </div>
  </div>
</template>

<script setup>
import image58 from "../assets/images/58.png";
import image59 from "../assets/images/59.png";
import image60 from "../assets/images/60.png";
import image61 from "../assets/images/61.png";
import image62 from "../assets/images/62.png";
import image63 from "../assets/images/63.png";
import image64 from "../assets/images/64.png";
import image65 from "../assets/images/65.png";
import image66 from "../assets/images/66.png";
import image67 from "../assets/images/67.png";
import InputTextSound from "./InputTextSound.vue";


import { useQuizValueStore } from '@/stores/quizValueStroe'
const useQuizValue = useQuizValueStore();
import { ref } from 'vue';

const handleInputChange5 = (value) =>{
  let newValue = {
    id: 5,
    value:value
  }
  useQuizValue.setQuizValue(newValue)
}
const handleInputChange6 = (value) =>{
  let newValue = {
    id: 6,
    value:value
  }
  useQuizValue.setQuizValue(newValue)
}

const handleInputChange7 = (value) =>{
  let newValue = {
    id: 7,
    value:value
  }
  useQuizValue.setQuizValue(newValue)
}
const handleInputChange8 = (value) =>{
  let newValue = {
    id: 8,
    value:value
  }
  useQuizValue.setQuizValue(newValue)
}


</script>

<style  scoped>
</style>