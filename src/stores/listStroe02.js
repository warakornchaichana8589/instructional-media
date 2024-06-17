import { defineStore } from "pinia";

export const useListStore02 = defineStore("useList02", {
  state: () => ({
    list1: [
      { name: "ต้นไม้", id: 3 },
      { name: "พ่อ", id: 1 },
      { name: "ปลูก", id: 2 },
    ],
    answerList1: [],
    list2: [
      { name: "นักเรียน", id: 3 },
      { name: "พา", id: 2 },
      { name: "ไป", id: 4 },
      { name: "สวนสัตว์", id: 5 },
      { name: "ครู", id: 1 },
    ],
    answerList2: [],
    list3: [
      { name: "เรียน", id: 3 },
      { name: "ชอบ", id: 2 },
      { name: "ภาษาไทย", id: 4 },
      { name: "สุดา", id: 1 },
    ],
    answerList3: [],
    list4: [
      { name: "พ่อ", id: 1 },
      { name: "ข้าวต้ม", id: 3 },
      { name: "ตอนเช้า", id: 4 },
      { name: "กิน", id: 2 },
    ],
    answerList4: [],
    list5: [
      { name: "แกงจืด", id: 3 },
      { name: "ทำ", id: 2 },
      { name: "แม่", id: 1 },
      { name: "ผักกาด", id: 4 },
    ],
    answerList5: [],
    list6: [
      { name: "ริมตลิ่ง", id: 4 },
      { name: "กำลัง", id: 2 },
      { name: "เดินไป", id: 3 },
      { name: "เพื่อนๆ", id: 1 },
    ],
    answerList6: [],
    list7: [
      { name: "กล่อง", id: 5 },
      { name: "ฉัน", id: 1 },
      { name: "ใส่", id: 4 },
      { name: "เก็บ", id: 2 },
      { name: "ของ", id: 3 },
    ],
    answerList7: [],
    list8: [
      { name: "คัดไทย", id: 4 },
      { name: "ให้", id: 2 },
      { name: "ครู", id: 1 },
      { name: "นักเรียน", id: 3 },
    ],
    answerList8: [],
    list9: [
      { name: "พา", id: 3 },
      { name: "วันนี้", id: 1 },
      { name: "ยาย", id: 2 },
      { name: "ทำบุญ", id: 6 },
      { name: "ฉัน", id: 4 },
      { name: "มา", id: 5 },
    ],
    answerList9: [],
    list10: [
        { name: "เท", id: 3 },
        { name: "เขา", id: 1 },
        { name: "น้ำส้ม", id: 4 },
        { name: "กำลัง", id: 2 },
        { name: "ขวด", id: 6 },
        { name: "ใส่", id: 5 },
      ],
      answerList10: [],
      list11: [
        { name: "น้องนิด", id: 1 },
        { name: "ภูเขา", id: 4 },
        { name: "ภาพ", id: 3 },
        { name: "วาด", id: 2 },
      ],
      answerList11: [],
      list12: [
        { name: "แม่", id: 1 },
        { name: "กลัว", id: 3 },
        { name: "ตกใจ", id: 2 },
        { name: "จิ้งจก", id: 4 },
      ],
      answerList12: [],
      list13: [
        { name: "พ่อ", id: 1 },
        { name: "ฉัน", id: 3 },
        { name: "พา", id: 2 },
        { name: "เที่ยว", id: 5 },
        { name: "ไป", id: 4 },
      ],
      answerList13: [],
      list14: [
        { name: "กระโดด", id: 2 },
        { name: "กบ", id: 1 },
        { name: "อยู่", id: 3 },
        { name: "โอ่ง", id: 5 },
        { name: "ข้าง", id: 4 },
      ],
      answerList14: [],
      list15: [
        { name: "แม่", id: 3 },
        { name: "กวาดบ้าน", id: 4 },
        { name: "ช่วย", id: 2 },
        { name: "ฉัน", id: 1 }
      ],
      answerList15: [],
      list16: [
        { name: "พ่อ", id: 3 },
        { name: "ของฉัน", id: 4 },
        { name: "ดื่ม", id: 2 },
        { name: "กาแฟ", id: 1 },
        { name: "ดำ", id: 1 },
        { name: "ทุกวัน", id: 1 },
      ],
      answerList16: [],
      list17: [
        { name: "แม่", id: 3 },
        { name: "ทำ", id: 4 },
        { name: "ขนมหม้อแกง", id: 2 },
        { name: "อร่อย", id: 1 },
        { name: "มาก", id: 1 }
      ],
      answerList17: [],
      list18: [
        { name: "อารี", id: 3 },
        { name: "ซื้อ", id: 4 },
        { name: "กระโปรง", id: 2 },
        { name: "ตัวใหม่", id: 1 }
      ],
      answerList18: [],
      list19: [
        { name: "น้อง", id: 3 },
        { name: "ร้องให้", id: 4 },
        { name: "เสียงดัง", id: 2 },
      ],
      answerList19: [],
      list20: [
        { name: "มานี", id: 3 },
        { name: "กินก๋วยเตี๋ยวไก่", id: 4 },
        { name: "อย่าง", id: 2 },
        { name: "เอร็ดอร่อย", id: 1 }
      ],
      answerList20: [],
      subjectList:[
        {
          name: "คุณครู",
          id: 1
        },
        {
          name: "แมว",
          id: 2
        },
        {
          name: "ลิง",
          id: 3
        },
        {
          name: "ป้าสา",
          id: 5
        }
        ,
        {
          name: "ตาสี",
          id: 4
        }
        ,
        {
          name: "มาลี",
          id: 6
        }
      ],
      verbList:[
        {
          name: "ตี",
          id: 5
        },
        {
          name: "มี",
          id: 4
        },
        {
          name: "ใส่",
          id: 6
        },
        {
          name: "กิน",
          id: 2
        }
        ,
        {
          name: "ปีน",
          id: 3
        }
        ,
        {
          name: "สอน",
          id: 1
        }
      ],
      objectList:[
        {
          name: "นักเรียน",
          id: 1
        },
        {
          name: "กระโปรง",
          id: 6
        },
        {
          name: "ปลาทู",
          id: 2
        },
        {
          name: "มะละกอ",
          id: 4
        }
        ,
        {
          name: "ต้นมะพร้าว",
          id: 3
        }
        ,
        {
          name: "งู",
          id: 5
        }
      ],
      subjectVerbObjectSentenceNum01:[],
      subjectVerbObjectSentenceNum02:[],
      subjectVerbObjectSentenceNum03:[],
      subjectVerbObjectSentenceNum04:[],
      subjectVerbObjectSentenceNum05:[],
      subjectVerbObjectSentenceNum06:[],
      
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
    updateList10(newList) {
        this.list10 = newList;
    },
    updateAnswerList10(newList) {
    this.answerList10 = newList;
    },
    updateList11(newList) {
    this.list11 = newList;
    },
    updateAnswerList11(newList) {
    this.answerList11 = newList;
    },
    updateList12(newList) {
    this.list12 = newList;
    },
    updateAnswerList12(newList) {
    this.answerList12 = newList;
    },
    updateList13(newList) {
    this.list13 = newList;
    },
    updateAnswerList13(newList) {
    this.answerList13 = newList;
    },
    updateList14(newList) {
    this.list14 = newList;
    },
    updateAnswerList14(newList) {
    this.answerList14 = newList;
    },
    updateList15(newList) {
    this.list15 = newList;
    },
    updateAnswerList15(newList) {
    this.answerList15 = newList;
    },
    updateList16(newList) {
    this.list16 = newList;
    },
    updateAnswerList16(newList) {
    this.answerList16 = newList;
    },
    updateList17(newList) {
    this.list17 = newList;
    },
    updateAnswerList17(newList) {
    this.answerList17 = newList;
    },
    updateList18(newList) {
    this.list18 = newList;
    },
    updateAnswerList18(newList) {
    this.answerList18 = newList;
    },
    updateList19(newList) {
    this.list19 = newList;
    },
    updateAnswerList19(newList) {
    this.answerList19 = newList;
    },
    updateList20(newList) {
    this.list20 = newList;
    },
    updateAnswerList20(newList) {
    this.answerList20 = newList;
    },
  },
});
