import { defineStore } from "pinia";
import { ref } from "vue";
import { useQuizValueStore } from './quizValueStroe'
export const useScoreStore = defineStore("useScore", () => {
    const allScore = ref(null);
    const sumToggle = ref(true);
    const postTest = ref(0)
    const preTest = ref(0)
    const exerciseScores = ref([])
    const totalExerciseScores = ref(0)
    const pagesScores = ref(
        { 
            quiz_view:0, //max score 8 url quiz-view ok
            QuestionFromImage01:0, //max score 8 url QuestionFromImage01 ok
            quiz_drag:0, //max score 9 url quiz-drag quiz-drag02 quiz-drag03 ok
            SentencesFromPictures01:0, //max score 3 url SentencesFromPictures01 ok
            SentencesFromPictures02:0, //max score 3 url SentencesFromPictures02 ok
            FillInTheBlanksView02:0, //max score 3 url FillInTheBlanksView02 ok useQuizValue
            QuestionFromImage02:0, //max score 9 url QuestionFromImage02 ok 04=useQuizValue 05-06 showscore
            QuizDragSlider:0, //max score 15 url QuizDragSlider ok QuizDragSlider02 QuizDragSlider03
           
            QuizDragSlider04:0, //max score 5 url QuizDragSlider04-6 ok checkAnswersPlus()
           
            PutWordsIntoSentences:0, //max score 6 url PutWordsIntoSentences ok
            ExerciseFormView00:0, //max score 3 url ExerciseFormView00 ok
            ExerciseFormView:0, //max score 5 url ExerciseFormView 2-3 ok
        } 
    )
    

    const useQuizValue = useQuizValueStore()
    // แบบทดสอบหลังเรียน คะแนน
    function addPostTest (score){
        postTest.value = score
    }
    // แบบทดสอบก่อนเรียน คะแนน
    function addPreTest (score){
        preTest.value = score
    }
    // แบบฝึกหัด คะแนน
    function addExerciseScores (score){
        exerciseScores.value.push(score)
    }
    function getTotalExerciseScores (){
        totalExerciseScores.value = exerciseScores.value.reduce((a, b) => a + b, 0)
    }
    function updatePagesScores(page, score) {
        if (pagesScores.value.hasOwnProperty(page)) {
            pagesScores.value[page] = score;
            console.log('Update'+page)
        }
    }

    function sumPagesScores() {
        const scores = pagesScores.value;
        let total = 0;
        for (const key in scores) {
            if (scores.hasOwnProperty(key)) {
                total += scores[key];
            }
        }
        console.log('sumPagesScores '+total)
        return total
    }


    return {
        postTest,
        preTest,
        exerciseScores,
        totalExerciseScores,
        addPostTest,
        addPreTest,
        addExerciseScores,
        getTotalExerciseScores,
        pagesScores,
        sumPagesScores,
        updatePagesScores,
        sumToggle,
      };
})