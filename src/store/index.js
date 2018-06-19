import Vue from 'vue'
import Vuex from 'vuex'


import app from './modules/app'
import errorLog from './modules/errorLog'
import user from './modules/user'
import routes from './modules/routes'
import components from './modules/components'
// import {actions} from './actions'
import permission from './modules/permission'
import tagsView from './modules/tagsView'

import getters from './getters'
Vue.use(Vuex)



 const store = new Vuex.Store({
  modules:{
    app,
    errorLog,
    user,
    tagsView,
    permission
  },
  getters
  // actions
})
export default store