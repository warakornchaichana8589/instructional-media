<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนแต่งประโยคจากภาพ
    </h1>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-full h-auto max-w-[600px] flex flex-col gap-[12px] lg:gap-[24px]">
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black"
            >
              ๑
            </div>
            <img :src="image93" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div
              class="rounded-full px-4 pt-2 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[150px] lg:max-w-[250px]"
            >
              <InputTextSound
                @updateName="handleInputChange1"
                typeInput="text"
              />
            </div>
           
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black"
            >
              ๒
            </div>
            <img :src="image94" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div
              class="rounded-full px-4 pt-2 pb-1 bg-[#FBFCD2] overflow-hidden  max-w-[150px] lg:max-w-[250px]"
            >
              <InputTextSound
                @updateName="handleInputChange2"
                typeInput="text"
              />
            </div>
           
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black"
            >
              ๓
            </div>
            <img :src="image95" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div
              class="rounded-full px-4 pt-2 pb-1 bg-[#FBFCD2] overflow-hidden  max-w-[150px] lg:max-w-[250px]"
            >
              <InputTextSound
                @updateName="handleInputChange3"
                typeInput="text"
              />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import image93 from "../assets/images/93.png";
import image94 from "../assets/images/94.png";
import image95 from "../assets/images/95.png";


import InputTextSound from "./InputTextSound.vue";

import { useQuizValueStore } from "@/stores/quizValueStroe";
const useQuizValue = useQuizValueStore();
import { ref } from "vue";
// valueString
const handleInputChange1 = (value) => {
  let newValue = {
    id: 21,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};
const handleInputChange2 = (value) => {
  let newValue = {
    id: 22,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};

const handleInputChange3 = (value) => {
  let newValue = {
    id: 23,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};

</script>
  
  <style lang="scss" scoped>
</style>