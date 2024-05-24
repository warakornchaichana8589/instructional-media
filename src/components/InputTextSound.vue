<template>
  <div>
    <input
      :type="props.typeInput"
      v-model="inputValue"
      @input="handleEnter"
      class="bg-transparent border-b-2 border-dotted outline-none hover:bg-[rgba(206,215,232,0.5)] focus:bg-[rgba(206,215,232,0.5)] rounded-xl px-2 pt-3"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
const audio = ref(null);
const inputValue = ref("");
const props = defineProps({
  typeInput: { type: String, default: "text" },
});

import audioSrcInput from "../assets/sound/punchy-taps-ui-12-183907.mp3";

const emits = defineEmits(["updateName"]);

const handleEnter = () => {
  const newName = inputValue.value;
  emits("updateName", newName);

  audio.value = new Audio(audioSrcInput);
  audio.value.volume = 0.7;
  audio.value.play();
};
</script>

<style lang="scss" scoped>
</style>
