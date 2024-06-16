<template>
    <div>
      <Layout bgImage="bg-l.png" class="fadeIn">
        <ExerciseForm />
  
        <div class="absolute bottom-2 lg:bottom-5 left-2 lg:left-5 z-10">
          <ButtonGo
            text="ย้อนกลับ"
            classCustomFont="text-[14px] lg:text-[30px]"
            @click="swiperPrevSlide"
          />
        </div>
        <div class="absolute bottom-2 lg:bottom-5 right-2 lg:right-5 z-10">
          <ButtonGo
            text="ถัดไป"
            classCustomFont="text-[14px] lg:text-[30px]"
            @click="swiperNextSlide"
            :disableToggle="buttonDisabled"
          />
        </div>
      </Layout>
    </div>
  </template>
      
      <script setup>
  import Layout from "@/components/Layout.vue";
  import ButtonGo from "@/components/ButtonGo.vue";
  import { useAudioStore } from "@/stores/useAudio";
  import { ref, watchEffect, onMounted, computed } from "vue";
  import ExerciseForm from "@/components/ExerciseForm.vue";
  
  import { useRouter } from "vue-router";
  const router = useRouter();
  
  // Sound
  import audioSrcInput from "../assets/sound/page-flip-47177.mp3";
  const audio = ref(null);
  audio.value = new Audio(audioSrcInput);
  
  const buttonDisabled = ref(false);
  
  const swiperNextSlide = () => {
    router.push("./ExerciseFormView02");
    audio.value.play();
  };
  
  const swiperPrevSlide = () => {
    router.push("./ExerciseFormView00")
    audio.value.play();
  };
  </script>
      
    <style scoped>
  .selected-choice {
    border: 3px solid #ff913f !important; /* เปลี่ยนเป็นสีที่คุณต้องการ */
    box-shadow: 3px 3px 5px #ff923fcb;
  }
  </style>