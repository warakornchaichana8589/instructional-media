<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนแต่งประโยคจากคำที่กำหนด
    </h1>
    <div class="w-full h-full flex justify-center items-center">
      <div
        class="w-full h-auto max-w-[600px] flex flex-col gap-[12px] lg:gap-[24px]"
      >
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black"
            >
              1
            </div>
            <div class="flex relative pr-[25px] lg:pr-[0px]">
              <img
                :src="image82"
                alt=""
                class="max-w-[70px] lg:max-w-[120px]"
              />
              <div
                class="bg-[#FFED00] text-[16px] lg:text-[20px] w-[50px] h-[50px] right-[0px] -top-[10px] absolute rounded-full flex justify-center items-center"
              >
                เก้าอี้
              </div>
            </div>

            <div
              class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden w-full max-w-[300px] lg:max-w-[400px]"
            >
              <InputTextSound
                @updateName="fromWordsValue01"
                typeInput="text"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black"
            >
              2
            </div>
            <div class="flex relative pr-[25px] lg:pr-[0px]">
              <img
                :src="image100"
                alt=""
                class="max-w-[70px] lg:max-w-[120px]"
              />
              <div
                class="bg-[#FFED00] text-[16px] lg:text-[20px] w-[50px] h-[50px] right-[0px] -top-[10px] absolute rounded-full flex justify-center items-center"
              >
                เงิน
              </div>
            </div>

            <div
              class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden w-full max-w-[300px] lg:max-w-[400px]"
            >
              <InputTextSound
                @updateName="fromWordsValue02"
                typeInput="text"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black"
            >
              3
            </div>
            <div class="flex relative pr-[25px] lg:pr-[0px]">
              <img
                :src="image101"
                alt=""
                class="max-w-[70px] lg:max-w-[120px]"
              />
              <div
                class="bg-[#FFED00] text-[16px] lg:text-[20px] w-[50px] h-[50px] right-[0px] -top-[10px] absolute rounded-full flex justify-center items-center"
              >
                งู
              </div>
            </div>
            <div
              class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden w-full max-w-[300px] lg:max-w-[400px]"
            >
              <InputTextSound
                @updateName="fromWordsValue03"
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
import image82 from "../assets/images/82.png";
import image100 from "../assets/images/100.png";
import image101 from "../assets/images/101.png";

import InputTextSound from "./InputTextSound.vue";

import { useQuizValueStore } from "@/stores/quizValueStroe";
const useQuizValue = useQuizValueStore();
import { ref } from "vue";
// valueString
const fromWordsValue01 = (value) => {
  let newValue = {
    id: 1,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};
const fromWordsValue02 = (value) => {
  let newValue = {
    id: 2,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};

const fromWordsValue03 = (value) => {
  let newValue = {
    id: 3,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};
const handleInputChange4 = (value) => {
  let newValue = {
    id: 4,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};
</script>
    
    <style lang="scss" scoped>
</style>