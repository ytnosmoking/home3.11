import Mock from ''
const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduce: 'superAdmin',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduce: 'I\'m editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}


export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body) 
  }
}