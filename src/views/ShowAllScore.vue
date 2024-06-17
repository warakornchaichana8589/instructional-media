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
              <span class="ml-auto" v-if="totalPagesScores==null">{{ กำลังโหลดคะแนน }}/10 คะแนน</span>
              <span class="ml-auto" v-else>{{ totalPagesScores }}/10 คะแนน</span>
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

import { useCheckStore } from "@/stores/checkStore";
const checkStore = useCheckStore()

import ButtonGo from "@/components/ButtonGo.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

import { useListStore02 } from "@/stores/listStroe02"
const useList02 = useListStore02();

import { useExerciseStore } from "@/stores/quiz99Store"
const useExercise = useExerciseStore();
import { useAnswerStore } from '@/stores/answerStore'
const useAnswer = useAnswerStore()

const totalPagesScores = ref(null)

const useScore = useScoreStore();

onMounted(async ()=>{
 const scoreQuizView = await checkStore.checkQuizView();
 const QuestionFromImage01 = await checkStore.sumQuestionFromImage();
 const sumQuizDrag = checkStore.sumQuizDrag();
 const checkSentencesFromPictures01 = await checkStore.checkSentencesFromPictures01()
 const checkSentencesFromPictures02 = await checkStore.checkSentencesFromPictures02()

//  QuestionFromImage02
 const checkSentencesImg05 = await checkStore.checkSentencesImg05()
 const checkSentencesImg06 = await checkStore.checkSentencesImg06()
const scoreQuestionFromImage02 = checkSentencesImg05 + checkSentencesImg06;
const lists = [
  useList02.answerList1,
  useList02.answerList2,
  useList02.answerList3,
  useList02.answerList4,
  useList02.answerList5,
  useList02.answerList6,
  useList02.answerList7,
  useList02.answerList8,
  useList02.answerList9,
  useList02.answerList10,
  useList02.answerList11,
  useList02.answerList12,
  useList02.answerList13,
  useList02.answerList14,
  useList02.answerList15,
]
function checkAllLists(lists) {
  let scoreQuizDrag = 0;
  for (const list of lists) {
    if (checkStore.isSortedAscending(list)) {
      scoreQuizDrag++;
    }
  }
  return scoreQuizDrag;
}
const scoreQuizDrag = checkAllLists(lists);


const scoreQuizDragSlider04_06 = checkStore.checkAnswersPlus(useExercise.exercises.value, useExercise.correctAnswers);

 useScore.updatePagesScores('quiz_view',scoreQuizView);
 useScore.updatePagesScores('QuestionFromImage01',QuestionFromImage01);
 useScore.updatePagesScores('quiz_drag',sumQuizDrag);
 useScore.updatePagesScores('SentencesFromPictures01',checkSentencesFromPictures01);
 useScore.updatePagesScores('SentencesFromPictures02',checkSentencesFromPictures02);
 useScore.updatePagesScores('QuestionFromImage02', scoreQuestionFromImage02);
 useScore.updatePagesScores('QuizDragSlider', scoreQuizDrag);
 useScore.updatePagesScores('QuizDragSlider04', scoreQuizDragSlider04_06); //QuizDragSlider04-6
 
 
//  totalPagesScores.value = useScore.sumPagesScores()
const sum = useScore.sumPagesScores()
totalPagesScores.value = sum
})

 




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