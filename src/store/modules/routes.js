import { constantRouterMap } from "@/router";
import { setItem} from '@/utils/auth'
export default {
  state: {
    userRouter: [],
    childRoutes : []
  },
  
  mutations: {
    getRouters: state => {
      state.userRouter = constantRouterMap
    },
    SAVE_CHILD_ROUTES: (state, childRoutes) => {
      state.childRoutes = childRoutes
      if(childRoutes!==[]) {
        setItem('navRoutes',JSON.stringify(childRoutes))
      }
    }
  }
}