<template>
   <div>

      <input :type="props.typeInput" v-model="inputValue" @input="handleEnter">
   </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';

const inputValue = ref('');
const props = defineProps({
   typeInput:String
})
const emits = defineEmits(['updateName']);

const handleEnter = () => {
   const newName = inputValue.value;
   emits('updateName', newName);
}
</script>

<style lang="scss" scoped>

</style>
