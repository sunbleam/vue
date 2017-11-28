export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    GetLogin () {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/test-login').then(res => {
          resolve(res)
        })
      })
    },
    GetUserInfo () {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/user/info').then(res => {
          resolve(res)
        })
      })
    }
  }
}
