import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StartView from '../views/StartView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import LearningView from '../views/LearningView.vue'
import ShowScoreView from '../views/ShowScoreView.vue'
import AdviceView from '../views/AdviceView.vue'
import ShowStepView from '../views/ShowStepView.vue'
import QuizsView from '../views/QuizsView.vue'
import ExplanationView from '../views/ExplanationView.vue'
import QuizDragView from '../views/QuizDragView.vue'
import QuizDragView02 from '../views/QuizDragView02.vue'
import QuizDragView03 from '../views/QuizDragView03.vue'
import QuizDragView04 from '../views/QuizDragView04.vue'
import QuestionFromImage01 from '../views/QuestionFromImage01.vue'
import SentencesFromPictures01 from '../views/SentencesFromPictures01.vue'
import SentencesFromPictures02 from '../views/SentencesFromPictures02.vue'
import FillInTheBlanksView01 from '../views/FillInTheBlanksView01.vue'
import FillInTheBlanksView02 from '../views/FillInTheBlanksView02.vue'
import QuestionFromImage02 from '../views/QuestionFromImage02.vue'
import QuizDragSlider from '../views/QuizDragSlider.vue'
import QuizDragSlider02 from '../views/QuizDragSlider02.vue'
import QuizDragSlider03 from '../views/QuizDragSlider03.vue'
import QuizDragSlider04 from '../views/QuizDragSlider04.vue'
import QuizDragSlider05 from '../views/QuizDragSlider05.vue'
import QuizDragSlider06 from '../views/QuizDragSlider06.vue'
import PutWordsIntoSentences from '../views/PutWordsIntoSentences.vue'
import ExplanationEndView from '../views/ExplanationEndView.vue'
import QuestionsEndView from '../views/QuestionsEndView.vue'
import ShowScoreEndView from '../views/ShowScoreEndView.vue'
import ShowAllScore from '../views/ShowAllScore.vue'
import Endding from '../views/Endding.vue'
import ExerciseFormView from '../views/ExerciseFormView.vue'
import ExerciseFormView02 from '../views/ExerciseFormView02.vue'
import ExerciseFormView03 from '../views/ExerciseFormView03.vue'
import ExerciseFormView00 from '../views/ExerciseFormView00.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartView',
      component: StartView
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    },
    
    {
      path: '/advice',
      name: 'advice',
      component:AdviceView
    },
    {
      path: '/home',
      name: 'HomeView',
      component:HomeView
    },
    {
      path: '/questions',
      name: 'Questions',
      component:QuestionsView
    },
    {
      path:'/learnings',
      name:'Learnings',
      component:LearningView
    },
    {
      path:'/show-score',
      name:'ShowScore',
      component:ShowScoreView
    },
    {
      path:'/step-view',
      name:'ShowStepView',
      component:ShowStepView
    },
    {
      path:'/quiz-view',
      name:'QuizsView',
      component:QuizsView
    },
    {
      path:'/explanation',
      name:'Explanation',
      component:ExplanationView
    },
    {
      path:'/quiz-drag',
      name:'QuizDragView',
      component: QuizDragView
    },
    {
      path:'/quiz-drag02',
      name:'QuizDragView02',
      component: QuizDragView02
    },
    {
      path:'/quiz-drag03',
      name:'QuizDragView03',
      component: QuizDragView03
    },
    ,
    {
      path:'/quiz-drag04',
      name:'QuizDragView04',
      component: QuizDragView04
    },
    {
      path:'/QuestionFromImage01',
      name: 'QuestionFromImage01',
      component: QuestionFromImage01
    },
    {
      path:'/SentencesFromPictures01',
      name: 'SentencesFromPictures01',
      component: SentencesFromPictures01
    },
    {
      path:'/SentencesFromPictures02',
      name: 'SentencesFromPictures02',
      component: SentencesFromPictures02
    },
    {
      path:'/FillInTheBlanksView01',
      name: 'FillInTheBlanksView01',
      component: FillInTheBlanksView01
    },
    {
      path:'/FillInTheBlanksView02',
      name: 'FillInTheBlanksView02',
      component: FillInTheBlanksView02
    },
    {
      path:'/QuestionFromImage02',
      name: 'QuestionFromImage02',
      component: QuestionFromImage02
    },
    {
      path:'/QuizDragSlider',
      name: 'QuizDragSlider',
      component: QuizDragSlider
    },
    {
      path:'/QuizDragSlider02',
      name: 'QuizDragSlider02',
      component: QuizDragSlider02
    },
    {
      path:'/QuizDragSlider03',
      name: 'QuizDragSlider03',
      component: QuizDragSlider03
    },
    {
      path:'/QuizDragSlider04',
      name: 'QuizDragSlider04',
      component: QuizDragSlider04
    },
    {
      path:'/QuizDragSlider05',
      name: 'QuizDragSlider05',
      component: QuizDragSlider05
    },
    {
      path:'/QuizDragSlider06',
      name: 'QuizDragSlider06',
      component: QuizDragSlider06
    }
    ,
    {
      path:'/PutWordsIntoSentences',
      name: 'PutWordsIntoSentences',
      component: PutWordsIntoSentences
    }
    ,
    {
      path:'/ExplanationEndView',
      name: 'ExplanationEndView',
      component: ExplanationEndView
    }
    ,
    {
      path:'/QuestionsEndView',
      name: 'QuestionsEndView',
      component: QuestionsEndView
    }
    ,
    {
      path:'/ShowScoreEndView',
      name: 'ShowScoreEndView',
      component: ShowScoreEndView
    },
    {
      path:'/ShowAllScore',
      name: 'ShowAllScore',
      component: ShowAllScore
    },
    {
      path:'/Endding',
      name: 'Endding',
      component: Endding
    }
    ,
    {
      path:'/ExerciseFormView',
      name: 'ExerciseFormView',
      component: ExerciseFormView
    }
    ,
    {
      path:'/ExerciseFormView02',
      name: 'ExerciseFormView02',
      component: ExerciseFormView02
    }
    ,
    {
      path:'/ExerciseFormView03',
      name: 'ExerciseFormView03',
      component: ExerciseFormView03
    }
    ,
    {
      path:'/ExerciseFormView00',
      name: 'ExerciseFormView00',
      component: ExerciseFormView00
    }
    
    
  ]
})

export default router
