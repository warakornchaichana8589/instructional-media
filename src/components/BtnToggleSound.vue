<template>
    <div>

    </div>
</template>

<script setup>
import useAudio from './useAudio';
const { play, pause, toggle, isPlaying } = useAudio();
import { ref, onMounted, watch } from 'vue';



watch(hover, (newVal, oldVal) => {
  if (newVal) {
    play(audioSrc)
  } else {
    pause()
  }
});
</script>

<style scoped>

</style>