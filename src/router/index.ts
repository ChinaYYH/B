import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
