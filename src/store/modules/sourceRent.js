import { getTable } from "api/source"
import { getItem } from "utils/auth"
export default {
  namespaced: true,
  state: {
    guRenterType: "0",
    guCustomerSource: "0",
    guSourceTypeName: "来源"
  },
  getters: {

  },
  mutations: {
    peopleType(state, payload) {
      console.log(payload)
      state.guRenterType = payload
      console.log(state)
    },
    guCustomerSource(state, payload) {
      console.log(payload)
      state.guCustomerSource = payload
      console.log(state)
    },
    guSourceTypeName(state, payload) {
      console.log(payload)
      state.guSourceTypeName = payload
    }
  },
  actions: {
    getTable({ commit, state }, tableInfo) {
      commit(tableInfo.tableInfo.typeName, tableInfo.tableInfo.value)
      return new Promise((resolve, reject) => {
        console.log(state)
        console.log(tableInfo)
        // const data = Object.assign({}, { params: {
        //   dateType:	2,
        //   departmentId: "",
        //   guCtEndDate: "",
        //   guCtStartDate: "",
        //   guCustomerSource: "",
        //   guImportanceTypeId: "",
        //   guImportanceTypeName:	"重视类型",
        //   guMaxMoney: "",
        //   guMinMoney: "",
        //   guNewStatus: 1,
        //   guNowCreateId: "",
        //   guRenterType:	2,
        //   guSourceTypeId: "",
        //   guSourceTypeName:	"来源",
        //   guXiaoquId: "",
        //   guXuqiuZhengZu: "",
        //   guXuqiuZuqi: "",
        //   keyWords: "",
        //   pageNo: 1,
        //   pageSize:	10,
        //   peopleType: "",
        //   sortFields:	"gu_ct_",
        //   sortType:	"desc",
        //   userid: getItem("userid")
        // }})
        // const data = { params: this.state.sourceRent }
        const data = Object.assign({}, { params: this.state.sourceRent }, { userid: getItem("userid") })
        console.log(data)
        getTable(data).then(res => {
          // console.log(res)
          if(res.status.code === "200") {
            resolve(res.result)
          }
        }).catch(err => {
          console.log(err)
        })
      })
    }
  }
}
