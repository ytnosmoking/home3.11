import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import routes from './modules/routes'
import components from './modules/components'
import source from './modules/source'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    routes,
    components,
    source
  },
  state,
  getters,
  mutations,
  actions
})
export default store
