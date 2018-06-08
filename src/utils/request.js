import axios from 'axios'
import {
  Message
} from 'element-ui'
import store from '@/store'
import { getItem } from '@/utils/auth'

let BASE_URL = process.env.NODE_ENV ==="production"? "http://test.fqweb.pms.efanghang.com":"/test"

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 5000  // request timeout
})

import {
  Loading
} from 'element-ui'

let loadingService

//  请求拦截
service.interceptors.request.use(config=> {
  loadingService = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  if(store.getters.getToken&&store.getters.getGcid&&store.getters.getUserId) {
    config.headers['token'] = store.getters.getToken
    config.headers['gcid'] = store.getters.getGcid
    config.headers['userid'] = store.getters.getUserId
  }else if(getItem('token')&&getItem('gcid')&&getItem('userid')){
    config.headers['token'] = getItem('token')
    config.headers['gcid'] = getItem('gcid')
    config.headers['userid'] = getItem('userid')
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 返回数据拦截

service.interceptors.response.use(response=> {
  loadingService.close()
  console.log(response)
  return response.data
}, error => {
  loadingService.close()
  console.log('error='+ error)
  Message({
    message: error.message,
    type: 'error',
    duration: 3*1000
  })
  return Promise.reject(error)
})

export default service