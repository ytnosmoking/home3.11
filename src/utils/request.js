import axios from 'axios'
import {
  Message
} from 'element-ui'
import store from '@/store'
import {
  getItem
} from '@/utils/auth'

const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://test.fqweb.pms.efanghang.com' : '/test'

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 50000 // request timeout
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

  if (store.getters.getToken && store.getters.getGcid && store.getters.getUserId) {
    config.headers['token'] = store.getters.getToken
    config.headers['gcid'] = store.getters.getGcid
    config.headers['userid'] = store.getters.getUserId

    config.data['token'] = store.geDtters.getToken
    config.data['gcid'] = store.geDtters.getGcid
    config.data['userid'] = store.geDtters.getUserId
  } else if (getItem('token') && getItem('gcid') && getItem('userid')) {
    //  请求头 带上 token gcid userid
    config.headers['token'] = getItem('token')
    config.headers['gcid'] = getItem('gcid')
    config.headers['userid'] = getItem('userid')
    //  请求数据带上 token gcid userid
    config.data['token'] = getItem('token')
    config.data['gcid'] = getItem('gcid')
    config.data['userid'] = getItem('userid')
  }
  // console.log(config)
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 返回数据拦截

service.interceptors.response.use(response => {
  loadingService.close()
  // console.log(response)
  return response.data
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
