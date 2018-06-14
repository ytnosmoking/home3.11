import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import routes from './modules/routes'
import components from './modules/components'
// import {actions} from './actions'
import permission from './modules/permission'

import getters from './getters'
Vue.use(Vuex)



 const store = new Vuex.Store({
  modules:{
    user,
    routes,
    components,
    permission
  },
  getters
  // actions
})
export default store