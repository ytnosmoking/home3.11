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
    path: '/login',
    component: _import_views('Login')
  },
  {
    path: '/layout',
    component: _import_com('LayOut'),
    redirect: '/layout/index',
    name: '工作台',
    meta: {
      title: 'layout',
      icon: 'layout'
    },
    children: [{
      path: 'index',
      component: _import_views('index'),
      name: "代办"

    }, {
      path: 'datas',
      component: _import_views('index'),
      name: '数据'
    }]
  }, {
    path: '/dashboard',
    component: _import_com('LayOut'),
    redirect: '/dashboard/rentUser',
    name: '资源',
    meta: {
      title: 'dashboard',
      icon: 'dashboard'
    },
    children: [{
      path: 'rentUser',
      component: _import_views('DashBoard'),
      name: '租客'
    }, {
      path: 'houseUser',
      component: _import_views('DashBoard'),
      name: '业主'
    }]
  }, {
    path: '/work',
    component: _import_com('LayOut'),
    redirect: '/work/work1',
    name: '房态',
    meta: {
      title: 'work',
      icon: 'work'
    },
    children: [{
        path: 'work1',
        component: _import_views("Work/work1"),
        name: '房源',
        meta: {
          title: 'work1',
          icon: 'work1'
        }
      },
      {
        path: 'work2',
        component: _import_views("Work/work2"),
        name: '可租',
        meta: {
          title: 'work2',
          icon: 'work2'
        }
      },
      {
        path: 'work3',
        component: _import_views("Work/work3"),
        name: '推广',
        meta: {
          title: 'work3',
          icon: 'work3'
        }
      }, {
        path: 'work1',
        component: _import_views("Work/work1"),
        name: '智能门锁',
        meta: {
          title: 'work1',
          icon: 'work1'
        }
      },
      {
        path: 'work2',
        component: _import_views("Work/work2"),
        name: '智能电表',
        meta: {
          title: 'work2',
          icon: 'work2'
        }
      }, {
        path: 'work3',
        component: _import_views("Work/work3"),
        name: '智能水表',
        meta: {
          title: 'work3',
          icon: 'work3'
        }
      }
    ]
  },
  {
    path: '/fun',
    component: _import_com('LayOut'),
    name: '娱乐',
    meta: {
      title: 'fun',
      icon: 'fun'
    },
    redirect: "/fun/index",
    children: [{
      name: '娱乐1',
      path: 'index',
      component: _import_views('Fun')
    }]
  },
  {
    path: '/movie',
    component: _import_com('LayOut'),
    redirect: '/movie/movie',
    name: '电影',
    meta: {
      title: 'movie',
      icon: 'movie'
    },
    children: [{

      path: 'movie',
      component: _import_views('Movie'),

    }]
  },
  {
    path: '/book',
    component: _import_com('LayOut'),
    name: '图书',
    meta: {
      title: 'book',
      icon: 'book'
    },
    redirect: '/book/book',
    children: [{

      path: 'book',
      component: _import_views('Book'),

    }]
  }, {
    path: '*',
    redirect: '/layout'
  }
]


export default new Router({
  routes: defaultRouter
})
