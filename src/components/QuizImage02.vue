<template>
  <div
    :style="{ backgroundImage: `url(${imageBg})`, backgroundSize: 'contain' }"
    class="flex flex-col justify-start items-center w-full h-full"
  >
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนเขียนคำจากภาพที่กำหนดให้แล้วนำไปแต่งประโยค (ต่อ)
    </h1>
    <div class="w-full h-full flex justify-center items-center">
      <div
        class="w-[900px] max-w-[90%] grid grid-cols-3 lg:grid-cols-2 gap-1 lg:gap-3"
      >
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image64" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="useCheck.QuestionFromImage01Part02.Quiz01.word"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ ๕. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none"
                v-model="useCheck.QuestionFromImage01Part02.Quiz01.sentence"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image65" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="useCheck.QuestionFromImage01Part02.Quiz02.word"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ ๖. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none"
                v-model="useCheck.QuestionFromImage01Part02.Quiz02.sentence"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image66" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="useCheck.QuestionFromImage01Part02.Quiz03.word"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ ๗. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none"
                v-model="useCheck.QuestionFromImage01Part02.Quiz03.sentence"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full px-3 py-1 border-2 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 items-end gap-2 justify-between"
        >
          <div class="flex flex-row lg:flex-col justify-center items-center">
            <img :src="image67" alt="" class="w-[50px] lg:w-[100px]" />
            <div class="bg-[#FBFCD2] py-2 px-5 rounded-full">
              <input
                type="text"
                v-model="useCheck.QuestionFromImage01Part02.Quiz04.word"
                class="bg-transparent border-black border-dotted border-b-2 outline-none w-[50px] lg:w-[70px] text-center"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center col-span-2">
            <div class="flex items-end gap-2">
              <label class="text-nowrap">ข้อ ๘. </label
              ><input
                type="text"
                class="imput bg-transparent border-dotted border-b-4 outline-none"
                v-model="useCheck.QuestionFromImage01Part02.Quiz04.sentence"
              />
            </div>
          </div>
        </div>
       
       
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import image64 from "../assets/images/70.png";
import image65 from "../assets/images/65.png";
import image66 from "../assets/images/66.png";
import image67 from "../assets/images/67.png";
import image68 from "../assets/images/68.png";
import image69 from "../assets/images/69.png";
import { ref, watch } from "vue";
import InputTextSound from "./InputTextSound.vue";
const imageBg = new URL(`../assets/images/bg-l.png`, import.meta.url).href;
import { useCheckStore } from "@/stores/checkStore"
const useCheck = useCheckStore()
</script>
  
<style  scoped>
</style>