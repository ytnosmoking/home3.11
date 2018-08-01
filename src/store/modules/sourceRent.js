import {
  getTable,
  getFrom,
  getCity,
  getTown
} from "api/source"
import {
  getItem
} from "utils/auth"
export default {

  namespaced: true,
  state: {
    // currentPage: 1, // 当前页面
    tableData: [], // 表格数据
    totalPage: 1, // 总页数
    totalRecord: 1, // 总数
    tableInfo: {
      guRenterType: "2", // 私客 2 公客 1 预约 3
      peopleType: "", // 筛选类型 0 跟进人1  录入人2
      departmentId: "", // 部门Id
      guNowCreateId: "", // 部门人员Id
      guDistrictId: "", // 区域Id
      guTownId: "", // 城镇Id
      guCityId: "", // 城市Id
      guXiaoquId: "", // 小区Id
      guCustomerSource: "", // 来源类型 0 公司 1 个人2
      guImportanceTypeName: "重视类型", // 重视类型 重环境 重交通
      guImportanceTypeId: "", // 重视类型 ID
      guSourceTypeName: "来源", // 来源  委托  网络
      guSourceTypeId: "", // 来源Id
      guXuqiuZhengZu: "", // 整租 1 合租 2 床位 3
      guNewStatus: "1", // 全部0 正常1 我租2 他租3 已退4 无效5
      dataType: "2", // 入住 1 录入 2 跟进3
      guCtStartDate: "", // 开始
      guCtEndDate: "", // 结束
      guXuqiuZuqi: "", // 租期
      guMinMoney: "", // 最低价格
      guMaxMoney: "", // 最高价格
      keyWords: "", // 输入 搜索
      sortType: "desc", // 倒序 desc 正序asc
      sortFields: "gu_ct_",
      pageNo: 1,
      pageSize: "10",
      userid: getItem("userid")
    }
  },
  getters: {
    pageNo(state) {
      return state.tableInfo.pageNo
    },
    tableData(state) {
      return state.tableData
    },
    totalPage(state) {
      return state.totalPage
    },
    totalRecord(state) {
      return state.totalRecord
    }
  },
  mutations: {
    pageNo(state, payload) {
      console.log(payload)
      if (Object.prototype.toString.call(payload) === "[object Object]") {
        state.tableInfo.pageNo = payload.val
      } else {
        state.tableInfo.pageNo = payload
      }
    },
    tableData(state, payload) {
      state.tableData = payload
    },
    totalPage(state, payload) {
      state.totalPage = payload
    },
    totalRecord(state, payload) {
      state.totalRecord = payload
    },
    guRenterType(state, payload) { // 私客 2 公客 1 预约 3
      state.tableInfo.guRenterType = payload
    },
    peopleType(state, payload) { // 筛选类型 0 跟进人1  录入人2
      state.tableInfo.peopleType = payload
    },
    departmentId(state, payload) { // 部门
      if (Object.prototype.toString.call(payload) === "[object Object]") {
        state.tableInfo.departmentId = payload.value
      } else {
        state.tableInfo.departmentId = payload
      }
      // state.tableInfo.departmentId = payload
    },
    guNowCreateId(state, payload) { // 人员
      state.tableInfo.guNowCreateId = payload
      if (Object.prototype.toString.call(payload) === "[object Object]") {
        state.tableInfo.guNowCreateId = payload.value
      } else {
        state.tableInfo.guNowCreateId = payload
      }
    },
    guCustomerSource(state, payload) { // 来源类型 0 公司 1 个人2
      state.tableInfo.guCustomerSource = payload
    },
    guImportanceTypeName(state, payload) { // 重视类型 重环境 重交通  重租金
      state.tableInfo.guImportanceTypeName = payload.value
    },
    guImportanceTypeId(state, payload) { // 重视类型 ID
      state.tableInfo.guImportanceTypeId = payload
    },
    guSourceTypeName(state, payload) { // 来源0  委托 1 网络2
      state.tableInfo.guSourceTypeName = payload.value
    },
    guSourceTypeId(state, payload) { // 来源Id
      console.log(payload)
      state.tableInfo.guSourceTypeId = payload
    },
    guXuqiuZhengZu(state, payload) { // 整租 1 合租 2 床位 3
      state.tableInfo.guXuqiuZhengZu = payload
    },
    guNewStatus(state, payload) { // 全部0 正常1 我租2 他租3 已退4 无效5
      state.tableInfo.guNewStatus = payload
    },
    getDatatype(state, payload) {
      state.tableInfo.dataType = payload.dataType
    },
    guTime(state, payload) {
      console.log(payload)
      state.tableInfo.guCtStartDate = payload.time[0]
      state.tableInfo.guCtEndDate = payload.time[1]
    },
    guXuqiuZuqi(state, payload) {
      state.tableInfo.guXuqiuZuqi = payload
    },
    guMaxMoney(state, payload) {
      console.log(payload)
      state.tableInfo.guMaxMoney = payload.value
      console.log(state.tableInfo)
    },
    guMinMoney(state, payload) {
      state.tableInfo.guMinMoney = payload.value
      console.log(state.tableInfo)
    }
    // pageNo(state, payload) { // 页数
    //   state.tableInfo.pageNo = payload + ""
    // }
  },
  actions: {
    getTable({
      commit,
      state
    }, tableInfo) { // 获得表格数据
      console.log(tableInfo)
      if (tableInfo && !isEmpty(tableInfo.tableInfo)) {
        console.log(11111)
        commit(tableInfo.tableInfo.typeName, tableInfo.tableInfo.value)
      }
      return new Promise((resolve, reject) => {
        console.log(state)
        const params = Object.assign({}, state.tableInfo)
        const data = Object.assign({}, {
          params
        })
        console.log(data)
        getTable(data).then(res => {
          // console.log(res)
          if (res.status.code === "200" || res.status.code === 200) {
            resolve(res.result)
            const tableList = res.result;
            commit("pageNo", tableList.pageNo)
            commit("totalPage", tableList.totalPage)
            commit("totalRecord", tableList.totalRecord)
            commit("tableData", tableList.list)
          }
        }).catch(err => {
          console.log(err)
        })
      })
    },
    //  获得来源
    getFrom({
      commit,
      state
    }, value) {
      return new Promise((resolve, reject) => {
        const params = {
          mark: value.mark
        }
        const data = Object.assign({}, {
          params
        })
        getFrom(data).then(res => {
          if (res.status.code === "200") {
            resolve(res.result)
          }
        }).catch(err => {
          console.log(err)
        })
      })
    },
    //  获得重要类型
    getImportant({
      commit,
      state
    }, value) {
      return new Promise((resolve, reject) => {
        const params = {
          mark: value.mark
        }
        const data = Object.assign({}, {
          params
        })
        getFrom(data).then(res => {
          if (res.status.code === "200") {
            resolve(res.result)
          }
        }).catch(err => {
          console.log(err)
        })
      })
    },
    getRent({
      commit,
      state
    }, value) {
      return new Promise((resolve, reject) => {
        const params = {
          mark: value.mark
        }
        const data = Object.assign({}, {
          params
        })
        getFrom(data).then(res => {
          if (res.status.code === "200") {
            resolve(res.result)
          }
        }).catch(err => {
          console.log(err)
        })
      })
    },
    getCity({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        const data = Object.assign({
          params: {
            gcid: getItem("gcid")
          }
        })
        getCity(data).then(res => {
          if (res.status.code === "200") {
            resolve(res.result)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    getTown({ commit, state }, value) {
      return new Promise((resolve, reject) => {
        console.log(value)
        getTown(value)
      })
    }
  }
}

function isEmpty(obj) {
  if (!obj && obj !== 0 && obj !== "") {
    return true;
  }
  return false
}
