import mock from 'mockjs'
export default mock.mock({
  'city|20': [{
    'province': '@province',
    'pid|1-20': 20,
    'city|10': [{
      'city': '@city',
      'cid|1-100': 100
    }]
  }]
})
