import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAudioStore = defineStore('useAudio', () => {
  const audio = ref(null);
  const isPlaying = ref(false);
  
  const play = (url) => {
    audio.value = new Audio(url);
    audio.value.play();
    isPlaying.value = true;
  };

  const pause = () => {
    if (audio.value) {
      audio.value.pause();
      isPlaying.value = false;
    }
  };

  const toggle = (url) => {
    if (isPlaying.value) {
      pause();
    } else {
      play(url);
    }
  };

  return {
    audio,
    isPlaying,
    play,
    pause,
    toggle,
  };
})
