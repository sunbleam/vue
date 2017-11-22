import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import uploading from '@/views/uploadingVideo'
import commitVideo from '@/views/uploadingVideo/components/CommitVideo'
import comment from '@/views/comment'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/uploading',
      name: 'uploading',
      component: uploading
    },
    {
      path: '/commitVideo',
      name: 'commitVideo',
      component: commitVideo
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    }
  ]
})
