import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'
import Custom from '../views/Custom.vue'
import historyPeople from '@/views/historyPeople.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/custom',
    name: 'Custom',
    component: Custom
  },
  {
    path: '/people/:name',
    name: 'people',
    component: historyPeople
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
