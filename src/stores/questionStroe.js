import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuestionStroe = defineStore("useQuestion", () => {
  const questions = ref([]);

  const setQuestion = (value) => {
    questions.value = value;
  };
  const questionsMock = [
    {
      id: 1,
      question: "ประโยคคืออะไร",
      choices: [
        "ก. คำที่มีตัวสะกด",
        "ข. คำที่มีสองพยางค์ขึ้นไป",
        "ค. การนำคำ หรือกลุ่มคำมาเรียนต่อกันให้ได้เนื้อความที่สมบูรณ์",
      ],
      answer: 3,
    },
    {
      id: 2,
      question: "ข้อใดไม่ใช่ส่วนประกอบของประโยค",
      choices: [
        "ก. ภาคประธาน",
        "ข. ภาคแสดง",
        "ค. ภาคคำพูด",
      ],
      answer: 3,
    },
    {
      id: 3,
      question: "จากภาพควรแต่งประโยคว่าอย่างไร",
      image_name: 'questions.jpg',
      choices: [
        "ก. รถพ่อขับ",
        "ข. พ่อขับรถ",
        "ค. รถขับพ่อ",
      ],
      answer: 2,
    },
    {
      id: 4,
      question: "ข้อใดเป็นประโยคสมบูรณ์",
      choices: [
        "ก. แม่พ่อ",
        "ข. แมววิ่ง",
        "ค. พี่ชาย",
      ],
      answer: 2,
    },
    {
      id: 5,
      question: "คำใดเป็นประธานในประโยค “ครูสอนนักเรียน”",
      choices: [
        "ก. ครู",
        "ข. สอน",
        "ค. นักเรียน",
      ],
      answer: 1,
    },
    {
      id: 6,
      question: "คำใดเป็นกริยาในประโยค “น้องชายดูหนัง”",
      choices: [
        "ก. น้องชาย",
        "ข. ดู",
        "ค. หนัง",
      ],
      answer: 2,
    },
    {
      id: 7,
      question: "“ ฟ้าใส............น้ำ”",
      choices: [
        "ก. ดูด",
        "ข. ดื่ม",
        "ค. กิน",
      ],
      answer: 2,
    },
    {
      id: 8,
      question: "คำต่อไปนี้เรียงเป็นประโยคได้ว่าอย่างไร หยิบ/พี่/บน/ปากกา/โต๊ะ",
      choices: [
        "ก. ปากกาหยิบพี่บนโต๊ะ",
        "ข. พี่หยิบปากกาบนโต๊ะ",
        "ค. ปากกาหยิบบนโต๊ะพี่",
      ],
      answer: 2,
    },
    {
      id: 9,
      question: "ข้อใดไม่เป็นประโยค",
      choices: [
        "ก. น้องและพี่วิ่ง",
        "ข. น้าวิ่งเร็ว",
        "ค. โรงเรียนอนุบาล",
      ],
      answer: 3,
    },
    {
      id: 10,
      question: "จากรูปภาพข้อใดแต่งประโยคได้ถูกต้อง",
      image_name: 'questions2.jpg',
      choices: [
        "ก. แมวกินปลา",
        "ข. ปลากินแมว",
        "ค. แมวปลากิน",
      ],
      answer: 1,
    },
  ];
  setQuestion(questionsMock);
  return {
    setQuestion,
    questions,
  };
});
