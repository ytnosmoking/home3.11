import {
  getSth,
  getProduce,
  getSale,
  getBill,
  getMove,
  getClean,
  getFix,
  getComplain
} from 'api/work'
import { getTime } from 'utils/common'
const work = {
  namespaced: true,
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    // top
    getSth({
      state,
      commit
    }, params) {
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
    getProduce({
      state,
      commit
    }, params) {
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
    getSale({
      state,
      commit
    }, params) {
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
    },
    // center
    getBill({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        let params = {
          indentType: '1',
          predictTimeEnd: getTime(7),
          predictTimeStrat: getTime(),
          type: '1'
        }
        params = Object.assign({}, { params })
        getBill(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result)
          }
          reject(res)
        }).catch(err => reject(err))
      })
    },
    getMove({ state, commit }) {
      return new Promise((resolve, reject) => {
        let params = { sendData: new Date() }
        params = Object.assign({}, { params })
        getMove(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result)
          }
          reject(res)
        }).catch(err => reject(err))
      })
    },
    getClean({ state, commit }) {
      return new Promise((resolve, reject) => {
        let params = { sendData: new Date() }
        params = Object.assign({}, { params })
        getClean(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result)
          }
          reject(res)
        }).catch(err => reject(err))
      })
    },
    getFix({ state, commit }) {
      return new Promise((resolve, reject) => {
        let params = { sendData: new Date() }
        params = Object.assign({}, { params })
        getFix(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result)
          }
          reject(res)
        }).catch(err => reject(err))
      })
    },
    getComplain({ state, commit }) {
      return new Promise((resolve, reject) => {
        let params = { sendData: new Date() }
        params = Object.assign({}, { params })
        getComplain(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result)
          }
          reject(res)
        }).catch(err => reject(err))
      })
    }
  }
}
export default work
