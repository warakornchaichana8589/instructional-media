// stores/fullscreenStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFullscreenStore = defineStore('fullscreen', () => {
  const isFullscreen = ref(false);
  const mainElement = document.getElementById('mainEle');

  const openFullscreen = () => {
    if (mainElement.requestFullscreen) {
      mainElement.requestFullscreen();
    } else if (mainElement.mozRequestFullScreen) { // Firefox
      mainElement.mozRequestFullScreen();
    } else if (mainElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      mainElement.webkitRequestFullscreen();
    } else if (mainElement.msRequestFullscreen) { // IE/Edge
      mainElement.msRequestFullscreen();
    }
    isFullscreen.value = true;
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
    isFullscreen.value = false;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      openFullscreen(mainElement);
    } else {
      closeFullscreen();
    }
  };

  return {
    isFullscreen,
    mainElement,
    openFullscreen,
    closeFullscreen,
    toggleFullscreen,
  };
});
