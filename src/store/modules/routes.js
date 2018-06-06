import { defaultRouter } from "@/router";

export default {
  state: {
    userRouter: []
  },
  getters: {
    
  },
  mutations: {
    getRouters: state => {
      state.userRouter = defaultRouter
    }
  }
}