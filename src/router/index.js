import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Layout from '@/views/layout/Layout';
// ---constantRouterMap
// import Login from '@/views/Login'  // 登陆
// import Dashboard from '@/views/dashboard' // 仪表板
// import Documentation from '@/views/documentation' // 文档
// import Guide from '@/views/guide'  // 指导页


// ---asyncRouterMap
 /* permission */
// import Permission from '@/views/permission'
// import pagePermission from '@/views/permission/page'
import directivePermission from '@/views/permission/directive'
/* chart */
import keyboardChart from '@/views/chart/keyboard'
import lineChart from '@/views/chart/line'
import mixChart from '@/views/chart/mix'




export const constantRouterMap = [{
  path: '/login',
  component: () => import('@/views/Login'),
  hidden: true
}, {
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard'),
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
    component: () => import('@/views/documentation'),
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
    component: ()=>import('@/views/guide'),
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
      component: () => import('@/views/permission/page'),
      name: 'pagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin']
      }
    }, {
      path: 'directive',
      component:()=> import('@/views/permission/directive'),
      name: 'directivePermission',
      meta: {
        title: 'directivePermission'
      }
    }]
  },
  {
    path:'/icon',
    component: Layout,
    children:[{
      path: 'index',
      component: () => import('@/views/svg-icons/index'),
      name: 'icons',
      meta: {
        title: 'icons',
        icon: 'icon',
        noCache: true
      }
    }]
  },
  // components-demo
  {
    path: '/components',
    component:Layout,
    redirect:'noredirect',
    name: 'components-demo',
    meta: {
      title: 'components',
      icon: 'component'
    },
    children:[{
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'tinymce-demo',
      meta: {
        title: 'tinymce'
      }
    },
    {
      path: 'markdown',
      component: () =>
            import('@/views/components-demo/markdown'),
      name: 'markdown-demo',
      meta: {
        title: 'markdown'
      }
    },
    {
      path: 'count-to',
      component: () =>
            import('@/views/components-demo/countTo'),
      name: 'countTo-demo',
      meta: {
        title: 'countTo'
      }
    },
    {
      path: 'mixin',
      component: () =>
            import('@/views/components-demo/mixin'),
      name: 'componentMixin-demo',
      meta: {
        title: 'componentMixin'
      }
    }
  ]
  },
  // tab
  {
    path: '/tab',
    component: Layout,
    children: [{
      path: 'index',
      component: () => {
       return import('@/views/tab')
      },
      name: 'tab',
      meta: {
        title: 'tab',
        icon: 'tab'
      }
    }]
  },
  //table
  {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'table',
    meta: {
      title: 'Table',
      icon: 'table'
    },
    children:[{
      path: 'drag-table',
      component: () =>
            import('@/views/table/dragTable'),
      name: 'dragTable',
      meta: {
        title: 'dragTable'
      }
    },{
      path: 'complex-table',
      component: () =>
            import('@/views/table/complexTable'),
      name: 'complexTable',
      meta: {
        title: 'complexTable'
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
        component: () => import('@/views/chart/keyboard'),
        name: 'keyboardChart',
        meta: {
          title: 'keyboardChart',
          noCache: true
        }
      }, {
        path: 'line',
        component: () => import('@/views/chart/line'),
        name: 'lineChart',
        meta: {
          title: 'lineChart',
          noCache: true
        }
      },
      {
        path: 'mixchart',
        component: () => import('@/views/chart/mix'),
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


