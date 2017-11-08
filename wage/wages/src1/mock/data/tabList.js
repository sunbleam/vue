import mockjs from 'mockjs'
let tabList = []
for (let i = 0; i < 200; i++) {
  tabList.push({
    id: i,
    name: mockjs.Random.cname(),
    tel: mockjs.mock(/\d{11}/),
    states: mockjs.Random.integer(0, 2),
    team: mockjs.Random.cword(5)
  })
}
export default tabList
