import dialog from '@/views/login/login'
export default {
  install (Vue, options) {
    let Profile = Vue.extend(dialog)
    let newProfile = new Profile()
    // let newProfile = ''
    Vue.prototype.dialog = {
      // show () {
      //   if (!newProfile) {
      //     newProfile = new Profile()
      //     newProfile.$mount('#login')
      //   }
      //   newProfile.show()
      // },
      // hide () {
      //   newProfile.hide()
      // }
      alert (content, opts) {
        Object.assign(newProfile, {
          type: 1,
          title: '信息',
          content: content,
          ...opts
        })
        document.body.appendChild(newProfile.$mount().$el)
      },
      confirm (content, opts = {}) {
        Object.assign(newProfile, {
          type: 1,
          title: '信息',
          content: content,
          time: 0,
          btns: ['确定', '取消'],
          ...opts
        })
        document.body.appendChild(newProfile.$mount().$el)
      },
      msg (content, time = 4000) {
        Object.assign(newProfile, {
          type: 2,
          content: content,
          time: time
        })
        document.body.appendChild(newProfile.$mount().$el)
      }
    }
  }
}
