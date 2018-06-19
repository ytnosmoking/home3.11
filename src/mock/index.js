import Mock from 'mockjs'
import loginApi from './login'
import transactionAPI from './transaction'


Mock.mock("/login/login", "post", loginApi.loginByUsername)
Mock.mock("/login/logout", "post", loginApi.logout)
Mock.mock(/\/user\/info\.*/, "get", loginApi.getUserInfo)


Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

export default Mock