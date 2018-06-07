import { defaultRouter } from "@/router";

export default {
  state: {
    userRouter: [],
    childRoutes : []
  },
  
  mutations: {
    getRouters: state => {
      state.userRouter = defaultRouter
    },
    SAVE_CHILD_ROUTES: (state, childRoutes) => {
      state.childRoutes = childRoutes
    }
  }
}