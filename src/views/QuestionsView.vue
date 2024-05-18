<template>
  <div>
    <Layout bgImage="BG.png" class="fadeIn">
      <div class="flex relative h-full w-full justify-center items-center">
        <swiper
          :modules="modules"
          class="mySwiper"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="question in newQuestions" :key="question.id">
            <div
              class="flex flex-col justify-center items-center m-auto gap-2 lg:gap-3"
            >
              <h3 class="text-[18px] lg:text-[32px]">
                ข้อ {{ question.id }} {{ question.question }}
              </h3>
              <div v-if="question.imageUrl">
                <img
                  :src="question.imageUrl"
                  alt="Question Image"
                  class="max-w-[180px] rounded-2xl shadow-md"
                />
              </div>
              <ul class="flex flex-col gap-2 lg:gap-3">
                <li
                  v-for="(choice, index) in question.choices"
                  :key="index"
                  class="cursor-pointer px-4 py-1 lg:px-6 lg:py-2 bg-[#FCD24F] rounded-3xl text-[16px] lg:text-[24px]"
                >
                  {{ choice }}
                </li>
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
import { ref, watchEffect, onMounted, computed } from "vue";
import { useQuestionStroe } from "@/stores/questionStroe";
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

// Sound
import audioSrcInput from "../assets/sound/page-flip-47177.mp3";
const audio = ref(null);
audio.value = new Audio(audioSrcInput);

const { questions } = useQuestionStroe();

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

onMounted(() => {
  watchEffect(() => {
    console.log("isPlaying:", isPlaying);
    isPlayingIcon.value = isPlaying;
  });
});
const onSlideChange = () => {
  slideBiginnig.value = swiperInstance.value.isBeginning;
  slideEnd.value = swiperInstance.value.isEnd;
  slideEnd.value = swiperInstance.value.isEnd;
  audio.value.play();
};
const buttonText = computed(() => {
  return slideBiginnig.value ? "กลับหน้าลงทะเบียน" : "ก่อนหน้า";
});
const buttonTextEnd = computed(() => {
  return slideEnd.value ? "เริ่มบทเรี่ยน" : "ถัดไป";
});
function onSwiper(swiper) {
  swiperInstance.value = swiper;
}

const swiperNextSlide = () => {
  if (slideEnd.value) {
    router.push('./learnings');
  } else {
    swiperInstance.value.slideNext();
  }
};

const swiperPrevSlide = () => {
  if (slideBiginnig.value) {
    router.back();
  } else {
    swiperInstance.value.slidePrev();
  }
};

const modules = [Navigation];
</script>
  
  <style scoped>
</style>