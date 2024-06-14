import { defineStore } from "pinia";
import { ref } from "vue";

export const useScoreStore = defineStore("useScore", () => {
    const postTest = ref(0)
    const preTest = ref(0)
    const exerciseScores = ref([])
    const totalExerciseScores = ref(0)
    
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
    
    



    return {
        postTest,
        preTest,
        exerciseScores,
        totalExerciseScores,
        addPostTest,
        addPreTest,
        addExerciseScores,
        getTotalExerciseScores,
      };
})