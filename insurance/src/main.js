// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from '@/router'
import store from '@/store'
import { AjaxPlugin } from 'vux'
var instance = AjaxPlugin.$http.create({
  transformRequest: [ data => {
    let strData = ''
    for (let key in data) {
      strData += key + '=' + JSON.stringify(data[key]) + '&'
    }
    strData = strData.slice(0, -1)
    return strData
  }]
})
Vue.prototype.$http = instance
FastClick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable no-new */
let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
// 添加一个响应拦截器
vm.$http.interceptors.response.use(function (response) {
  console.log('请求后')
  return Promise.resolve(response)
}, function ({response}) {
  console.log('请求后错误')
  if (response.status === 403) {
    vm.$router.push('/login')
  } else {
    // vm.$router.replace('/user')
    vm.$message.error(response.setCookie)
  }
  // Do something with response error
  return Promise.reject(response)
})

