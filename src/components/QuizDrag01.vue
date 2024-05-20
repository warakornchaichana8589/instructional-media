<template>
    <div id="app">
      <h2>จัดเรียงคำให้ถูกต้อง:</h2>
      <draggable v-model="words" @end="checkOrder" class="flex gap-1">
        <template #item="{ element }" >
          <div class="bg-[#fdc998f3] hover:bg-[#fdc99886] w-[50px] h-[50px] p-2 rounded-full flex justify-center items-center">
            {{ element }}
          </div>
        </template>
      </draggable>
      <p v-if="isCorrect">ถูกต้อง!</p>
      <p v-else>ลองอีกครั้ง</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import draggable from 'vuedraggable';
  
  export default {
    components: {
      draggable
    },
    setup() {
      const words = ref(["ปลา", "แมว", "กิน"]);
      const correctOrder = ["แมว", "กิน", "ปลา"];
      const isCorrect = ref(false);
  
      const checkOrder = () => {
        isCorrect.value = JSON.stringify(words.value) === JSON.stringify(correctOrder);
      };
  
      return {
        words,
        isCorrect,
        checkOrder
      };
    }
  };
  </script>
  
  <style>
  .draggable-item {
    padding: 10px;
    margin: 5px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    cursor: move;
    display: inline-block;
  }
  </style>
  