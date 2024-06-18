import { defineStore } from "pinia";

export const useListStore03 = defineStore("useListStore03", {
  state: () => ({
    list1: [
      { name: "ออมเงิน", id: 2 },
      { name: "ออมสิน", id: 4 },
      { name: "ใส่กระปุก", id: 3 },
      { name: "ก้อย", id: 1 },
      { name: "ทุกวัน", id: 5 },
    ],
    answerList1: [],
    list2: [
      { name: "สิงโต", id: 3 },
      { name: "เห็น", id: 2 },
      { name: "เด็กๆ", id: 1 },
      { name: "ที่สวนสัตว์", id: 5 },
      { name: "ตัวใหญ่", id: 4 },
    ],
    answerList2: [],
    list3: [
      { name: "กำลัง", id: 2 },
      { name: "ปลูกผัก", id: 4 },
      { name: "หนูนิด", id: 1 },
      { name: "ช่วยแม่", id: 3 },
    ],
    answerList3: [],
    list4: [
      { name: "ที่ใต้", id: 4 },
      { name: "กำลัง", id: 2 },
      { name: "ประชุม", id: 3 },
      { name: "ร่มไม้", id: 5 },
      { name: "นักเรียน", id: 1 },
    ],
    answerList4: [],
    list5: [
      { name: "ทุกคืน", id: 5 },
      { name: "สมาธิ", id: 3 },
      { name: "ปรีชา", id: 1 },
      { name: "ก่อนนอน", id: 4 },
      { name: "นั่ง", id: 2 },
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
