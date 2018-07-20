import {
  loginByUsername
} from "@/api/login"
import {
  setItem
} from "@/utils/auth"

const user = {
  namespaced: true,
  state: {
    token: "",
    gcid: "",
    userid: ""
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
    },
    getFilterStyle(state, payload) {
      console.log(`this is in users`)
    }
  },
  actions: {
    LoginByUsername({
      commit
    }, payload) {
      let userinfo = payload.value
      console.log(userinfo)
      // const username = userinfo.name.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(userinfo).then(res => {
          console.log(res)
          console.log(userinfo)
          if (res.status.code === "200") {
            const data = res.result
            setItem("gcid", userinfo.gcid); // gcid
            setItem("chaoJiName", userinfo.accountName); // 管理员账号
            setItem("JJuserOperateTime", new Date().getTime()); // 当前登录时间
            setItem("currentJJRUser", JSON.stringify(data));
            setItem("token", data.token)
            setItem("userid", data.id)
            commit("SET_GCID", userinfo.gcid)
            commit("SET_TOKEN", data.token)
            commit("SET_USERID", data.id);
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
