// 引入express
const express = require('express')
// 引入mock
const Mock = require('mockjs')
// 登录
const login = require('./common/login.json')
// 菜单
const menu = require('./common/menus.json')
// 实例化express
const app = express()
// 登录接口
app.use('/user/login/', function (req, res) {
  res.json(
    Mock.mock({
      code: 200,
      msg: '登录成功',
      login
    })
  )
})

// 菜单接口
app.use('/home/menus/', function (req, res) {
  res.json(
    Mock.mock({
      code: 200,
      msg: '获取菜单成功',
      menu
    })
  )
})
// 实例化监听的接口
app.listen(8080, () => {
  console.log('监听接口 8080')
})
