import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index.vue'
import Custom from '@/views/Custom.vue'
import HistoryPeople from '@/views/HistoryPeople.vue'
import HolidaySource from '@/views/HolidaySource.vue'

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
    path: '/people/:id',
    name: 'People',
    component: HistoryPeople
  },
  {
    path: '/holiday/:id',
    name: 'Holiday',
    component: HolidaySource
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



export default router
