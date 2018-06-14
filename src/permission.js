// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import router from './router'
import store from './store'
import { Message } from 'element-ui'
// ------进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
// 方法库 获取token
import {
  getItem
} from '@/utils/auth'

// cssc 动画 ui css

// ----------------
const whiteList = ["/login"]; // 白名单

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration
router.beforeEach((to, from, next) => {
  
  NProgress.start()
  if (getItem('token')) {
    if (to.path === "/login") {
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        // 拉去用户角色
        store.dispatch('GetUserInfo').then(res => {
          const roles = res.data.roles
          // 获取用户路由状态 防止刷新 清除vuex
          store.dispatch('GenerateRoutes',{roles}).then(()=>{
            
          })
        }).catch(err=>{
          console.log(err)
        })
      }
      next()
    }
  } else {
    console.log(111)
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})

