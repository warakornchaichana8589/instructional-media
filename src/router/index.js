import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
import QuestionFromImage01 from '../views/QuestionFromImage01.vue'
import SentencesFromPictures01 from '../views/SentencesFromPictures01.vue'
import SentencesFromPictures02 from '../views/SentencesFromPictures02.vue'
import FillInTheBlanksView01 from '../views/FillInTheBlanksView01.vue'
import FillInTheBlanksView02 from '../views/FillInTheBlanksView02.vue'
import QuestionFromImage02 from '../views/QuestionFromImage02.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartView',
      component: StartView
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
    {
      path:'/qustion-image01',
      name: 'QuestionImage01',
      component: QuestionFromImage01
    }
    ,
    {
      path:'/SentencesFromPictures01',
      name: 'SentencesFromPictures01',
      component: SentencesFromPictures01
    }
    ,
    {
      path:'/SentencesFromPictures02',
      name: 'SentencesFromPictures02',
      component: SentencesFromPictures02
    }
    ,
    {
      path:'/FillInTheBlanksView01',
      name: 'FillInTheBlanksView01',
      component: FillInTheBlanksView01
    }
    ,
    {
      path:'/FillInTheBlanksView02',
      name: 'FillInTheBlanksView02',
      component: FillInTheBlanksView02
    }
    ,
    {
      path:'/QuestionFromImage02',
      name: 'QuestionFromImage02',
      component: QuestionFromImage02
    }
    
  ]
})

export default router
