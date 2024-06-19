import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useDataStore = defineStore('useData', () => {
    const inputNameValue = ref('');
    const currentNameValue =ref('');
    const valueQuiz = ref([]);
    const setInputValue = (value) => {
        inputNameValue.value = value;
      };
      const setValueQuiz = (idQuiz,value) => {
        const newQuiz = {
          id: idQuiz,
          value: value
        }
        const index = valueQuiz.value.findIndex(quiz => quiz.id === idQuiz);
        if (index !== -1) {
          // ถ้าพบ idQuiz ซ้ำ, ทำการอัพเดทรายการเดิม
          valueQuiz.value[index].value = value;
        } else {
          // ถ้าไม่พบ, เพิ่มรายการใหม่
          valueQuiz.value.push(newQuiz);
        }
      };
    return {
        inputNameValue,
        setInputValue,
        valueQuiz,
        currentNameValue
      };
})