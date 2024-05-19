import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import LearningView from '../views/LearningView.vue'
import ShowScoreView from '../views/ShowScoreView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartView',
      component: StartView
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
    }
  ]
})

export default router
