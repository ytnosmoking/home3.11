import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import routes from './modules/routes'
// import {actions} from './actions'

Vue.use(Vuex)



 const store = new Vuex.Store({
  modules:{
    user,
    routes
  }
  // actions
})
export default store