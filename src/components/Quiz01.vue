<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      คำชี้แจง : ฝึกแต่งประโยคต่อไปนี้ให้ได้ใจความที่สมบรูรณ์
    </h1>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-full h-auto grid grid-cols-2 gap-0 lg:gap-10 max-w-[600px] ">
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center lg:justify-start items-center w-full">
          <div class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black">
            1
          </div>
          <img :src="image01" alt="" class="max-w-[50px] lg:max-w-[100px] " />
        </div>
       
        <InputTextSound @updateName="handleInputChange1" typeInput="text" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center lg:justify-start items-center w-full">
          <div class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black">
            2
          </div>
          <img :src="image02" alt="" class="max-w-[50px] lg:max-w-[100px] " />
        </div>
        
        <InputTextSound @updateName="handleInputChange2" typeInput="text" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center lg:justify-start items-center w-full">
          <div class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black">
            3
          </div>
          <img :src="image03" alt="" class="max-w-[50px] lg:max-w-[100px] " />
        </div>
        <InputTextSound @updateName="handleInputChange3" typeInput="text" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center lg:justify-start items-center w-full" >
          <div class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black">
            4
          </div>
         
            <img :src="image04" alt="" class="max-w-[50px] lg:max-w-[100px] " />
 
         
        </div>
        <InputTextSound @updateName="handleInputChange4" typeInput="text" />
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
import image08 from "../assets/images/q08.png";
import InputTextSound from "./InputTextSound.vue";

import { useQuizValueStore } from '@/stores/quizValueStroe'
const useQuizValue = useQuizValueStore();
import { ref } from 'vue';
// valueString
const handleInputChange1 = (value) =>{
  let newValue = {
    id: 1,
    value:value
  }
  useQuizValue.setQuizValue(newValue)
}
const handleInputChange2 = (value) =>{
  let newValue = {
    id: 2,
    value:value
  }
  useQuizValue.setQuizValue(newValue)
}

const handleInputChange3 = (value) =>{
  let newValue = {
    id: 3,
    value:value
  }
  useQuizValue.setQuizValue(newValue)
}
const handleInputChange4 = (value) =>{
  let newValue = {
    id: 4,
    value:value
  }
  useQuizValue.setQuizValue(newValue)
}


</script>

<style lang="scss" scoped>
</style>