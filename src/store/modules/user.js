import {
  loginByUsername,
  logout,
  getUserInfo
} from '@/api/login'
import {
  setItem,
  getItem,
  removeItem
} from '@/utils/auth'

const user = {
  state: {
    token: getItem("token"),
    roles:[],
    name: "",
    avatar: "",
    introduction: ""
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_NAME(state, name) {
      state.name = name
    },
    SET_AVATAR(state, avatar) {
      state.avatar = avatar
    },
    SET_INTRODUCTION(state, introduction) {
      state.introduction = introduction
    },
    SET_ROLES( state, roles) {
      state.roles = roles
    }
  },
  actions: {
    LoginByUsername({
      commit
    }, userinfo) {
      // const username = userinfo.name.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(userinfo.username, userinfo.password).then(res => {
          const data = res.data
          commit('SET_TOKEN', data.token)
          setItem('token', data.token)
          resolve()
        }).catch(error => {
          console.log(error)
        })
      })
    },
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          if(!response.data) { // mockjs 不支持自定义状态码
            reject('error')
          }
          const data = response.data
          if(data.roles && data.roles.length>0) {
            commit('SET_ROLES', data.roles) 
          }else {
            reject('getInfo: roles must be a non-null array!')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default user
