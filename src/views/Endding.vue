<template>
  <div>
    <Layout bgImage="bg-endding.png" class="fadeIn">
      <div
        class="flex w-full h-full sm:p-[20px] p-1 relative flex-col justify-center items-center"
      >
        <div
          class="flex flex-col w-[55%] ml-auto mr-[10%] lg:mr-[15%] h-full py-[10%] my-auto justify-center gap-3 lg:gap-6 zoomIn"
        >
          <div class="flex flex-col w-full justify-center items-center">
            <h2 class="text-[22px] md:text-[32px] lg:text-[44px] w-auto mr-10">
              ผู้จัดทำ
            </h2>
            <div class="w-full flex-col justify-start items-center mt-3 lg:mt-5">
              <h3 class="text-[22px] lg:text-[28px]">นางสาวปรีนาภรณ์<span class="ml-4">โล่เพ็ชร</span></h3>
              <p class="text-[20px] lg:text-[24px]">
                ตำแหน่งครูผู้ช่วย<br>
                กลุ่มสาระการเรียนรู้ภาษาไทย<br>
                โรงเรียนสวนป่าแม่กะสี อำเภอแม่เปิน จังหวัดนครสวรรค์<br>
                สำนักงานเขตพื้นที่การศึกษาประถมศึกษานครสวรรค์ เขต ๒<br>
                FB: <a class=" cursor-pointer hover:text-blue-400" href="www.facebook.com/โรงเรียนสวนป่าแม่กะสี">www.facebook.com/โรงเรียนสวนป่าแม่กะสี SMKS high school</a><br>
                E-mail: <a class="cursor-pointer hover:text-blue-400" href="mailto:suanpa.smks1539@gmail.com">suanpa.smks1539@gmail.com</a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>
    
    <script setup>
import Layout from "@/components/Layout.vue";

import { useAudioStore } from "@/stores/useAudio";
import { ref, watchEffect, onMounted } from "vue";
import ButtonGo from "@/components/ButtonGo.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const { isPlaying, play, pause } = useAudioStore();
const isPlayingIcon = ref(isPlaying);
onMounted(() => {
  watchEffect(() => {
    isPlayingIcon.value = isPlaying;
  });
});

const NextSlide = () => {
  router.push("/step-view");
};
</script>
    
    <style scoped>
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: relative;
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn:active {
  transform: translateY(-3px);
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
}

.btn:hover::after {
  background-color: #9cdcf8d8;
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}

.loader__balls__group {
  animation-name: jumpinBallAnimation1;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
}
@keyframes jumpinBallAnimation1 {
  0% {
    transform: translateY(0) scale(1, 1);
  }
  10% {
    transform: translateY(0) scale(1, 1);
  }
  11% {
    transform: translateY(0) scale(0.9, 1);
    animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
  }
  39% {
    transform: translateY(-10px) scale(1);
    animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
  }
  40% {
    transform: translateY(-10px) scale(1);
  }
  41% {
    transform: translateY(-10px) scale(1);
    animation-timing-function: cubic-bezier(1, 0, 1, 0);
  }
  69% {
    transform: translateY(0px) scale(1, 1);
    animation-timing-function: cubic-bezier(1, 0, 1, 0);
  }
  70% {
    transform: translateY(0) scale(1.1, 1);
  }
  80% {
    transform: translateY(0) scale(1, 1);
  }
  90% {
    transform: translateY(0) scale(1.1, 1);
  }
  100% {
    transform: translateY(0) scale(1, 1);
  }
}
</style>