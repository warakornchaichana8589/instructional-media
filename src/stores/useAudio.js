import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAudioStore = defineStore('useAudio', () => {
  const audio = ref(null);
  const isPlaying = ref(false);
  const isLooping = ref(false);
  const play = (url) => {
    if (audio.value) {
      audio.value.pause();
      audio.value.currentTime = 0;
    }
    audio.value = new Audio(url);
    audio.value.loop = isLooping.value;
    audio.value.play();
    isPlaying.value = true;

    audio.value.addEventListener('ended', () => {
      if (isLooping.value) {
        audio.value.currentTime = 0;
        audio.value.play();
      } else {
        isPlaying.value = false;
      }
    });
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
  const enableLoop = () => {
    isLooping.value = true;
    if (audio.value) {
      audio.value.loop = true;
    }
  };

  const disableLoop = () => {
    isLooping.value = false;
    if (audio.value) {
      audio.value.loop = false;
    }
  };

  return {
    audio,
    isPlaying,
    play,
    pause,
    toggle,
    disableLoop,
    enableLoop
  };
})
