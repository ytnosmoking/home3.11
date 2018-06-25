import Mock from 'mockjs'
import loginApi from './login'
import transactionAPI from './transaction'


import articleApi from './article'

Mock.mock("/login/login", "post", loginApi.loginByUsername)
Mock.mock("/login/logout", "post", loginApi.logout)
Mock.mock(/\/user\/info\.*/, "get", loginApi.getUserInfo)


// article
Mock.mock(/\/article\/list/, 'get', articleApi.getList)


Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

export default Mock