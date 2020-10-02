import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Index
  },
  {
    path: '/services',
    name: 'Услуги',
    component: Index,
    onMainMenu: true
  },
  {
    path: '/works',
    name: 'Работы',
    component: Index,
    onMainMenu: true
  },
  {
    path: '/agency',
    name: 'Агенция',
    component: Index,
    onMainMenu: true
  },
  {
    path: '/blog',
    name: 'Блог',
    component: Index,
    onMainMenu: true
  },
  {
    path: '/contacts',
    name: 'Контакты',
    component: Index,
    onMainMenu: true
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
