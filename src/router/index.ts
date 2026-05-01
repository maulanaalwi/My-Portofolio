import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash)
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    return { top: 0, behavior: 'smooth' }
  },
  routes: [{ path: '/', name: 'home', component: HomeView }],
})
