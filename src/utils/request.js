import axios from 'axios'
import {
  Message
} from 'element-ui'
import store from '@/store'
import { getItem } from '@/utils/auth'

const service = axios.create({
  baseURL: '/test',
  timeout: 5000  // request timeout
})

//  请求拦截
service.interceptors.request.use(config=> {
  if(store.getters.getToken&&store.getters.getGcid&&store.getters.getUserId) {
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
  return response
}, error => {
  console.log('error='+ error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5*1000
  })
  return Promise.reject(error)
})

export default service