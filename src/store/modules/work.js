
import { getSth, getProduce, getSale } from 'api/work'

const work = {
  namespaced: true,
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    getSth({ state, commit }, params) {
      return new Promise((resolve, reject) => {
        getSth(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result.list)
          }
          reject(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getProduce({ state, commit }, params) {
      return new Promise((resolve, reject) => {
        getProduce(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result.list)
          }
          reject(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getSale({ state, commit }, params) {
      return new Promise((resolve, reject) => {
        getSale(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result)
          }
          reject(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
export default work