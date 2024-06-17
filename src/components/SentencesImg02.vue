<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนแต่งประโยคจากภาพ
    </h1>
    <div class="main w-full h-full flex flex-col items-center justify-center">
      <div class="flex flex-col">
        <div
          v-for="(item, key) in images"
          :key="key"
          class="flex items-center gap-3 lg:gap-5"
        >
          <div
            class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex items-center justify-center bg-[#FBFCD2] rounded-full text-[16px] md:text-[24px] lg:text-[32px] text-center font-semibold"
          >
            {{ arabicToThaiNumber(key+1) }} .
          </div>
          <div>
            <img :src="item" alt="" class="w-[50px] lg:w-[100px]" />
          </div>
        
          <div class="rounded-full px-4 pt-2 pb-1 bg-[#FBFCD2] overflow-hidden">
            <input
              type="text"
              class="bg-transparent border-dotted border-b-4 border-black outline-none px-2"
              v-model="useCheck.QuestionFromImageAndWord02['Quiz' + ('0' + (key+1)).slice(-2)].sentence"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import image84 from "@/assets/images/84.png";
import image85 from "@/assets/images/85.png";
import image86 from "@/assets/images/86.png";

import { ref, reactive } from "vue";
import { useCheckStore } from '@/stores/checkStore'
const useCheck = useCheckStore()

const images = [image84,image85,image86]
 
function arabicToThaiNumber(num) {
      const thaiNumbers = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
      return num.toString().split('').map(digit => thaiNumbers[digit]).join('');
    }
</script>

<style scoped>
</style>