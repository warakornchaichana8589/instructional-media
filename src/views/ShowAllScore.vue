<template>
  <div>
    <Layout bgImage="bg-all-score.png" class="fadeIn">
      <div
        class="flex w-full h-full sm:p-[20px] p-1 relative flex-col justify-center items-center"
      >
        <div
          class="flex flex-col w-[55%] ml-auto mr-[10%] lg:mr-[15%]  h-full py-[10%] my-auto justify-center gap-3 lg:gap-6 zoomIn"
        >
          <div class="flex w-full justify-start items-center">
            <h1
              class="text-[#FFA218] text-[18px] md:text-[24px] lg:text-[32px] w-auto mr-10"
            >
              สรุปผลการเรียน
            </h1>
            <p
              class="flex justify-start w-auto  items-end text-[20px] md:text-[24px] lg:text-[32px] text-nowrap leading-3"
            >
              ผู้เรียน
              <span class="border-dotted border-b-4 border-[#313131] min-w-[50%]">: {{ inputNameValue }}</span
              >
            </p>
          </div>
          <div class="flex flex-col w-full items-center gap-3 lg:gap-6">
            <p class="text-[18px] md:text-[24px] lg:text-[32px] w-full  flex justify-between">
              ทดสอบก่อนเรียน :
              <span class="ml-auto">{{ useScore.preTest }}/10 คะแนน</span>
            </p>
            <p class="text-[18px] md:text-[24px] lg:text-[32px] w-full flex justify-between">
              แบบฝึกหัดการแต่งประโยค :
              <span class="ml-auto">{{ useScore.preTest }}/10 คะแนน</span>
            </p>
            <p class="text-[18px] md:text-[24px] lg:text-[32px] w-full flex justify-between">
              ทดสอบหลังเรียน :
              <span class="ml-auto">{{ useScore.postTest }}/10 คะแนน</span>
            </p>
          </div>
        </div>
      </div>
      <div class="absolute bottom-2 lg:bottom-5 left-2 lg:left-5 z-10">
        <ButtonGo
          text="สรุปคะแนน"
          classCustomFont="text-[14px] lg:text-[30px]"
          @click="PrevSlide"
        />
      </div>
      <div class="absolute bottom-2 lg:bottom-5 right-2 lg:right-5 z-10">
        <ButtonGo
          text="ผู้จัดทำ"
          classCustomFont="text-[14px] lg:text-[30px]"
          @click="NextSlide"
        />
      </div>
    </Layout>
  </div>
</template>
   
   <script setup>
import Layout from "@/components/Layout.vue";
import { useDataStore } from "../stores/dataStore";
import { useScoreStore } from "@/stores/scoreStroe";
import ButtonGo from "@/components/ButtonGo.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

import { useAnswerStore } from '@/stores/answerStore'
const useAnswer = useAnswerStore()



const useScore = useScoreStore();
useScore.addPreTest(useAnswer.score);
useScore.addPostTest(useAnswer.scoreEnd);
const { inputNameValue } = useDataStore();

const win = ref(null);

const NextSlide = () => {
  router.push("./Endding");
};

const PrevSlide = () => {
  router.push('./ShowScoreEndView');
};
</script>
   
   <style scoped>
</style>