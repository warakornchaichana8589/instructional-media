<template>
    <div>
      <Layout bgImage="bg-answer-end.png" class="fadeIn">
        <div class="flex relative h-full w-full justify-center items-center">
          <swiper
            :modules="modules"
            class="mySwiper h-full"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-for="(question, questionIndex) in newQuestions"
              :key="question.id"
              class="flex justify-center items-center"
            >
              <div
                class="flex flex-col justify-center items-center m-auto gap-2 lg:gap-3 aspect-video max-w-[40%] h-full"
              >
                <h3
                  v-if="!question.imageUrl"
                  class="text-[18px] lg:text-[32px] mt-5"
                >
                  ข้อ {{ question.id }} <span v-html="question.question"></span>
                </h3>
                <div
                  v-if="question.imageUrl"
                  class="flex gap-2 mt-10 justify-between items-center w-full"
                >
                  <h3 class="text-[18px] lg:text-[32px]">
                    ข้อ {{ question.id }} <span v-html="question.question"></span>
                  </h3>
                  <img
                    :src="question.imageUrl"
                    alt="Question Image"
                    class="max-w-[70px] lg:max-w-[180px] rounded-2xl shadow-md"
                  />
                </div>
                <ul class="flex flex-col gap-2 lg:gap-3 justify-start">
                  <label
                    v-for="(choice, index) in question.choices"
                    :key="index"
                    class="cursor-pointer px-4 py-1 lg:px-6 lg:py-2 bg-[#FCD24F] rounded-3xl text-[16px] lg:text-[24px] min-w-[200px] lg:min-w-[300px]"
                    :class="{
                      'selected-choice': answers[questionIndex] === index,
                    }"
                    @click="toggleAudioQ"
                  >
                    {{ choice }}
                    <input
                      hidden
                      type="radio"
                      :name="question.id"
                      :value="index"
                      @change="updateAnswer(questionIndex, index, question.id)"
                      :checked="answers[questionIndex] === index"
                      @click="checkBtnGo"
                    />
                  </label>
                </ul>
              </div>
            </swiper-slide>
          </swiper>
          <div class="absolute bottom-2 lg:bottom-5 left-2 lg:left-5 z-10">
            <ButtonGo
              :text="buttonText"
              classCustomFont="text-[14px] lg:text-[30px]"
              @click="swiperPrevSlide"
            />
          </div>
          <div class="absolute bottom-2 lg:bottom-5 right-2 lg:right-5 z-10">
            <ButtonGo
              :text="buttonTextEnd"
              classCustomFont="text-[14px] lg:text-[30px]"
              @click="swiperNextSlide"
              :disableToggle="buttonDisabled"
            />
          </div>
        </div>
      </Layout>
    </div>
  </template>
    
    <script setup>
  import Layout from "@/components/Layout.vue";
  import ButtonGo from "@/components/ButtonGo.vue";
  import { useAudioStore } from "@/stores/useAudio";
  import { ref, watchEffect, onMounted, computed, watch } from "vue";
  import { useQuestionStroe } from "@/stores/questionStroe";
  import { useAnswerStore } from "@/stores/answerStore";
  import { useCounterStore } from "@/stores/counter";
  
  // swiper
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/navigation";
  import { Navigation } from "swiper/modules";
  const swiperInstance = ref();
  const slideBiginnig = ref(true);
  const slideEnd = ref(false);
  
  import { useRouter } from "vue-router";
  const router = useRouter();
  
  const { isPlaying, play, pause } = useAudioStore();
  const isPlayingIcon = ref(isPlaying);
  const { questions } = useQuestionStroe();
  // Sound
  import audioSrcInput from "../assets/sound/page-flip-47177.mp3";
  const audio = ref(null);
  audio.value = new Audio(audioSrcInput);
  const answers = ref([]);
  
  const buttonDisabled = ref(false);
  const getImageUrl = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  };
  
  const newQuestions = computed(() => {
    return questions.map((question) => {
      if (question.image_name) {
        return {
          ...question,
          imageUrl: getImageUrl(question.image_name),
        };
      }
      return question;
    });
  });
  const answerStore = useAnswerStore();
  const updateAnswer = (questionIndex, index, id) => {
    if (Object.keys(answerStore.answersEnd).length === 10 && swiperInstance.value.isEnd) {
      buttonDisabled.value = false;
    }
  
    answers.value[questionIndex] = index;
    selectAnswer(id, index + 1);
  };
  const checkBtnGo = () =>{
    if (Object.keys(answerStore.answersEnd).length === 9 && swiperInstance.value.isEnd) {
      buttonDisabled.value = false;
    }
  }
  watchEffect(() => {
    if (Array.isArray(questions.value) && questions.value.length > 0) {
      answers.value = Array(questions.value.length).fill(null);
    }
  });
  onMounted(() => {
    watchEffect(() => {
      console.log("isPlaying:", isPlaying);
      isPlayingIcon.value = isPlaying;
    });
  });
  
  const selectAnswer = (questionId, answer) => {
    answerStore.addOrUpdateAnswerEnd(questionId, answer);
  };
  
  const onSlideChange = () => {
    slideBiginnig.value = swiperInstance.value.isBeginning;
    slideEnd.value = swiperInstance.value.isEnd;
    audio.value.play();
  };
  const buttonText = computed(() => {
    return slideBiginnig.value ? "กลับหน้าลงทะเบียน" : "ย้อยกลับ";
  });
  const buttonTextEnd = computed(() => {
    return slideEnd.value ? "ดูคะแนน" : "ถัดไป";
  });
  function onSwiper(swiper) {
    swiperInstance.value = swiper;
  }
  const useCounter = useCounterStore();
  const swiperNextSlide = () => {
    if (slideEnd.value) {
      useCounter.setStateEnd();
      router.push("./ShowScoreEndView");
    } else {
      swiperInstance.value.slideNext();
    }
  };
  
  const swiperPrevSlide = () => {
    if (slideBiginnig.value) {
      router.push("/home");
    } else {
      swiperInstance.value.slidePrev();
    }
  };
  
  import audioQuestion from "../assets/sound/clickselect3-107712.mp3";
  const audioQ = ref(null);
  const toggleAudioQ = () => {
    if (audioQ.value && !audioQ.value.paused) {
      // หยุดและเคลียร์เสียงที่กำลังเล่น
      audioQ.value.pause();
      audioQ.value = null;
    }
    // เริ่มเล่นเสียงใหม่
    audioQ.value = new Audio(audioQuestion);
    audioQ.value.volume = 0.5;
    audioQ.value.play();
  };
  
  watch(
    [() => answerStore.answersEnd, () => swiperInstance.value && swiperInstance.value.isEnd],
    ([newAnswers, isEnd]) => {
      if ((Object.keys(newAnswers).length === 10 && isEnd) || !isEnd) {
        buttonDisabled.value = false;
      } else {
        buttonDisabled.value = true;
      }
    },
    { immediate: true } // เพิ่มออปชัน immediate เพื่อเรียก watcher ทันทีที่คอมโพเนนต์ถูกสร้าง
  );
  
  const modules = [Navigation];
  </script>
    
  <style scoped>
  .selected-choice {
    border: 3px solid #ff913f !important; /* เปลี่ยนเป็นสีที่คุณต้องการ */
    box-shadow: 3px 3px 5px #ff923fcb;
  }
  </style>