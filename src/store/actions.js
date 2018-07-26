import { getPartMent } from "api/getPartment"

export default {
  getPartMent({ commit }, partId) {
    return new Promise((resolve, reject) => {
      const params = {
        address: "",
        ct: "",
        desc: "",
        gcid: "0100099",
        id: "",
        isDelete: "1",
        name: "",
        pageNo: 1,
        pageSize: 10000,
        parent: "",
        phone: "",
        showIndex: "",
        totalRecord: -1,
        typeId: ""
      }
      const data = Object.assign({}, { params })
      console.log(partId)
      getPartMent(data).then(res => {
        console.log(res)
        if (res.status.code === "200") {
          resolve(res.result)
        }
      })
    })
  }
}