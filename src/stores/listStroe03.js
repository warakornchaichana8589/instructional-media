import { defineStore } from "pinia";

export const useListStore03 = defineStore("useListStore03", {
  state: () => ({
    list1: [
      { name: "ออมเงิน", id: 3 },
      { name: "ออมสิน", id: 1 },
      { name: "ใส่กระปุก", id: 1 },
      { name: "ก้อย", id: 1 },
      { name: "ทุกวัน", id: 1 },
    ],
    answerList1: [],
    list2: [
      { name: "ช่วยกัน", id: 3 },
      { name: "บ้าน", id: 2 },
      { name: "พี่น้อง", id: 4 },
      { name: "ความสะอาด", id: 5 },
      { name: "ทำ", id: 1 },
    ],
    answerList2: [],
    list3: [
      { name: "กำลัง", id: 3 },
      { name: "ปลูกผัก", id: 2 },
      { name: "หนูนิด", id: 4 },
      { name: "ช่วยแม่", id: 1 },
    ],
    answerList3: [],
    list4: [
      { name: "ที่ใต้", id: 1 },
      { name: "กำลัง", id: 3 },
      { name: "ประชุม", id: 4 },
      { name: "ร่มไม้", id: 2 },
      { name: "นักเรียน", id: 2 },
    ],
    answerList4: [],
    list5: [
      { name: "ทุกคืน", id: 3 },
      { name: "สมาธิ", id: 2 },
      { name: "ปรีชา", id: 1 },
      { name: "ก่อนนอน", id: 4 },
      { name: "นั่ง", id: 4 },
    ],
    answerList5: [],
    list5: [
      { name: "ทุกคืน", id: 3 },
      { name: "สมาธิ", id: 2 },
      { name: "ปรีชา", id: 1 },
      { name: "ก่อนนอน", id: 4 },
      { name: "นั่ง", id: 4 },
    ],
    answerList5: [],
  }),
  actions: {
    updateList1(newList) {
      this.list1 = newList;
    },
    updateAnswerList1(newList) {
      this.answerList1 = newList;
    },
    updateList2(newList) {
      this.list2 = newList;
    },
    updateAnswerList2(newList) {
      this.answerList2 = newList;
    },
    updateList3(newList) {
      this.list3 = newList;
    },
    updateAnswerList3(newList) {
      this.answerList3 = newList;
    },
    updateList4(newList) {
      this.list4 = newList;
    },
    updateAnswerList4(newList) {
      this.answerList4 = newList;
    },
    updateList5(newList) {
      this.list5 = newList;
    },
    updateAnswerList5(newList) {
      this.answerList5 = newList;
    },
  },
});
