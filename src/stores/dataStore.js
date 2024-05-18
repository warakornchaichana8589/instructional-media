import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useDataStore = defineStore('useData', () => {
    const inputNameValue = ref('');
    const setInputValue = (value) => {
        inputNameValue.value = value;
      };
    return {
        inputNameValue,
        setInputValue
      };
})