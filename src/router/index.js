import Vue from 'vue'
import Router from 'vue-router'

import LayOut from '@/components/LayOut'

import Index from '@/views/index'
import DashBoard from '@/views/DashBoard'

const _import_com = file => () =>
  import ('@/components/' + file);
const _import_views = file => () =>
  import ('@/views/' + file);

Vue.use(Router)

export const defaultRouter = [{
  path:'/login',
  component:_import_views('Login')
},{
    path: '',
    component: _import_com('LayOut'),
    redirect: 'layout',
    children: [{
      path: 'layout',
      component: _import_views('index'),
      name: '首页',
      meta: {
        title: 'layout',
        icon: 'layout'
      }
    }]
  }, {
    path: '/dashboard',


    component: _import_com('LayOut'),
    // redirect: '/dashboard/dashboard',
    redirect: 'noredirect',
    children: [{
      name: '公共',
      path: 'dashboard',
      component: _import_views('DashBoard'),
      meta: {
        title: 'dashboard',
        icon: 'dashboard'
      },
    }]
  }, {
    path: '/work',
    component: _import_com('LayOut'),
    redirect: 'noredirect',
    name: 'work',
    meta: {
      title: 'work',
      icon: 'work'
    },
    children: [{
        path: '/work/work1',
        component: _import_views("Work/work1"),
        name: 'work1',
        meta: {
          title: 'work1',
          icon: 'work1'
        },
        children: [{
          path: 'work3',
          component: _import_views("Work/work3"),
          name: 'work3',
          meta: {
            title: 'work3',
            icon: 'work3'
          }
        }]
      },
      {
        path: 'work2',
        component: _import_views("Work/work2"),
        name: 'work2',
        meta: {
          title: 'work2',
          icon: 'work2'
        }
      }
    ]
  },
  {
    path: '/fun',
    component: _import_com('LayOut'),
    redirect: "/fun/index",
    children: [{
      name: '娱乐',
      meta: {
        title: 'fun',
        icon: 'fun'
      },
      path: 'index',
      component: _import_views('Fun')
    }]
  },
  {
    path: '/movie',


    component: _import_com('LayOut'),
    // redirect: '/dashboard/dashboard',
    redirect: 'noredirect',
    children: [{
      name: '电影',
      path: 'movie',
      component: _import_views('Movie'),
      meta: {
        title: 'movie',
        icon: 'movie'
      },
    }]
  },
  {
    path: '/book',


    component: _import_com('LayOut'),
    // redirect: '/dashboard/dashboard',
    redirect: 'noredirect',
    children: [{
      name: '图书',
      path: 'book',
      component: _import_views('Book'),
      meta: {
        title: 'book',
        icon: 'book'
      },
    }]
  }
]


export default new Router({
  routes: defaultRouter
})
