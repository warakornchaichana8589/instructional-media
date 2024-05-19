import { defineStore } from 'pinia';

export const useAnswerStore = defineStore({
  id: 'answer',
  state: () => ({
    answers: {}, // ใช้วัตถุ JSON เพื่อเก็บคำตอบของแต่ละข้อ
  }),
  actions: {
    // เมธอดสำหรับการเพิ่มหรืออัปเดตคำตอบสำหรับข้อที่กำหนด
    addOrUpdateAnswer(questionId, answer) {
      this.answers[questionId] = answer;
    },
    // เมธอดสำหรับการเรียกดูคำตอบสำหรับข้อที่กำหนด
    getAnswer(questionId) {
      return this.answers[questionId];
    },
    // เมธอดสำหรับล้างคำตอบทั้งหมด
    clearAnswers() {
      this.answers = {};
    },
  },
});
