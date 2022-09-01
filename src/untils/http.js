import router from '@/router'
import axios from 'axios'
import { MessageBox } from 'element-ui'
// 引入token
import { getToken, removeToken } from './auth'

const http = axios.create({
  baseURL: '/',
  timeout: 3000,
  withCredentials: true, //开启跨域
  headers: {
    'Content-Type': 'multipart/form-data;charset=utf-8'
  }
})

// 请求拦截
http.interceptors.request.use(
  // 请求成功的回调
  (config) => {
    // 另外写法:config.headers.token
    config.headers['token'] = getToken()
    return config
  },
  // 请求失败回调
  (error) => {
    return error
  }
)

// 响应拦截
http.interceptors.response.use(
  // 响应成功的回调
  (response) => {
    if (response.data && response.data.status === 2) {
      // 401:token失效
      // token过期处理接口文档没有明确标识
      // removeToken()
      // router.push({name:'login'})
    }
    return response
  },
  // 失败的回调处理
  (error) => {
    let title = ''
    let message = ''
    if (error && error.response) {
      message = error.response.data.message

      // 401：token失效 跳转登录页面
      // if(error.response.data.status===2){
      // 	router.push({name:'login'})
      // }

      //跨域存在获取不到状态码的情况
      switch (error.response.status) {
        case 400:
          title = '错误请求'
          break
        case 401:
          title = '资源未授权'
          break
        case 403:
          title = '禁止访问'
          break
        case 404:
          title = '未找到所请求的资源'
          break
        case 405:
          title = '不允许使用该方法'
          break
        case 408:
          title = '请求超时'
          break
        case 500:
          title = '内部服务器错误'
          break
        case 501:
          title = '未实现'
          break
        case 502:
          title = '网关错误'
          break
        case 503:
          title = '服务不可用'
          break
        case 504:
          title = '网关超时'
          break
        case 505:
          title = 'HTTP版本不受支持'
          break
        default:
          title = error.response.status
      }
      // 跨域获取不到状态码或其他状态进行处理
      return MessageBox.alert(message, title, {
        type: 'warning'
      })
    } else {
      // 跨域获取不到状态码或者其他状态进行的处理
      return MessageBox.alert('请联系系统管理员，或稍后再试!', '未知错误', {
        type: 'error'
      })
    }
  }
)
export default http
