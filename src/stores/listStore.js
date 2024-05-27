import { defineStore } from "pinia";

export const useListStore = defineStore("useList", {
  state: () => ({
    list1: [
      { name: "สุดา", id: 1 },
      { name: "เนย", id: 3 },
      { name: "มี", id: 2 },
    ],
    answerList1: [],
    list2: [
      { name: "เกย", id: 2 },
      { name: "เรือ", id: 1 },
      { name: "หาด", id: 3 },
    ],
    answerList2: [],
    list3: [
      { name: "ตัด", id: 2 },
      { name: "ใบเตย", id: 3 },
      { name: "สีดา", id: 1 },
    ],
    answerList3: [],
    list4: [
      { name: "ตะเพิด", id: 2 },
      { name: "แม่ไก่", id: 3 },
      { name: "อา", id: 1 },
    ],
    answerList4: [],
    list5: [
      { name: "ทุ่งนา", id: 3 },
      { name: "เดินไป", id: 2 },
      { name: "เดชา", id: 1 },
    ],
    answerList5: [],
    list6: [
      { name: "งอ", id: 2 },
      { name: "ขา", id: 3 },
      { name: "แม่", id: 1 },
    ],
    answerList6: [],
    list7: [
      { name: "ไฟ", id: 3 },
      { name: "ก่อ", id: 2 },
      { name: "พ่อ", id: 1 },
    ],
    answerList7: [],
    list8: [
      { name: "มี", id: 2 },
      { name: "มะละกอ", id: 3 },
      { name: "อา", id: 1 },
    ],
    answerList8: [],
    list9: [
      { name: "ท่อน้ำ", id: 3 },
      { name: "ทำ", id: 2 },
      { name: "น้า", id: 1 },
    ],
    answerList9: [],
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
    updateList6(newList) {
      this.list6 = newList;
    },
    updateAnswerList6(newList) {
      this.answerList6 = newList;
    },
    updateList7(newList) {
      this.list7 = newList;
    },
    updateAnswerList7(newList) {
      this.answerList7 = newList;
    },
    updateList8(newList) {
      this.list8 = newList;
    },
    updateAnswerList8(newList) {
      this.answerList8 = newList;
    },
    updateList9(newList) {
      this.list9 = newList;
    },
    updateAnswerList9(newList) {
      this.answerList9 = newList;
    },
  },
});
