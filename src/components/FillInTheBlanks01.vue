<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนเติมประโยคให้ถูกต้อง
    </h1>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-full h-auto max-w-[600px] flex flex-col gap-[12px] lg:gap-[24px]">
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black"
            >
              1
            </div>
            <img :src="image87" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div
              class="rounded-full px-4 pt-2 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[150px] lg:max-w-[250px]"
            >
              <InputTextSound
                @updateName="handleInputChange1"
                typeInput="text"
              />
            </div>
            <img :src="image88" alt="" class="max-w-[70px] lg:max-w-[120px]" />
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black"
            >
              2
            </div>
            <img :src="image89" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div
              class="rounded-full px-4 pt-2 pb-1 bg-[#FBFCD2] overflow-hidden  max-w-[150px] lg:max-w-[250px]"
            >
              <InputTextSound
                @updateName="handleInputChange2"
                typeInput="text"
              />
            </div>
            <img :src="image90" alt="" class="max-w-[70px] lg:max-w-[120px]" />
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full mr-10 bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] flex justify-center items-center leading-none text-black"
            >
              3
            </div>
            <img :src="image91" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div
              class="rounded-full px-4 pt-2 pb-1 bg-[#FBFCD2] overflow-hidden  max-w-[150px] lg:max-w-[250px]"
            >
              <InputTextSound
                @updateName="handleInputChange3"
                typeInput="text"
              />
            </div>
            <img :src="image92" alt="" class="max-w-[70px] lg:max-w-[120px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import image87 from "../assets/images/87.png";
import image88 from "../assets/images/88.png";
import image89 from "../assets/images/89.png";
import image90 from "../assets/images/90.png";
import image91 from "../assets/images/91.png";
import image92 from "../assets/images/92.png";

import InputTextSound from "./InputTextSound.vue";

import { useQuizValueStore } from "@/stores/quizValueStroe";
const useQuizValue = useQuizValueStore();
import { ref } from "vue";
// valueString
const handleInputChange1 = (value) => {
  let newValue = {
    id: 1,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};
const handleInputChange2 = (value) => {
  let newValue = {
    id: 2,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};

const handleInputChange3 = (value) => {
  let newValue = {
    id: 3,
    value: value,
  };
  useQuizValue.setQuizValue(newValue);
};

</script>
  
  <style lang="scss" scoped>
</style>