<template>
  <div
    :style="{ backgroundImage: `url(${imageBg})`, backgroundSize: 'contain' }"
    class="flex flex-col justify-start items-center w-full h-full"
  >
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนเขียนคำจากภาพที่กำหนดให้แล้วนำไปแต่งประโยค
    </h1>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-[900px] max-w-[90%] grid grid-cols-3 lg:grid-cols-2 gap-1 lg:gap-3">
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image58" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="valueQuiz.valueQuiz01"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ 1. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none "
                v-model="valueAnswer.valueAnswer01"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image59" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="valueQuiz.valueQuiz02"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ 2. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none "
                v-model="valueAnswer.valueAnswer02"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image60" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="valueQuiz.valueQuiz03"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ 3. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none "
                v-model="valueAnswer.valueAnswer03"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image61" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="valueQuiz.valueQuiz04"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ 4. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none "
                v-model="valueAnswer.valueAnswer04"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image62" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="valueQuiz.valueQuiz05"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ 5. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none "
                v-model="valueAnswer.valueAnswer05"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image63" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="valueQuiz.valueQuiz06"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ 6. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none "
                v-model="valueAnswer.valueAnswer06"
              />
            </div>
          </div>
        </div>
      </div>
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
import { ref, watch } from "vue";
import InputTextSound from "./InputTextSound.vue";
const imageBg = new URL(`../assets/images/bg-l.png`, import.meta.url).href;

const valueQuiz = ref({
  valueQuiz01: "",
  valueQuiz02: "",
  valueQuiz03: "",
  valueQuiz04: "",
  valueQuiz05: "",
  valueQuiz06: "",
});
const valueAnswer = ref({
  valueAnswer01: "",
  valueAnswer02: "",
  valueAnswer03: "",
  valueAnswer04: "",
  valueAnswer05: "",
  valueAnswer06: "",
});
</script>

<style  scoped>
</style>