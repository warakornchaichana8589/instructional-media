// stores/exerciseStore.js

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useExerciseStore = defineStore('exerciseStore', () => {
  const quiz99  = ref([
    {
      quiz:[],
      words: [
        { text:"เขา" },
        { text:"รูป" },
        { text:"วาด" },
        { text:"เดิน" }
    ]
    },{
      quiz:[],
      words: [
        { text:"เชือก" },
        { text:"กระโดด" },
        { text:"น้อง" },
        { text:"วิ่ง" }
    ]
    },{
      quiz:[],
      words: [
        { text:"รีด" },
        { text:"แม่" },
        { text:"ผ้า" },
        { text:"ซัก" }
    ]
    }
  ]);
  const answer99 = [เขาวาดรูป,น้องกระโดดเชือก,แม่รีดผ้า];

  const exercises = ref([
    {
      sentence: "พ่อของฉันดื่มกาแฟดำทุกวัน",
      subjects: [],
      subjectModifiers: [],
      verbs: [],
      verbModifiers: [],
      objects: [],
      objectModifiers: [],
      words: [
        { text: "พ่อ" },
        { text: "ของฉัน" },
        { text: "ดื่ม" },
        { text: "กาแฟ" },
        { text: "ดำ" },
        { text: "ทุกวัน" },
      ],
    },
    {
      sentence: "แม่ทำขนมหม้อแกงอร่อยมาก",
      subjects: [],
      subjectModifiers: [],
      verbs: [],
      verbModifiers: [],
      objects: [],
      objectModifiers: [],
      words: [
        { text: "แม่" },
        { text: "ทำ" },
        { text: "ขนมหม้อแกง" },
        { text: "อร่อย" },
        { text: "มาก" },
      ],
    }
  ]);

  const correctAnswers = [
    {
      subjects: [{ text: "พ่อ" }],
      subjectModifiers: [{ text: "ของฉัน" }],
      verbs: [{ text: "ดื่ม" }],
      verbModifiers: [{ text: "ทุกวัน" } ],
      objects: [{ text: "กาแฟ" }],
      objectModifiers: [ { text: "ดำ" }],
    },
    {
      subjects: [{ text: "แม่" }],
      subjectModifiers: [],
      verbs: [{ text: "ทำ" }],
      verbModifiers: [],
      objects: [{ text: "ขนมหม้อแกง" }],
      objectModifiers: [{ text: "อร่อย" }, { text: "มาก" }],
    }
  ];

  const results = ref([]);
  const results9 = ref([]);
  const checkAnswers = () => {
    console.log('test checkAnswers')
    results.value = exercises.value.map((exercise, index) => {
      const correct = correctAnswers[index];
      let result = "ถูกต้อง";
      for (const key in correct) {
        if (JSON.stringify(correct[key]) !== JSON.stringify(exercise[key])) {
          result = "ผิด";
          break;
        }
      }
      return result;
    });
  };
  const checkAnswers99 = () => {
    const results99 = [];
    quiz99.value.forEach((item, index) => {
      const correctAnswer = answer99[index];
      const userAnswer = item.quiz.map(word => word.text).join('');
      results99.push(userAnswer === correctAnswer ? 'ถูกต้อง' : 'ผิด');
    });
    console.log(results99);
    results9.value = results99
  };
  return { exercises, correctAnswers, results, checkAnswers, quiz99, answer99, results9, checkAnswers99};
});
