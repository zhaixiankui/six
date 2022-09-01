/**
 * 管理端axios插件
 */
import axios from 'axios'
import { Notification, MessageBox, Message } from 'element-ui'

axios.defaults.headers['Content-Type'] = 'multipart/form-data;charset=utf-8'
// 创建axios实例
const http = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_CONSOLE_URL,
  // 超时
  timeout: 10000
})
// request拦截器
http.interceptors.request.use(
  // (config) => {

  // if () {
  //   config.headers['Authorization'] = 'Bearer ' + // 让每个请求携带自定义token
  // }
  // return config
  // },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    const code = res.data.code
    if (code === 401) {
      MessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录',
        '系统提示',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {})
    } else if (code !== 200) {
      Notification.error({
        title: res.data.msg
      })
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  (error) => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default http
