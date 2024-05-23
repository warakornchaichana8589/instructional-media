import { defineStore } from 'pinia';

export const useSentenceStore = defineStore('sentenceStore', {
  state: () => ({
    sentence: [],
  }),
  actions: {
    updateSentence(id, text) {
      const index = this.sentence.findIndex(item => item.id === id);

      if (index !== -1) {
        // ถ้ามีอยู่แล้วในรายการ ให้แทนที่ค่าเดิม
        this.sentence[index].text = text;
      } else {
        // ถ้ายังไม่มีและจำนวนข้อความน้อยกว่า 10 ข้อ ให้เพิ่มข้อความเข้าไปใหม่
        if (this.sentence.length < 10) {
          this.sentence.push({ id, text });
        } else {
          // ถ้ามีครบ 10 ข้อแล้ว จะไม่เพิ่มใหม่ แต่สามารถปรับ logic นี้ได้ตามต้องการ
          console.warn('Maximum of 10 sentences reached');
        }
      }
    },
  },
});
