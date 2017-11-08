const express = require('express')
const bodyParser = require('body-parser')
// var cors = require('cors')
const app = express()
const connect = require('./dbUtil/index')
const cookie = require('cookie-parser')
const resSend = require('./dbUtil/resSend')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookie())
//app.use(cors())
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*'); //需要显示设置来源
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials",true); //带cookies
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.post('/api/login', (req, res) => {
  const {
    username,
    password
  } = req.body
  let sql = 'select * from login where adminName=? and adminPwd=?'
  connect.query(sql, [
    username,
    password
  ], (error, result) => {
    console.log(result)
    if (error) {
      console.log('失败')
    } else {
      if (result.length >= 1) {
        res.cookie('token', 'alwayssunshineeverthing', { expires: new Date(Date.now() + 90000000), httpOnly: true });
        res.send(result[0]);
      } else {
        res.status(401).send({
          msg: '用户名密码错误'
        })
      }
    }
  })
})
app.get('/api/tabList', (req, res) => {
  const {
    page=0,
    pageSize=2,
    filters
  } = req.query
  let filterObj = JSON.parse(filters)
  let data = []
  let sql = 'select count(*) num from user'
  if (filterObj) {
    if (filterObj.status) {
      sql = 'select count(*) num from user where status = ?'
    }
  }
  if (filterObj.status) {
    data.push(filterObj.status+"")
  } 
  // let sql = 'select * from user order by id desc limit ?,?'
  connect.query(sql, data, (error, result) => {
    if (error) {
    } else {
      let nums = result[0].num
      let sqlStr = ''
      if (filterObj) {
        if (filterObj.status) {
          sqlStr = 'where'
          for (let key in filterObj) {
            sqlStr += ' ' + key + '="' + filterObj[key] + '" and'
          }
          sqlStr = sqlStr.replace(/(and$)/, '')
        }
      }
      sql = 'select * from user '
      sql += sqlStr + 'order by id desc limit ?,?'
      // sql = 'select * from user order by id desc limit ?,?'
      connect.query(sql, [
        page * pageSize,
        parseInt(pageSize)
      ], (error, result) => {
        if (error) {
          console.log('失败', 222)
        } else {
          resSend(req, res, {
            count: nums,
            data: result
          })
        }
      })
    }
  })
})
app.post('/api/addStaff', (req, res) => {
  const {
    name,
    cname,
    team,
    position,
    money,
    tel
  } = req.body
  let sql = 'insert into user (name, cname, team, position, money, tel) values (?, ?, ?, ?, ?, ?)'
  connect.query(sql, [
    name,
    cname,
    team,
    position,
    money,
    tel
  ], (error, result) => {
    if (error) {
      console.log('失败')
    } else {
      resSend(req, res, result)
    }
  })
})
app.post('/api/updataList', (req, res) => {
  const {
    status,
    id
  } =  req.body
  let sql = 'update user set status = ? where id = ?'
  connect.query(sql, [
    status+"",
    id+""
  ], (error, result) => {
    if (error) {
      console.log('失败')
    } else {
      resSend(req, res, result)
    }
  })
})
app.get('/api/home', (req, res) => {
  resSend(req, res, {
    msg: 'success'
  })
})
app.listen(3000)
