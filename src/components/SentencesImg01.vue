<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนเขียนประโยคให้ถูกต้อง
    </h1>
    <div class="main w-full h-full flex flex-col items-center justify-center">
      <div class="flex flex-col">
        <div
          v-for="(item, key) in quizSentents"
          :key="key"
          class="flex items-center gap-3 lg:gap-5"
        >
          <div
            class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex items-center justify-center bg-[#FBFCD2] rounded-full text-[16px] md:text-[24px] lg:text-[32px] text-center font-semibold"
          >
            {{ item.id }} .
          </div>
          <div>
            <img :src="item.imageName1" alt="" class="w-[50px] lg:w-[100px]" />
          </div>
          <div
            class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex items-center justify-center bg-[#FBFCD2] rounded-full text-[16px] md:text-[24px] lg:text-[32px] text-center font-semibold"
          >
            {{ item.word }}
          </div>
          <div>
            <img :src="item.imageName2" alt="" class="w-[50px] lg:w-[100px]" />
          </div>
          <div class="rounded-full px-4 pt-2 pb-1 bg-[#FBFCD2] overflow-hidden">
            <input
              type="text"
              class="bg-transparent border-dotted border-b-4 border-black outline-none px-2"
              @input="logValues($event.target.value, key)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import image78 from "@/assets/images/78.png";
import image79 from "@/assets/images/79.png";
import image80 from "@/assets/images/80.png";
import image81 from "@/assets/images/81.png";
import image82 from "@/assets/images/83.png";
import image83 from "@/assets/images/82.png";
import { ref, reactive } from "vue";
const sententValues = ref({
  sententValue01: "",
  sententValue02: "",
  sententValue03: "",
});


const quizSentents = [
  {
    imageName1: image78,
    imageName2: image79,
    word: "เตะ",
    id: 1,
  },
  {
    imageName1: image80,
    imageName2: image81,
    word: "กิน",
    id: 2,
  },
  {
    imageName1: image82,
    imageName2: image83,
    word: "นั่ง",
    id: 3,
  },
];

const logValues = (event,key) => {
  if(key === 0){sententValues.value.sententValue01 = event}
  if(key === 1){sententValues.value.sententValue02 = event}
  if(key === 2){sententValues.value.sententValue03 = event}
};

</script>

<style scoped>
</style>