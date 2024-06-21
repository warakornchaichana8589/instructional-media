<template>
  <div>
    <Layout bgImage="bg-all-score.png" class="fadeIn">
      <div
        class="flex w-full h-full sm:p-[20px] p-1 relative flex-col justify-center items-center"
      >
        <div
          class="flex flex-col w-[55%] ml-auto mr-[10%] lg:mr-[15%] h-full py-[10%] my-auto justify-center gap-3 lg:gap-6 zoomIn"
        >
          <div class="flex w-full justify-start items-center">
            <h1
              class="text-[#FFA218] text-[18px] md:text-[24px] lg:text-[32px] w-auto mr-10"
            >
              สรุปผลการเรียน
            </h1>
            <p
              class="flex justify-start w-auto items-end text-[20px] md:text-[24px] lg:text-[32px] text-nowrap leading-3"
            >
              ผู้เรียน
              <span
                class="border-dotted border-b-4 border-[#313131] min-w-[50%]"
                >: {{ inputNameValue }}</span
              >
            </p>
          </div>
          <div class="flex flex-col w-full items-center gap-3 lg:gap-6">
            <p
              class="text-[18px] md:text-[24px] lg:text-[32px] w-full flex justify-between"
            >
              ทดสอบก่อนเรียน :
              <span class="ml-auto">{{ arabicToThaiNumber(useScore.preTest) }}/๑๐ คะแนน</span>
            </p>
            <p
              class="text-[18px] md:text-[24px] lg:text-[32px] w-full flex justify-between"
            >
              แบบฝึกหัดการแต่งประโยค :
            
              <span class="ml-auto" v-if="useScore.allScore === null ">กำลังโหลดคะแนน/๗๗ คะแนน</span>
              <span class="ml-auto" v-else>{{ arabicToThaiNumber(useScore.allScore) }}/๗๗ คะแนน</span>
            </p>
            <p
              class="text-[18px] md:text-[24px] lg:text-[32px] w-full flex justify-between"
            >
              ทดสอบหลังเรียน :
              <span class="ml-auto">{{ arabicToThaiNumber(useScore.postTest) }}/๑๐ คะแนน</span>
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
const checkStore = useCheckStore();

import ButtonGo from "@/components/ButtonGo.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

import { useListStore02 } from "@/stores/listStroe02";
const useList02 = useListStore02();

import { useListStore03 } from "@/stores/listStroe03";
const useList03 = useListStore03();

import { useExerciseStore } from "@/stores/quiz99Store";
const useExercise = useExerciseStore();

import { useAnswerStore } from "@/stores/answerStore";
const useAnswer = useAnswerStore();

const totalPagesScores = ref(null);

const useScore = useScoreStore();

onMounted(async () => {

  if (useScore.sumToggle) {
    const scoreQuizView = await checkStore.checkQuizView();
    const QuestionFromImage01 = await checkStore.sumQuestionFromImage();
    const sumQuizDrag = checkStore.sumQuizDrag();
    const checkSentencesFromPictures01 =
      await checkStore.checkSentencesFromPictures01();
    const checkSentencesFromPictures02 = await checkStore.checkSentencesFromPictures02();

    //  QuestionFromImage02
    const checkSentencesImg05 = await checkStore.checkSentencesImg05();
    const checkSentencesImg06 = await checkStore.checkSentencesImg06();
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
    ];

    function checkAllLists01(lists) {
      let scoreQuizDrag = 0;
      for (const list of lists) {
        if (checkStore.isSortedAscending(list)) {
          scoreQuizDrag++;
        } else {
          console.log("List is not sorted.");
        }
      }
      return scoreQuizDrag;
    }
    const scoreQuizDrag = checkAllLists01(lists);

    const scoreQuizDragSlider04_06 = checkStore.checkAnswersPlus(
      useExercise.exercises,
      useExercise.correctAnswers
    );

    function sumPutWordsIntoSentences() {
      // PutWordsIntoSentences
      let score = 0;
      const sentences = [
        useList02.subjectVerbObjectSentenceNum01,
        useList02.subjectVerbObjectSentenceNum02,
        useList02.subjectVerbObjectSentenceNum03,
        useList02.subjectVerbObjectSentenceNum04,
        useList02.subjectVerbObjectSentenceNum05,
        useList02.subjectVerbObjectSentenceNum06,
      ];
      for (const sentence of sentences) {
        if (checkStore.checkPutWordsIntoSentences(sentence)) {
          score++;
        }
      }

      return score;
    }
    const scorePutWordsIntoSentences = sumPutWordsIntoSentences();

    const answer99 = ["เขาวาดรูป", "น้องกระโดดเชือก", "แม่รีดผ้า"];
    const scoreExerciseFormView00 = checkStore.checkQuizExerciseFormView00(
      useExercise.quiz99,
      answer99
    );

    //ExerciseFormView
    const sentencesExerciseFormView = [
      useList03.answerList1,
      useList03.answerList2,
      useList03.answerList3,
      useList03.answerList4,
      useList03.answerList5,
    ];
    function checkAllLists(sentences) {
      //ExerciseFormView
      let scoreQuizDrag = 0;
      for (const list of sentences) {
        if (checkStore.isSortedAscending(list)) {
          scoreQuizDrag++;
        } else {
          console.log("List is not sorted.");
        }
      }
      return scoreQuizDrag;
    }
    const scoreExerciseFormView = checkAllLists(sentencesExerciseFormView);

    useScore.updatePagesScores("quiz_view", scoreQuizView);
    useScore.updatePagesScores("QuestionFromImage01", QuestionFromImage01);
    useScore.updatePagesScores("quiz_drag", sumQuizDrag);
    useScore.updatePagesScores(
      "SentencesFromPictures01",
      checkSentencesFromPictures01
    );
    useScore.updatePagesScores(
      "SentencesFromPictures02",
      checkSentencesFromPictures02
    );
    useScore.updatePagesScores("QuestionFromImage02", scoreQuestionFromImage02);
    useScore.updatePagesScores("QuizDragSlider", scoreQuizDrag);
    useScore.updatePagesScores("QuizDragSlider04", scoreQuizDragSlider04_06); //QuizDragSlider04-6
    useScore.updatePagesScores("ExerciseFormView00", scoreExerciseFormView00); //ExerciseFormView00
    useScore.updatePagesScores("ExerciseFormView", scoreExerciseFormView);
    //  totalPagesScores.value = useScore.sumPagesScores()

    const sum = useScore.sumPagesScores();
    useScore.allScore = sum;
    console.log(useScore.allScore)
    console.log(useScore.sumToggle ? 'run' : 'not');
    useScore.sumToggle = false;
  }
  console.log(useScore.sumToggle ? 'run' : 'not');
});

useScore.addPreTest(useAnswer.score);
useScore.addPostTest(useAnswer.scoreEnd);
const { inputNameValue } = useDataStore();

const win = ref(null);

const NextSlide = () => {
  router.push("./Endding");
};

const PrevSlide = () => {
  router.push("./ShowScoreEndView");
};

function arabicToThaiNumber(num) {
      if(num === undefined){
        return 0;
      }
      const thaiNumbers = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
      return num.toString().split('').map(digit => thaiNumbers[digit]).join('');
    }
</script>

<style scoped></style>
