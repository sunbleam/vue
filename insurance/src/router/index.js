import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from '@/views/home'
import liulan from '@/views/logs'
import me from '@/views/me'
import thing from '@/views/home/components/thing'
import login from '@/views/login'
import personalInfo from '@/components/PersonalInfo'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: personalInfo
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/liulan',
      name: 'liulan',
      component: liulan
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/thing/:id',
      name: 'thing',
      component: thing
    }
  ]
})
router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', {isLoading: true})
  setTimeout(() => {
    next()
  }, 500)
})

router.afterEach((to) => {
  store.commit('updateLoadingStatus', {isLoading: false})
})
export default router
