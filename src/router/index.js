import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Layout from '@/views/layout/Layout';
// ---constantRouterMap
import Login from '@/views/Login'  // 登陆
import Dashboard from '@/views/dashboard' // 仪表板
import Documentation from '@/views/documentation' // 文档
import Guide from '@/views/guide'  // 指导页


// ---asyncRouterMap
 /* permission */
import Permission from '@/views/permission'
import pagePermission from '@/views/permission/page'
import directivePermission from '@/views/permission/directive'
/* chart */
import keyboardChart from '@/views/chart/keyboard'
import lineChart from '@/views/chart/line'
import mixChart from '@/views/chart/mix'




export const constantRouterMap = [{
  path: '/login',
  component: Login,
  hidden: true
}, {
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    path: 'dashboard',
    component: Dashboard,
    name: 'dashboard',
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      noCache: true
    }
  }]
}, {
  path: '/documentation',
  component: Layout,
  redirect: '/documentation/index',
  children: [{
    path: 'index',
    component: Documentation,
    name: 'documentation',
    meta: {
      title: 'documentation',
      icon: 'documentation',
      noCache: true
    }
  }]
}, {
  path: '/guide',
  component: Layout,
  redirect: '/guide/index',
  children: [{
    path: 'index',
    component: Guide,
    name: 'guide',
    meta: {
      title: 'guide',
      icon: 'guide',
      noCache: true
    }
  }]
}]

export default new Router({
  routes: constantRouterMap
})


export const asyncRouterMap = [
  //  PERMISSION
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true,
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor']
    },
    children: [{
      path: 'page',
      component: pagePermission,
      name: 'pagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin']
      }
    }, {
      path: 'directive',
      component: directivePermission,
      name: 'directivePermission',
      meta: {
        title: 'directivePermission'
      }
    }]
  },
  //  CHARTS
  {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'charts',
    meta: {
      title: 'charts',
      icon: 'chart'
    },
    children: [{
        path: 'keyboard',
        component: keyboardChart,
        name: 'keyboardChart',
        meta: {
          title: 'keyboardChart',
          noCache: true
        }
      }, {
        path: 'line',
        component: lineChart,
        name: 'lineChart',
        meta: {
          title: 'lineChart',
          noCache: true
        }
      },
      {
        path: 'mixchart',
        component: mixChart,
        name: 'mixChart',
        meta: {
          title: 'mixChart',
          noCache: true
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]


