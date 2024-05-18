import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'
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
    }
  ]
})

export default router
