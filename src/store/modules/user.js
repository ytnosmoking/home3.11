import {
  loginByUsername
} from '@/api/login'
import {
  setItem
} from '@/utils/auth'

const user = {
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    LoginByUsername({
      commit
    }, userinfo) {
      // const username = userinfo.name.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(userinfo).then(res => {
          let data = res.data.result
          setItem("gcid", userinfo.gcid); //gcid
          // setItem("token", userinfo.); //gcid
          setItem("chaoJiName", userinfo.accountName); //管理员账号
          setItem("JJuserOperateTime", new Date().getTime()); //当前登录时间
          setItem("currentJJRUser",data);
          console.log(data)
          resolve()
        }).catch(error => {
          console.log(error)
        })
      })
    }
  }
}

export default user
