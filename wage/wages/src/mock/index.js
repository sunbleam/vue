import axios from '@/utils/http.js'
import MockAdapter from 'axios-mock-adapter'
import tabList from './data/tabList'
import rules from './data/rules'
import login from './data/user'
let mock = new MockAdapter(axios)
console.log(rules)
console.log(login)
mock.onGet('/api/tabList').reply(config => {
  let data = tabList.splice(0, 20)
  return [200, data]
})
mock.onPost('/api/login').reply(config => {
  let info = JSON.parse(config.data)
  for (let item of login) {
    if (item.username === info.username && item.password === Number(info.password)) {
      return [200, item.type]
    }
  }
})
// import tabList from './data/tabList'
// export default tabList
