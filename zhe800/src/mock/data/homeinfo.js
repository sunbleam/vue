import Mock from 'mockjs'
let count = 1
export default Mock.mock({
  'info|20': [
    {
      'id|+1': count,
      'num|1-2': 2,
      'txt': '@csentence(5)'
    }
  ]
})
