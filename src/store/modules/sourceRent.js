import { getTable } from "api/source"
import { getItem } from "utils/auth"
export default {
  namespaced: true,
  state: {
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
      dataType: "2",  // 入住 1 录入 2 跟进3
      guCtStartDate: "", // 开始
      guCtEndDate: "", // 结束
      guXuqiuZuqi: "", // 租期
      guMinMoney: "", // 最低价格
      guMaxMoney: "", // 最高价格
      keyWords: "", // 输入 搜索
      sortType: "desc", // 倒序 desc 正序asc
      sortFields: "gu_ct_",
      pageNo: "1",
      pageSize: "10",
      userid: getItem("userid")
    }
  },
  getters: {

  },
  mutations: {
    guRenterType(state, payload) { // 私客 2 公客 1 预约 3
      state.tableInfo.guRenterType = payload
    },
    peopleType(state, payload) { // 筛选类型 0 跟进人1  录入人2
      state.tableInfo.peopleType = payload
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
    pageNo(state, payload) { // 页数
      state.tableInfo.pageNo = payload + ""
    }
  },
  actions: {
    getTable({ commit, state }, tableInfo) {
      console.log(tableInfo)

      commit(tableInfo.tableInfo.typeName, tableInfo.tableInfo.value)
      return new Promise((resolve, reject) => {
        console.log(state)
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
        console.log(state)
        const params = Object.assign({}, state.tableInfo)
        const data = Object.assign({}, { params })
        // console.log(data)
        getTable(data).then(res => {
          // console.log(res)
          if (res.status.code === "200") {
            resolve(res.result)
          }
        }).catch(err => {
          console.log(err)
        })
      })
    }
  }
}
