import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Layout from '@/views/layout/Layout';

const _import_com = file => () =>
  import ('@/components/' + file);
const _import_views = file => () =>
  import ('@/views/' + file);





export const constantRouterMap = [{
  path: '/login',
  component: _import_views('Login\/index'),
  hide: true
}]


export const asyncRouterMap = {
  
}


export default new Router({
  routes: constantRouterMap
})
