import { defineStore } from 'pinia'
import { useQuizValueStore } from './quizValueStroe'
import { validateSentenceStore } from './validateSentence'
import { useListStore } from './listStore'
export const useCheckStore = defineStore({
    id: 'useCheck',
    state: () => ({
    useQuizValue: useQuizValueStore(),
    validate: validateSentenceStore(),
    useList: useListStore(),
    // score QuestionFromImage01
    scorePart01: 0, 
    scorePart02: 0,
    scoreQuizDrag:0,
    scoreSentencesImg05:0,
    scoreSentencesImg06:0,
    scoreQuestionFromImageAndWord: 0,
    scoreQuestionFromImageAndWord02: 0,
   
     // score QuestionFromImage01
    QuestionFromImage01Part01: {
        Quiz01: { word: '', sentence: '' },
        Quiz02: { word: '', sentence: '' },
        Quiz03: { word: '', sentence: '' },
        Quiz04: { word: '', sentence: '' },
      },
    QuestionFromImage01Part02: {
        Quiz01: { word: '', sentence: '' },
        Quiz02: { word: '', sentence: '' },
        Quiz03: { word: '', sentence: '' },
        Quiz04: { word: '', sentence: '' },
      
    },
    QuestionFromImageAndWord:{
      Quiz01: { word: 'เตะ', sentence: '' },
      Quiz02: { word: 'กิน', sentence: '' },
      Quiz03: { word: 'นั่ง', sentence: '' },
    },
    QuestionFromImageAndWord02:{
      Quiz01: { word: 'ปลูก', sentence: '' },
      Quiz02: { word: 'ทำอาหาร', sentence: '' },
      Quiz03: { word: 'ร้องเพลง', sentence: '' },
    },
    SentencesImg05:{
      Quiz01: { word1: '', word2: '', sentence: '' },
      Quiz02: { word1: '', word2: '', sentence: '' },
      Quiz03: { word1: '', word2: '', sentence: '' },
    },
    SentencesImg06:{
      Quiz01: { word: 'เก้าอี้', sentence: '' },
      Quiz02: { word: 'เงิน', sentence: '' },
      Quiz03: { word: 'งู', sentence: '' },
    },
    }),
    actions: {
        async  checkQuizView(){
            const answer = this.useQuizValue.quizValue;
            let score = 0;
            for (let i = 0; i < answer.length; i++) {
               const check = await this.validate.checkSentence(answer[i].value)
             if(check){
                score++;
             }
            }
            return score;
          },
        
          async checkQuizzes01() {
            const quizzes = this.QuestionFromImage01Part01;
          
            for (const key in quizzes) {
              const { word, sentence } = quizzes[key];
              const response = await this.validate.TLex(sentence);
              const wordsInTLex = response.words;
          
              if (wordsInTLex.includes(word)) {
                const isValid = await this.validate.checkSentence(sentence);
                if (isValid) {
                  this.scorePart01++;
                }
              }
            }
          
            console.log(`checkQuizzes01 Final score: ${this.scorePart01}`);
          } ,
          async checkQuizzes02() {
            const quizzes = this.QuestionFromImage01Part02;
          
            for (const key in quizzes) {
              const { word, sentence } = quizzes[key];
              const response = await this.validate.TLex(sentence);
              const wordsInTLex = response.words;
          
              if (wordsInTLex.includes(word)) {
                const isValid = await this.validate.checkSentence(sentence);
                if (isValid) {
                  this.scorePart02++;
                }
              }
            }
          
            console.log(`checkQuizzes01 Final score: ${this.scorePart01}`);
          },
      
          async sumQuestionFromImage(){
            await this.checkQuizzes01()
            await this.checkQuizzes02()
            let total = this.scorePart01 + this.scorePart02
            console.log('sumQuestionFromImage '+total)
          return total
          },
          checkQuizDrag(answer){
            const sortedIds = answer.map(item => item.id).join('');
            if (sortedIds == '123') {
              this.scoreQuizDrag++;
              console.log(this.scoreQuizDrag)
            }
          },
          sumQuizDrag(){
            this.checkQuizDrag(this.useList.answerList1)
            this.checkQuizDrag(this.useList.answerList2)
            this.checkQuizDrag(this.useList.answerList3)
            this.checkQuizDrag(this.useList.answerList4)
            this.checkQuizDrag(this.useList.answerList5)
            this.checkQuizDrag(this.useList.answerList6)
            this.checkQuizDrag(this.useList.answerList7)
            this.checkQuizDrag(this.useList.answerList8)
            this.checkQuizDrag(this.useList.answerList9)
            console.log('sumQuizDrag: '+ this.scoreQuizDrag)
            return this.scoreQuizDrag
          },
         async checkSentencesFromPictures01(){
            const quizzes = this.QuestionFromImageAndWord;
          
            for (const key in quizzes) {
              const { word, sentence } = quizzes[key];
              const response = await this.validate.TLex(sentence);
              const wordsInTLex = response.words;
          
              if (wordsInTLex.includes(word)) {
                const isValid = await this.validate.checkSentence(sentence);
                if (isValid) {
                  this.scoreQuestionFromImageAndWord++;
                }
              }
            }
          
            console.log(`checkSentencesFromPictures01 Final score: ${this.scoreQuestionFromImageAndWord}`);
            return this.scoreQuestionFromImageAndWord
          },
          async checkSentencesFromPictures02(){
            const quizzes = this.QuestionFromImageAndWord02;
            for (const key in quizzes) {
              const { sentence } = quizzes[key];
              const isValid = await this.validate.checkSentence(sentence);
             if(isValid){
              this.scoreQuestionFromImageAndWord02++;
             }
            }
            return this.scoreQuestionFromImageAndWord02;
          },
          async checkSentencesImg05() {
            const quizzes = this.SentencesImg05;
          
            for (const key in quizzes) {
              const { word1, word2, sentence } = quizzes[key];
              const response = await this.validate.TLex(sentence);
              const wordsInTLex = response.words;
          
              // ตรวจสอบว่ามีทั้ง word1 และ word2 อยู่ใน sentence หรือไม่
              if (wordsInTLex.includes(word1) && wordsInTLex.includes(word2)) {
                const isValid = await this.validate.checkSentence(sentence);
                if (isValid) {
                  this.scoreSentencesImg05++;
                }
              }
            }
          
            console.log(`scoreSentencesImg05 Final score: ${this.scoreSentencesImg05}`);
            return this.scoreSentencesImg05;
          },
          async checkSentencesImg06() {
            const quizzes = this.SentencesImg06;
          
            for (const key in quizzes) {
              const { word,  sentence } = quizzes[key];
              const response = await this.validate.TLex(sentence);
              const wordsInTLex = response.words;
          
              // ตรวจสอบว่ามีทั้ง word1 และ word2 อยู่ใน sentence หรือไม่
              if (wordsInTLex.includes(word)) {
                const isValid = await this.validate.checkSentence(sentence);
                if (isValid) {
                  this.scoreSentencesImg06++;
                }
              }
            }
          
            console.log(`scoreSentencesImg06 Final score: ${this.scoreSentencesImg06}`);
            return this.scoreSentencesImg06
          },
          isSortedAscending(list) {
            // ดึง id จาก list แล้วเก็บใน array
            const ids = list.map(item => item.id);
            
            // ตรวจสอบว่า id เรียงจากน้อยไปหามากหรือไม่
            for (let i = 0; i < ids.length - 1; i++) {
              if (ids[i] > ids[i + 1]) {
                return false;
              }
            }
            return true;
          },
          checkAnswersPlus(exercises, correctAnswers) {
            let score = 0;
          
            // Helper function to compare two arrays of objects
            function arraysEqual(arr1, arr2) {
              if (arr1.length !== arr2.length) return false;
              for (let i = 0; i < arr1.length; i++) {
                if (arr1[i].text !== arr2[i].text) return false;
              }
              return true;
            }
          
            // Loop through each exercise and corresponding correct answer
            for (let i = 0; i < exercises.length; i++) {
              const exercise = exercises[i];
              const correctAnswer = correctAnswers[i];
          
              // Check each part of the exercise
              const isCorrect =
                arraysEqual(exercise.subjects, correctAnswer.subjects) &&
                arraysEqual(exercise.subjectModifiers, correctAnswer.subjectModifiers) &&
                arraysEqual(exercise.verbs, correctAnswer.verbs) &&
                arraysEqual(exercise.verbModifiers, correctAnswer.verbModifiers) &&
                arraysEqual(exercise.objects, correctAnswer.objects) &&
                arraysEqual(exercise.objectModifiers, correctAnswer.objectModifiers) &&
                exercise.sentenceType === correctAnswer.sentenceType;
          
              if (isCorrect) {
                score++;
              }
            }
          
            return score;
          },

    }
})
