import Mock from 'mockjs'
let count = 1
export default Mock.mock({
  'list|4': [
    {
      'id|+1': count,
      'txt|1': ['白菜价', '最后疯抢', '轻时尚', '淘宝订单']
    }
  ]
})
