<template>
  <div>
    <Layout bgImage="BG.png" class="fadeIn">
      <div class="flex relative h-full w-full">
        <swiper
          :modules="modules"
          class="mySwiper"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide
          ><swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide
          ><swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide
          ><swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide
          ><swiper-slide>Slide 9</swiper-slide>
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
            text="ถัดไป"
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
onMounted(() => {
  watchEffect(() => {
    console.log("isPlaying:", isPlaying);
    isPlayingIcon.value = isPlaying;
  });
});
const onSlideChange = () => {
    slideBiginnig.value = swiperInstance.value.isBeginning;
    slideEnd.value = swiperInstance.value.isEnd;
}
const buttonText = computed(() => {
      return slideBiginnig.value ? 'กลับหน้าลงทะเบียน' : 'ก่อนหน้า';
    });



function onSwiper(swiper) {
  swiperInstance.value = swiper;
}

const swiperNextSlide = () => {
  if (slideEnd.value) {
    router.back();
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