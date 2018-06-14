
import { constantRouterMap, asyncRouterMap } from '../../router';

const permission = {
  state:{
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
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if(roles.indexOf('admin')>=0) {
          accessedRouters = asyncRouterMap
        }else {
          accessedRouters = asyncRouterMap
        }
        commit('SET_ROUTES', accessedRouters)
        resolve()
      },reject=> {
        reject("111")
      })
    }
  }
}

export default permission
