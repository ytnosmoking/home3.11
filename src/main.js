// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import { getItem } from "@/utils/auth"

// icons
import "./icons"
// css
import "animate.css"
import ElementUI from "element-ui"
import "assets/css/index.less"

import "element-ui/lib/theme-chalk/index.css"

// 过滤器
import * as filters from "./filters"

// 插件
import NProgress from "nprogress"
import "nprogress/nprogress.css" // progress bar style
import Vcalendar from "v-calendar" // 日历
import "v-calendar/lib/v-calendar.min.css"
// import echarts from 'echarts' // echarts 全局使用
// Vue.prototype.$echarts = echarts
Vue.use(Vcalendar)

const whiteList = ["/login"]; // 白名单

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration
router.beforeEach((to, from, next) => {
  // if (getItem('token')) {

  NProgress.start()
  // next()
  if (getItem("token")) {
    if (to.path === "/login") {
      next({ path: "/layout" })
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next("/login")
    }
    NProgress.done()
  }
})
router.afterEach(() => {
  NProgress.done()
})

Vue.use(ElementUI)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
})
