module.exports = (req, res, data) => {
  if (req.cookies.token) {
    res.send(data)
  } else {
    res.status(403).send({
      msg: '请登录'
    })
  }
}