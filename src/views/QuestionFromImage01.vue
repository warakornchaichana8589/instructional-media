<template>
    <div>
      <Layout bgImage="BG.png" class="fadeIn">
        
        <div class="flex relative h-full w-full justify-center items-center">
          <swiper
            :modules="modules"
            class="mySwiper h-full w-full"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <QuizImage01/>
            </swiper-slide>
            <swiper-slide>
              <QuizImage02/>
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
  import { ref, watchEffect, onMounted, computed } from "vue";
  import QuizImage01 from "@/components/QuizImage01.vue";
  import QuizImage02 from "@/components/QuizImage02.vue";
  
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
  
  import { useAnswerStore } from "@/stores/answerStore";
  
  onMounted(() => {
    watchEffect(() => {
      isPlayingIcon.value = isPlaying;
    });
  });
  
  const buttonDisabled = ref(false);
  const answerStore = useAnswerStore();
  const onSlideChange = () => {
    slideBiginnig.value = swiperInstance.value.isBeginning;
    slideEnd.value = swiperInstance.value.isEnd;
    
    
    audio.value.play();


  };
  const buttonText = computed(() => {
    return slideBiginnig.value ? "ก่อนหน้า" : "ก่อนหน้า";
  });
  const buttonTextEnd = computed(() => {
    return slideEnd.value ? "แบบฝึกหัดถัดไป" : "ถัดไป";
  });
  function onSwiper(swiper) {
    swiperInstance.value = swiper;
  }
  
  const swiperNextSlide = () => {
    if (slideEnd.value) {
      router.push("./quiz-drag");
    } else {
      swiperInstance.value.slideNext();
    }
  };
  
  const swiperPrevSlide = () => {
    if (slideBiginnig.value) {
      router.push("./quiz-view");
      
    } else {
      swiperInstance.value.slidePrev();
    }
  };
  
  
  const modules = [Navigation];
  </script>
    
  <style scoped>
  .selected-choice {
    border: 3px solid #ff913f !important; /* เปลี่ยนเป็นสีที่คุณต้องการ */
    box-shadow: 3px 3px 5px #ff923fcb;
  }
  
  
  </style>