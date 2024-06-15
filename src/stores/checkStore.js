import { defineStore } from 'pinia'
import { useQuizValueStore } from './quizValueStroe'
import { validateSentenceStore } from './validateSentence'

export const useCheckStore = defineStore({
    id: 'useCheck',
    state: () => ({
    useQuizValue: useQuizValueStore(),
    validate: validateSentenceStore(),
    // score QuestionFromImage01
    scorePart01: 0, 
    scorePart02: 0,
     // score QuestionFromImage01
    QuestionFromImage01Part01: {
        Quiz01: { word: '', sentence: '' },
        Quiz02: { word: '', sentence: '' },
        Quiz03: { word: '', sentence: '' },
        Quiz04: { word: '', sentence: '' },
        Quiz05: { word: '', sentence: '' },
        Quiz06: { word: '', sentence: '' },
      },
    QuestionFromImage01Part02: {
        Quiz01: { word: '', sentence: '' },
        Quiz02: { word: '', sentence: '' },
        Quiz03: { word: '', sentence: '' },
        Quiz04: { word: '', sentence: '' },
        Quiz05: { word: '', sentence: '' },
        Quiz06: { word: '', sentence: '' },
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
        }
    }
})
