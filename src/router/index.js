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
<<<<<<< HEAD
    redirect:"/layout/layout",
    children:[{
      path: 'layout',
=======
    redirect:"/layout/user",
    children:[{
      path: 'user',
>>>>>>> bf2adbf1ff57ce93743073cfcb0d7654d80fcfe2
      name: 'layout.user',
      component: _import_views('index')
    }]
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: _import_com('LayOut/LayOut'),
<<<<<<< HEAD
    redirect: '/dashboard/dashboard',
    children: [{
      name: 'dashboard.index',
      path: 'dashboard',
=======
    redirect: '/dashboard/user',
    children: [{
      name: 'dashboard.user',
      path: 'user',
>>>>>>> bf2adbf1ff57ce93743073cfcb0d7654d80fcfe2
      component: _import_views('DashBoard')
    }]
  }
]


export default new Router({
  routes:defaultRouter
})
