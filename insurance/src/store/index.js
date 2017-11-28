import Vuex from 'vuex'
import Vue from 'vue'
import product from './modules/product'
import login from './modules/login'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    product,
    login
  }
})
store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})
export default store
