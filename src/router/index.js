import Vue from 'vue'
import Router from 'vue-router'

import layOut from 'components/layout' // common  layout Components

// const _import_com = file => () =>
//   import ("com/" + file);
const _importView = file => () =>
  import ('views/' + file);

Vue.use(Router)

export const defaultRouter = [{
  path: '/login',
  component: _importView('Login')
}, {
    path: '/work',
    component: layOut,
    redirect: '/work/index',
    name: '工作台',
    meta: {
      title: 'work',
      icon: 'work'
    },
    children: [{
      path: '/work/index',
      component: _importView('Work/index'),
      name: '代办'
    }, {
      path: '/work/datas',
      component: _importView('Work/datas'),
      name: '数据'
    }]
  },
{
  path: '/source',
  component: layOut,
  redirect: '/source/rent',
  name: '资源',
  meta: {
      title: 'source',
      icon: 'source'
    },
  children: [{
      path: '/source/rent',
      component: _importView('Source/rent'),
      name: '租客'
    }, {
      path: '/source/host',
      component: _importView('Source/host'),
      name: '业主'
    }]
},
{
  path: '*',
  redirect: '/work'
}
]

export default new Router({
  routes: defaultRouter
})
