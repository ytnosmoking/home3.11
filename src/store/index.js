import Vue from "vue"
import Vuex from "vuex"

import user from "./modules/user"
import routes from "./modules/routes"
import components from "./modules/components"
import sourceRent from "./modules/sourceRent"
// import {actions} from './actions'
import getters from "./getters"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    routes,
    components,
    sourceRent
  },
  getters
  // actions
})
export default store
