<template>
    <div class="box-main shadow-2xl">
        <div class="display cursor-grabbing relative" :style="{ backgroundImage: `url(${bgImagePath})` }">
          <div class="absolute top-5 right-5">
            <IconVolume />
          </div>
            <slot />
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import IconVolume from '@/components/icons/IconVolume.vue';
const props = defineProps({
  bgImage: { type: String, default: 'BG.png'}
});

const bgImagePath = ref('');

onMounted(() => {
  import(`../assets/images/${props.bgImage}`).then(module => {
    bgImagePath.value = module.default;
  });
});


</script>

<style scoped>
.box-main{
    width: 100vw;
    height: 100vh;
    display: flex;
}
.display{
    width: 100%;
    max-width: 1440px;
    aspect-ratio: 16/9;
    margin: auto;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: contain;
}
</style>