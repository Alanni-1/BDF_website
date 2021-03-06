import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Index from '@/views/Index.vue'
import Custom from '@/views/Custom.vue'
import HistoryPeople from '@/views/HistoryPeople.vue'
import HolidaySource from '@/views/HolidaySource.vue'
import Test from '@/views/Test.vue'

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
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})

export default router
