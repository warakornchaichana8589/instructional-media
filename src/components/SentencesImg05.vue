<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนแต่งประโยคจากภาพ
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
            <img :src="image97" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div class="flex gap-3">
              <div>
                <p>ใคร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <InputTextSound
                    @updateName="handleInputChangeWho01"
                    typeInput="text"
                  />
                </div>
              </div>
              <div>
                <p>ทำอะไร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <InputTextSound
                    @updateName="handleInputChangeWhat01"
                    typeInput="text"
                  />
                </div>
              </div>
              <div>
                <p>ประโยค</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <InputTextSound
                    @updateName="handleInputChangeSentence01"
                    typeInput="text"
                    customClass="w-full"
                  />
                </div>
              </div>
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
            <img :src="image98" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div class="flex gap-3">
              <div>
                <p>ใคร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <InputTextSound
                    @updateName="handleInputChangeWho02"
                    typeInput="text"
                    customClass="w-full"
                  />
                </div>
              </div>
              <div>
                <p>ทำอะไร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <InputTextSound
                    @updateName="handleInputChangeWhat02"
                    typeInput="text"
                    customClass="w-full"
                  />
                </div>
              </div>
              <div>
                <p>ประโยค</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <InputTextSound
                    @updateName="handleInputChangeSentence02"
                    typeInput="text"
                  />
                </div>
              </div>
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
            <img :src="image99" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div class="flex gap-3">
              <div>
                <p>ใคร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <InputTextSound
                    @updateName="handleInputChangeWho03"
                    typeInput="text"
                  />
                </div>
              </div>
              <div>
                <p>ทำอะไร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <InputTextSound
                    @updateName="handleInputChangeWhat03"
                    typeInput="text"
                  />
                </div>
              </div>
              <div>
                <p>ประโยค</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <InputTextSound
                    @updateName="handleInputChangeSentence03"
                    typeInput="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script setup>
import image97 from "../assets/images/97.png";
import image98 from "../assets/images/98.png";
import image99 from "../assets/images/99.png";

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