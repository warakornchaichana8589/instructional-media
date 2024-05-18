<template>
  <button @click="fun" class="cursor-pointer">
    <span class="shadow"></span>
    <span class="edge"></span>
    <span class="front text" :class="classCustomFont">{{ text }}</span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    text:String,
    fun: Function,
    classCustomFont:String,
})
</script>

<style scoped>

button {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: hsla(0, 0%, 39%, 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: var(--main-bg-btn-hover)
}

.front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 50px;
 
  color: rgb(0, 0, 0);
  background: var(--main-bg-btn);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  font-weight: 500;
}

button:hover {
  filter: brightness(110%);
}

button:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

button:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

button:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

button:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

button:focus:not(:focus-visible) {
  outline: none;
}
@media screen and (max-width:640px) {
    .front{
        padding: 6px 14px;
    }    
}
</style>