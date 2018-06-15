import {
  constantRouterMap,
  asyncRouterMap
} from '../../router';

/**
 * 通过meta.roles 判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    // 针对 meta.roles 中 是否 有admin editor 来判断当前路由权限
    return roles.some(role => route.meata.roles.indexOf(roles) >= 0)
  } else {
    // 默认 返回true部分路由 都有权限 
    return true
  }
}

/**
 * 递归过滤异步路由表  返回符合用户角色的权限路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}


const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTES: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        const {
          roles
        } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = asyncRouterMap
        }
        commit('SET_ROUTES', accessedRouters)
        resolve()
      }, reject => {
        reject("111")
      })
    }
  }
}

export default permission
