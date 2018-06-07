import {
  loginByUsername
} from '@/api/login'
import {
  setItem
} from '@/utils/auth'

const user = {
  state: {
    token: '',
    gcid: '',
    userid: ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_GCID(state, gcid) {
      state.gcid = gcid
    },
    SET_USERID(state, userid) {
      state.userid = userid
    }
  },
  actions: {
    LoginByUsername({
      commit
    }, userinfo) {
      // const username = userinfo.name.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(userinfo).then(res => {
          console.log(res)
          if (res.status.code == 200) {
            let data = res.result
            setItem("gcid", userinfo.gcid); //gcid
            setItem("chaoJiName", userinfo.accountName); //管理员账号
            setItem("JJuserOperateTime", new Date().getTime()); //当前登录时间
            setItem("currentJJRUser", JSON.stringify(data));
            setItem('token', data.token)
            commit('SET_GCID', userinfo.gcid)
            commit('SET_TOKEN', data.token)
            commit('SET_USERID', data.id)
          }
          resolve(res)
        }).catch(error => {
          console.log(error)
        })
      })
    }
  }
}

export default user
