import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import routes from './modules/routes'
// import {actions} from './actions'
import getters from './getters'
Vue.use(Vuex)



 const store = new Vuex.Store({
  modules:{
    user,
    routes
  },
  getters
  // actions
})
export default store