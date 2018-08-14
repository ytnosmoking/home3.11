import {
  getSth, // top
  getProduce,
  getSale,
  getBill, // center
  getMove,
  getClean,
  getFix,
  getComplain,
  getJoinRent, // footer
  getWholeRent,
  getCentralizeRent
} from 'api/work'
import { getTime } from 'utils/common'
const work = {
  namespaced: true,
  state: {
    showFlag: false,
    block: 'commission'
  },
  getters: {
    showFlag(state) {
      return state.showFlag
    },
    block(state) {
      return state.block
    }
  },
  mutations: {
    showFlag(state) {
      // let promise = new Promise)_
      state.showFlag = !state.showFlag
    },
    showCommission(state, payload) {
      console.log(payload)
      state.block = payload.block
    },
    showNotice(state, payload) {
      state.block = payload.block
    }
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
    },
    getJoinRent({ state, commit }) {
      return new Promise((resolve, reject) => {
        let params = { sendData: new Date() }
        params = Object.assign({}, { params })
        getJoinRent(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result)
          }
          reject(res)
        }).catch(err => reject(err))
      })
    },
    getWholeRent({ state, commit }) {
      return new Promise((resolve, reject) => {
        let params = { sendData: new Date() }
        params = Object.assign({}, { params })
        getWholeRent(params).then(res => {
          if (res.status.code === '200') {
            resolve(res.result)
          }
          reject(res)
        }).catch(err => reject(err))
      })
    },
    getCentralizeRent({ state, commit }) {
      return new Promise((resolve, reject) => {
        let params = { sendData: Date.now() }
        params = Object.assign({}, { params })
        getCentralizeRent(params).then(res => {
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
