// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import router from './router'
import store from './store'
import {
  Message
} from 'element-ui'
// ------进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
// 方法库 获取token
import {
  getItem,
  removeItem
} from '@/utils/auth'

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration
// cssc 动画 ui css

// ----------------
const whiteList = ["/login"]; // 白名单



function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}


router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getItem('token')) {
    // has token 
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
          console.log(roles)
          // 获取用户路由状态 防止刷新 清除vuex
          store.dispatch('GenerateRoutes', {
            roles
          }).then(() => {
            // alert(1)
            console.log(to)
            console.log(router)
            router.addRoutes(store.getters.addRouters)
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch(err => {
          // alert(3)
          console.log(err)
          removeItem('token')
          next({
            path: '/'
          })
        })
      }
      else {
        // alert(2)
        if(hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/login'})
        }
      }
    }
  } else {
    // has no token 
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
