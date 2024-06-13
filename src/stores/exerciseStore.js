// store.js
import { defineStore } from 'pinia';

export const useExerciseStore = defineStore('exercise', {
  state: () => ({
    answer: []
  }),
  actions: {
    setAnswer(answer) {
      this.answer = answer;
    }
  }
});
