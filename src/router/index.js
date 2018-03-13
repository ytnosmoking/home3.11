import Vue from 'vue'
import Router from 'vue-router'

import LayOut from '@/components/LayOut/LayOut'

import Index from '@/views/index'
import DashBoard from '@/views/DashBoard'

const _import_com =  file => () => import('@/components/'+file+'.vue');
const _import_views = file => () => import('@/views/'+file+'.vue');

Vue.use(Router)

export const defaultRouter =  [
  {
    path: '',
    redirect: 'layout'
    // name: 'layout',
    // component: _import_com('LayOut/LayOut')
  }, {
    path: '/layout',
    name: 'layout',
    component: _import_com('LayOut/LayOut'),
    redirect:"/layout/layout",
    children:[{
      name: 'layout.index',
      path: 'layout',
      component: _import_views('index')
    }]
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: _import_com('LayOut/LayOut'),
    redirect: '/dashboard/dashboard',
    children: [{
      name: 'dashboard.index',
      path: 'dashboard',
      component: _import_views('DashBoard')
    }]
  }
]


export default new Router({
  routes:defaultRouter
})
