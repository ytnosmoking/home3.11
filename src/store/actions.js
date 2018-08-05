import {
  getItem
} from 'utils/auth'
import {
  getPartMent,
  getPartUser
} from 'api/getPartment'

export default {
  getPartMent({
    commit
  }, partId) { // 全局方法  获得 部门
    return new Promise((resolve, reject) => {
      const params = {
        address: '',
        ct: '',
        desc: '',
        gcid: '0100099',
        id: '',
        isDelete: '1',
        name: '',
        pageNo: 1,
        pageSize: 10000,
        parent: '',
        phone: '',
        showIndex: '',
        totalRecord: -1,
        typeId: ''
      }
      const data = Object.assign({}, {
        params
      })
      console.log(partId)
      getPartMent(data).then(res => {
        if (res.status.code === '200') {
          commit('getPartMent', res.result.list)
          // resolve(res.result)
        }
      })
    })
  },
  getPartUser({
    commit
  }, partId) {
    return new Promise((resolve, reject) => {
      const params = {
        accountName: '',
        accountPwd: '',
        bankCard: '',
        bankCardName: '',
        bankNumber: '',
        becomeStatus: '',
        becomeTime: '',
        birthday: '',
        ct: '',
        developId: '',
        dptmId: partId,
        email: '',
        employeeNum: '',
        et: '',
        fAddress: '',
        gCId: getItem('gcid'),
        gender: '',
        grade: '',
        handleId: '',
        handleMan: '',
        id: '',
        idNumber: '',
        ifSuShe: '',
        ifTooRuZhi: '',
        inductionTime: '',
        instancyUserName: '',
        instancyUserPhone: '',
        instancyUserRelation: '',
        ip: '',
        jieShaoRen: '',
        lastDepartment: '',
        lat: '',
        lon: '',
        mountTime: '',
        msn: '',
        nickName: '',
        openBank: '',
        pageNo: 1,
        pageSize: 1000,
        phone: '',
        pic: '',
        qq: '',
        remark: '',
        roleId: '',
        rongyunToken: '',
        status: '',
        suSheName: '',
        surcess: '',
        totalRecord: -1,
        userLevelId: '',
        weixin: '',
        wenhuacd: '',
        zhaoPinRen: '',
        zhuJiao: ''
      }
      const data = Object.assign({}, {
        params
      })
      console.log(data)
      getPartUser(data).then(res => {
        console.log(res)
        if (res.status.code === '200') {
          commit('getPartUser', res.result.list)
        }
      })
    })
  }
}
