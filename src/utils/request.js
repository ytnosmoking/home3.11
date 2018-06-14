import axios from 'axios'
import {
  Message
} from 'element-ui'
import store from '@/store'
import {
  getItem
} from '@/utils/auth'

let BASE_URL = process.env.NODE_ENV === "production" ? "http://test.fqweb.pms.efanghang.com" : "/test"

const service = axios.create({
  // baseURL: BASE_URL,
  baseURL: process.env.BASE_API,
  timeout: 5000 // request timeout
})

import {
  Loading
} from 'element-ui'

let loadingService

//  请求拦截
service.interceptors.request.use(config => {
  
  loadingService = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  // 让每个请求 带上token

  if(store.getters.token) {
    config.headers['token'] = getItem('token')
  }
  return config
}, error => {
  
  Promise.reject(error)
})

// 返回数据拦截

service.interceptors.response.use(response => {
  loadingService.close()
  // 状态拦截 处理 300 500 状态
  return response
  
}, error => {
  loadingService.close()
  console.log('error=' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 3 * 1000
  })
  return Promise.reject(error)
})

export default service
