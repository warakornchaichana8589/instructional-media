<template>
  <div>
    <Layout bgImage="home.png" class="fadeIn">
      <div class="flex h-full sm:p-[20px] p-1 relative flex-col">
       

       
        <RouterLink  to="/home" class="btn loader__balls__group cursor-pointer mb-0 mt-auto text-white flex justify-center items-center bg-red-500 h-auto mx-auto px-2 py-1 lg:px-9 lg:py-3 rounded-full font-medium sm:text-lg lg:text-2xl text-sm leading-none">เริ่มเลย</RouterLink>
        
      </div>
      
    </Layout>
  </div>
</template>

<script setup>
import Layout from '@/components/Layout.vue';

import { useAudioStore } from '@/stores/useAudio';
import { ref, watchEffect, onMounted } from 'vue';
const { isPlaying , play, pause } = useAudioStore();

const isPlayingIcon = ref(isPlaying);
onMounted(() => {
watchEffect(() => {
  console.log('isPlaying:', isPlaying);
  isPlayingIcon.value = isPlaying;
});
})
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
 transition: all .2s;
 position: relative;
}

.btn:hover {
 transform: translateY(-5px);
 box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
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
 transition: all .3s;
}

.btn:hover::after {
 background-color: #9cdcf8d8;
 transform: scaleX(1.4) scaleY(1.5);
 opacity: 0;
}

.loader__balls__group{
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