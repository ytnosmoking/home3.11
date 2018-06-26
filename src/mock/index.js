import Mock from 'mockjs'
import loginApi from './login'
import transactionAPI from './transaction'


import articleApi from './article'

Mock.mock(/\/login\/login/, "post", loginApi.loginByUsername)
Mock.mock(/\/login\/logout/, "post", loginApi.logout)
Mock.mock(/\/user\/info\.*/, "get", loginApi.getUserInfo)


// article
Mock.mock(/\/article\/list/, 'get', articleApi.getList)
Mock.mock(/\/article\/detail/, 'get', articleApi.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleApi.getPv)
Mock.mock(/\/article\/create/, 'post', articleApi.createArticle)
Mock.mock(/\/article\/update/, 'post', articleApi.updateArticle)


// search


// bill
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

export default Mock