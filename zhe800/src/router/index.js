import VueRouter from 'vue-router'
import Vue from 'vue'
import HomeIndex from '../components/Home/index.vue'
import SpecialIndex from '../components/Special/index.vue'
import Homeinfo from '../components/Home/Homeinfo.vue'
import groupBooking from '../components/GroupBooking/index.vue'
import shoppingCart from '../components/shoppingCart/index.vue'
import me from '../components/Me/index.vue'
import search from '../components/Home/search'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeIndex
    },
    {
      name: 'special',
      path: '/special',
      component: SpecialIndex
    },
    {
      name: 'homeinfo',
      path: '/homeinfo/:id',
      component: Homeinfo
    },
    {
      name: 'groupBooking',
      path: '/groupBooking',
      component: groupBooking
    },
    {
      name: 'shoppingCart',
      path: '/shoppingCart',
      component: shoppingCart
    },
    {
      name: 'me',
      path: '/me',
      component: me
    },
    {
      name: 'search',
      path: '/search',
      component: search
    }
  ]
})
