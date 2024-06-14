<template>
  <div>
    <Layout bgImage="score.png" class="fadeIn">
      <div
        class="flex w-full h-full sm:p-[20px] p-1 relative flex-col justify-center items-center"
      >
        <div
          class="flex flex-col h-full py-[10%] my-auto justify-around zoomIn"
        >
          <h1 class="text-[#FFA218] text-[30px] md:text-[50px] lg:text-[80px]">
            สรุปผลการสอบ
          </h1>
          <p
            class="flex justify-start items-end text-[20px] md:text-[30px] lg:text-[40px] leading-none"
          >
            ผู้เรียน<span
              class="border-dotted border-b-4 border-[#313131] min-w-[50%]"
              >: {{ inputNameValue }}</span
            >
          </p>
          <p class="text-[30px] md:text-[50px] lg:text-[80px]">
            คะแนน : {{ answerStore.scoreEnd }}/10
          </p>
        </div>
      </div>
      <div class="absolute bottom-2 lg:bottom-5 left-2 lg:left-5 z-10">
        <ButtonGo
          text="สอบใหม่"
          classCustomFont="text-[14px] lg:text-[30px]"
          @click="PrevSlide"
        />
      </div>
      <div class="absolute bottom-2 lg:bottom-5 right-2 lg:right-5 z-10">
        <ButtonGo
          text="สรุปผลการเรียน"
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
import { useAnswerStore } from "@/stores/answerStore";
import { useCounterStore } from "@/stores/counter"
import ButtonGo from "@/components/ButtonGo.vue";
import { useRouter } from "vue-router";
const router = useRouter();
import winSound from "../assets/sound/tadaa-47995.mp3";
import { onMounted, ref } from "vue";
const { inputNameValue } = useDataStore();
const answerStore = useAnswerStore();
const win = ref(null);

const useCounter = useCounterStore()
onMounted(() => {
  const QuizBefore = useCounter.statePageEnd
  if (QuizBefore === 'ok') {
   console.log('ok')
  }else{
    router.push('/QuestionsEndView');
  }
  answerStore.checkAnswerEnd();
  if (answerStore.scoreEnd >= 8) {
    win.value = new Audio(winSound);
    win.value.volume = 0.7;
    win.value.play();
  }
});
const NextSlide = () => {
  router.push('./ShowAllScore');
};

const PrevSlide = () => {
  router.push('./ShowScoreEndView');
};
</script>
   
   <style scoped>
</style>