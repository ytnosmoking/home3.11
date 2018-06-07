const getters = {
  getToken: state => state.user.token,
  getGcid: state => state.user.gcid,
  getUserId: state => state.user.userid,
  getChildRoutes: state => state.routes.childRoutes
}

export default getters