import { defineStore } from "pinia";

export const useQuizValueStore = defineStore("useQuizValue", {
    state: () => ({
        quizValue: [],
    }),
    actions: {
        setQuizValue(value) {
            const index = this.quizValue.findIndex(item => item.id === value.id)
            if (index !== -1) {
                this.quizValue[index] = value;
            }else {
                this.quizValue.push(value);
            }
        }
    }
})