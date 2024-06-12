<template>
    <div class="box-main shadow-2xl relative flex justify-center items-center cursor-auto">
        <div class="display relative max-h-screen mx-auto shaw-dow-custom" 
        ref="display"  
        :style="{ backgroundImage: `url(${bgImagePath})` }">

          <div class="absolute top-5 right-5">
            <div class="flex gap-2 lg:gap-4 justify-center">
              <IconHome />
              
              <IconVolume />
              <ButtonFullScreen />
            </div>
          
          </div>
            <slot />
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted, computed  } from 'vue';
import IconHome from '@/components/icons/IconHome.vue';
import IconVolume from '@/components/icons/IconVolume.vue';
import ButtonFullScreen from '@/components/ButtonFullScreen.vue';

const props = defineProps({
  bgImage: { type: String, default: 'BG.png'}
});

const display = ref(null);

const bgImagePath = computed(() => {
      return props.bgImage ? new URL(`../assets/images/${props.bgImage}`, import.meta.url).href : '';
    });


</script>

<style scoped>
.box-main{
    width: 100vw;
    height: 100vh;
    display: flex;
}
.display{
    width: calc(100vh * (16 / 9));
    max-width: 1440px;
    aspect-ratio: 16/9;
    margin: auto;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
   
}
.shaw-dow-custom{
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 10px #676767eb;
}
</style>