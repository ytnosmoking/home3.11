import Mock from 'mockjs'
import loginApi from './login'


Mock.mock("/login/login", "post", loginApi.loginByUsername)
Mock.mock("/login/logout", "post", loginApi.logout)
Mock.mock(/\/user\/info\.*/, "get", loginApi.getUserInfo)



export default Mock