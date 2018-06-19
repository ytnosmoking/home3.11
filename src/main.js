// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// cssc 动画 ui css

import 'normalize.css/normalize.css'
import 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.less' // global css

import App from './App'
import router from './router'
import store from './store'


Vue.use(ElementUI)

// icons svg 组件
import './icons'
import './permission'
import './mock' //拦截请求  发送数据

import * as filters from './filters'


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
