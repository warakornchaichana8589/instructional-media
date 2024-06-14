import { defineStore } from 'pinia';
import { useQuestionStroe } from './questionStroe'

export const useAnswerStore = defineStore({
  id: 'answer',
  state: () => ({
    answers: {}, // ใช้วัตถุ JSON เพื่อเก็บคำตอบของแต่ละข้อ
    answersEnd: {},
    score : 0,
    scoreEnd : 0,
    questionStore: useQuestionStroe(),
  }),
  actions: {
    // เมธอดสำหรับการเพิ่มหรืออัปเดตคำตอบสำหรับข้อที่กำหนด
    addOrUpdateAnswer(questionId, answer) {
      this.answers[questionId] = answer;
    },
    addOrUpdateAnswerEnd(questionId, answer) {
      this.answersEnd[questionId] = answer;
    },

    // เมธอดสำหรับการเรียกดูคำตอบสำหรับข้อที่กำหนด
    getAnswer(questionId) {
      return this.answers[questionId];
    },
    getAnswerEnd(questionId) {
      return this.answersEnd[questionId];
    },
    // เมธอดสำหรับล้างคำตอบทั้งหมด
    clearAnswers() {
      this.answers = {};
    },
    clearAnswersEnd() {
      this.answersEnd = {};
    },
    resetScore() {
      this.score = 0;
    },
    resetScoreEnd() {
      this.scoreEnd = 0;
    },
    checkAnswer() {
      this.resetScore();
      // สร้าง Object ใหม่เพื่อเก็บข้อมูล
      const resultObject = [];
    
      // สร้างอาร์เรย์เพื่อเก็บข้อมูลคำถามและคำตอบที่ถูกต้อง
      const questionArray = this.questionStore.questions.map(question => {
        return { answer: question.answer, id: question.id };
      });
    
      // วนลูปผ่าน questionArray เพื่อสร้าง Object ที่ต้องการ
      questionArray.forEach(item => {
        // ดึงข้อมูลคำตอบจาก answers โดยใช้ id จาก questionArray
        const choice = this.answers[item.id];
    
        // เพิ่มข้อมูลเข้า Object ใหม่
        resultObject.push({
          id: item.id,
          answer: item.answer,
          choice: choice
        });
      });
    
      // ตรวจสอบคำตอบและคำนวณคะแนน
      resultObject.forEach(itemQ => {
        if (itemQ.answer === itemQ.choice) {
          this.score++;
        }
      });
      // คืนค่าคะแนนที่ได้
      return this.score;
    },
    checkAnswerEnd() {
      console.log("checkAnswerEnd")
      this.resetScoreEnd();
      // สร้าง Object ใหม่เพื่อเก็บข้อมูล
      const resultObject = [];
    
      // สร้างอาร์เรย์เพื่อเก็บข้อมูลคำถามและคำตอบที่ถูกต้อง
      const questionArray = this.questionStore.questions.map(question => {
        return { answer: question.answer, id: question.id };
      });
    
      // วนลูปผ่าน questionArray เพื่อสร้าง Object ที่ต้องการ
      questionArray.forEach(item => {
        // ดึงข้อมูลคำตอบจาก answers โดยใช้ id จาก questionArray
        const choice = this.answersEnd[item.id];
    
        // เพิ่มข้อมูลเข้า Object ใหม่
        resultObject.push({
          id: item.id,
          answer: item.answer,
          choice: choice
        });
      });
    
      // ตรวจสอบคำตอบและคำนวณคะแนน
      resultObject.forEach(itemQ => {
        if (itemQ.answer === itemQ.choice) {
          this.scoreEnd++;
        }
      });
      // คืนค่าคะแนนที่ได้
      return this.scoreEnd;
    },
    
  },
});
