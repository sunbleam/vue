// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import list from './mock'
import router from './router'
import './fonts/iconfont.css'
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(mintUi)
Vue.config.productionTip = false
Vue.config.baseUrl = 'https://www.baidu.com'
if (process.env.NODE_ENV === 'development') {
  Vue.config.baseUrl = ''
  list.fn()
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
