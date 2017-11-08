import Vue from 'vue'
import Router from 'vue-router'
import homeIndex from '@/views/home/index'
import salaryIndex from '@/views/salarySheet'
import salarySendOut from '@/views/salarySheet/children/SendOut'
import salaryManage from '@/views/salarySheet/children/Manage'
import salaryFeedback from '@/views/salarySheet/children/Feedback'
import serveIndex from '@/views/serve'
import serveWage from '@/views/serve/children/Wage'
import serveStatement from '@/views/serve/children/Statement'
import companyIndex from '@/views/company'
import companyAccount from '@/views/company/children/Account/index'
import companyRecord from '@/views/company/children/Record/index'
import companySet from '@/views/company/children/Set/index'
import companyNote from '@/views/company/children/Note/index'
import login from '@/views/login'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      name: 'home',
      path: '/home',
      component: homeIndex,
      meta: {
        title: '首页',
        icon: 'el-icon-tickets'
      }
    }
  ]
})
let routerArr = [{
  name: 'salaryIndex',
  path: '/salaryIndex',
  component: salaryIndex,
  meta: {
    title: '工资条',
    icon: 'el-icon-menu'
  },
  children: [
    {
      path: 'salarySendOut',
      name: 'salarySendOut',
      component: salarySendOut,
      meta: {
        title: '发工资条'
      }
    },
    {
      path: 'salaryManage',
      name: 'salaryManage',
      component: salaryManage,
      meta: {
        title: '工资条管理'
      }
    },
    {
      path: 'salaryFeedback',
      name: 'salaryFeedback',
      component: salaryFeedback,
      meta: {
        title: '员工反馈'
      }
    }
  ]
},
{
  name: 'serveIndex',
  path: '/serveIndex',
  component: serveIndex,
  meta: {
    title: '企业服务',
    icon: 'el-icon-location-outline'
  },
  children: [
    {
      path: 'serveWage',
      name: 'serveWage',
      component: serveWage,
      meta: {
        title: '薪税服务'
      }
    },
    {
      path: 'serveStatement',
      name: 'serveStatement',
      component: serveStatement,
      meta: {
        title: '报表'
      }
    }
  ]
},
{
  path: '/companyIndex',
  name: 'companyIndex',
  component: companyIndex,
  meta: {
    title: '企业管理',
    icon: 'el-icon-bell'
  },
  children: [
    {
      path: 'companyAccount',
      name: 'companyAccount',
      component: companyAccount,
      meta: {
        title: '企业账户'
      }
    },
    {
      path: 'companyRecord',
      name: 'companyRecord',
      component: companyRecord,
      meta: {
        title: '员工档案'
      }
    },
    {
      path: 'companySet',
      name: 'companySet',
      component: companySet,
      meta: {
        title: '设置中心'
      }
    },
    {
      path: 'companyNote',
      name: 'companyNote',
      component: companyNote,
      meta: {
        title: '短信记录'
      }
    }
  ]
}]
let rules = [{
  name: 'serveIndex',
  children: [
    {
      name: 'serveWage'
    }
  ]
}, {
  name: 'salaryIndex'
}, {
  name: 'companyIndex'
}]
function getRules (rules, routerArr) {
  let routerData = []
  for (let item of rules) {
    let router = getArr(item.name, routerArr)
    if (router) {
      if (item.children) {
        router.children = getRules(item.children, router.children)
      }
      routerData.push(router)
    }
  }
  return routerData
}
function getArr (name, dataArr) {
  let arr = false
  for (let val of dataArr) {
    if (val.name === name) {
      arr = val
    }
  }
  return arr
}
router.addRoutes(routerArr)
router.options.routes = [...router.options.routes, ...getRules(rules, routerArr)]

// router.beforeEach((to, from, next) => {
//   if (localStorage.getItem('user')) {
//     next()
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
export default router
