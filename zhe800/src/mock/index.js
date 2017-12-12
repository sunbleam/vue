import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import list from './data/list.js'
import slider from './data/slider.js'
import spelist from './data/speList'
import speContent from './data/speContent'
import homeinfo from './data/homeinfo'
import city from './data/city'
const mock = new MockAdapter(axios)
export default {
  fn () {
    mock.onGet('/api/listData').reply(config => {
      return new Promise((resolve, reject) => {
        resolve([200, list])
      })
    })
    mock.onGet('/api/sliderData').reply(config => {
      return new Promise((resolve, reject) => {
        resolve([200, slider])
      })
    })
    mock.onGet('/api/spelistData').reply(config => {
      return new Promise((resolve, reject) => {
        resolve([200, spelist])
      })
    })
    mock.onGet('/api/speContentData').reply(config => {
      return new Promise((resolve, reject) => {
        resolve([200, speContent])
      })
    })
    mock.onGet('/api/homeinfo').reply(config => {
      let id = config.params.id
      let data = homeinfo.info.filter(v => {
        if (v.id === Number(id)) {
          return v
        }
      })
      return new Promise((resolve, reject) => {
        resolve([200, data[0]])
      })
    })
    mock.onGet('/api/cityData').reply(config => {
      return new Promise((resolve, reject) => {
        resolve([200, city])
      })
    })
  }
}
