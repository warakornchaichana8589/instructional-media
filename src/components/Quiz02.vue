<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      คำชี้แจง : แต่งประโยคจากรูปภาพต่อไปนี้ให้ได้ใจความที่สมบูรณ์
    </h1>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-full h-auto grid grid-cols-2 gap-0 lg:gap-10 max-w-[600px] ">
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center lg:justify-start items-center w-full">
          <div class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black">
            ๕
          </div>
          <img :src="image05" alt="" class="max-w-[50px] lg:max-w-[100px]" />
        </div>
        <InputTextSound @updateName="handleInputChange5" typeInput="text" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center lg:justify-start items-center w-full">
          <div class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black">
            ๖
          </div>
          <img :src="image06" alt="" class="max-w-[50px] lg:max-w-[100px]" />
        </div>
        <InputTextSound @updateName="handleInputChange6" typeInput="text" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center lg:justify-start items-center w-full">
          <div class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black">
            ๗
          </div>
          <img :src="image07" alt="" class="max-w-[50px] lg:max-w-[100px]" />
        </div>
        <InputTextSound @updateName="handleInputChange7" typeInput="text" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center lg:justify-start items-center w-full">
          <div class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black">
            ๘
          </div>
          <img :src="image08" alt="" class="max-w-[50px] lg:max-w-[100px]" />
        </div>
        <InputTextSound @updateName="handleInputChange8" typeInput="text" />
      </div>
    </div>
    </div>
  
  </div>
</template>

<script setup>
import image01 from "../assets/images/q01.png";
import image02 from "../assets/images/q02.png";
import image03 from "../assets/images/q03.png";
import image04 from "../assets/images/q04.png";
import image05 from "../assets/images/q05.png";
import image06 from "../assets/images/q06.png";
import image07 from "../assets/images/q07.png";
import image08 from "../assets/images/70.png";
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

<style lang="scss" scoped>
</style>