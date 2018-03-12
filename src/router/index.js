import Vue from 'vue'
import Router from 'vue-router'

import LayOut from '@/components/LayOut/LayOut'

import Index from '@/views/index'
import DashBoard from '@/views/DashBoard'

const _import_com =  file => () => import('@/components/'+file+'.vue');
const _import_views = file => () => import('@/views/'+file+'.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      // redirect: '/index'
      name: 'layout',
      component: _import_com('LayOut/LayOut')
    }, {
      path: '/index',
      name: 'index',
      component: _import_com('LayOut/LayOut'),
      redirect:"/index/user",
      children:[{
        path: 'user',
        name: 'index.user',
        component: _import_views('index')
      }]
    }, {
      path: '/dashboard',
      name: 'dashboard',
      component: _import_com('LayOut/LayOut'),
      redirect: '/dashboard/user',
      children: [{
        name: 'dashboard.user',
        path: 'user',
        component: _import_views('DashBoard')
      }]
    }
  ]
})
