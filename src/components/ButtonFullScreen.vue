<template>
  <div
    class="shadow-md rounded-full lg:w-[60px] lg:h-[60px] w-[35px] h-[35px] flex justify-center items-center "
  >
    <label
      class="container-toggle relative z-10 lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] cursor-pointer"
      @click="togglescreen"
    >
      <input checked="checked" type="checkbox" />
      <svg
        viewBox="0 0 448 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        class="expand"
      >
        <path
          d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 448 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        class="compress"
      >
        <path
          d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"
        ></path>
      </svg>
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFullscreenStore } from "@/stores/screenStroe";
const { isFullscreen, openFullscreen, closeFullscreen } = useFullscreenStore();

const toggleScreen = ref(isFullscreen !== undefined ? isFullscreen : false);

const togglescreen = () => {
  if (toggleScreen.value) {
    openFullscreen();
  } else {
    closeFullscreen();
  }
  toggleScreen.value = !toggleScreen.value;
};
</script>

<style scoped>
/*------ Settings ------*/
.container-toggle {
  --color: #a5a5b0;
  --size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: var(--size);
  user-select: none;
  fill: var(--color);
}

.container-toggle .expand {
  position: absolute;
  animation: keyframes-fill 0.5s;
}

.container-toggle .compress {
  position: absolute;
  display: none;
  animation: keyframes-fill 0.5s;
}

/* ------ On check event ------ */
.container-toggle input:checked ~ .expand {
  display: none;
}

.container-toggle input:checked ~ .compress {
  display: block;
}

/* ------ Hide the default checkbox ------ */
.container-toggle input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* ------ Animation ------ */
@keyframes keyframes-fill {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
  }
}
@media screen and (max-width: 1024px) {
  .container-toggle {
    --color: #a5a5b0;
    --size: 20px;
    --size-m: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: var(--size-m);
    user-select: none;
    fill: var(--color);
  }
}
</style>