<template>
  <div class="max-w-md mx-auto">
    <div class="relative w-full">
      <input
        v-model="inputValue"
        type="text"
        @input="toggleAudio"
        id="default-search"
        class="cursor-text block w-full px-[5px] py-2 md:px-4 ps-5 md:ps-10 text-sm sm:text-lg text-gray-900 border-4 border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :placeholder="props.placeholder"
        required
      />
    </div>
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import { defineProps } from "vue";
import { useDataStore } from "@/stores/dataStore";
const inputStore = useDataStore();
const inputValue = ref(null);
const audio = ref(null);
import audioSrcInput from "../assets/sound/bloop-1-184019.mp3";
const toggleAudio = ()=>{
  audio.value = new Audio(audioSrcInput);
  audio.value.play();
  inputStore.setInputValue(inputValue.value)
}
const props = defineProps({
  placeholder: { type: String, default: 'กรอกชื่อ...'},
  idQuiz:String
});

// onMounted(() => {
//   audioElement.value.addEventListener("ended", () => {});
// });
</script>
  