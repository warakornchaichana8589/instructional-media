import { defineStore } from "pinia";
import { ref } from "vue";
import { useQuizValueStore } from './quizValueStroe'
export const useScoreStore = defineStore("useScore", () => {
    const postTest = ref(0)
    const preTest = ref(0)
    const exerciseScores = ref([])
    const totalExerciseScores = ref(0)
    const pagesScores = ref(
        { 
            quiz_view:0, //max score 8 url quiz-view
            QuestionFromImage01:0, //max score 12 url QuestionFromImage01
            quiz_drag:0, //max score 3 url quiz-drag
            quiz_drag02:0, //max score 3 url quiz-drag02
            quiz_drag03:0, //max score 3 url quiz-drag03
            SentencesFromPictures01:0, //max score 3 url SentencesFromPictures01
            SentencesFromPictures02:0, //max score 3 url SentencesFromPictures02
            FillInTheBlanksView02:0, //max score 3 url FillInTheBlanksView02
            QuestionFromImage02:0, //max score 9 url QuestionFromImage02
            QuizDragSlider:0, //max score 5 url QuizDragSlider
            QuizDragSlider02:0, //max score 5 url QuizDragSlider02
            QuizDragSlider03:0, //max score 5 url QuizDragSlider03
            QuizDragSlider04:0, //max score 2 url QuizDragSlider04
            QuizDragSlider05:0, //max score 2 url QuizDragSlider05
            QuizDragSlider06:0, //max score 1 url QuizDragSlider06
            PutWordsIntoSentences:0, //max score 6 url PutWordsIntoSentences
            ExerciseFormView00:0, //max score 3 url ExerciseFormView00
            ExerciseFormView:0, //max score 2 url ExerciseFormView
            ExerciseFormView02:0, //max score 2 url ExerciseFormView02
            ExerciseFormView03:0, //max score 1 url ExerciseFormView03
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
        updatePagesScores
      };
})