import Vue from 'vue'
import Router from 'vue-router'

import layOut from 'com/layout'  // common  layout Components


const _import_com = file => () =>
  import ('com/' + file);
const _import_views = file => () =>
  import ('views/' + file);

Vue.use(Router)

export const defaultRouter = [{
    path: '/login',
    component: _import_views('Login')
  },
  {
    path: '/work',
    component: layOut,
    redirect: '/work/index',
    name: '工作台',
    meta: {
      title: 'work',
      icon: 'work'
    },
    children: [{
      path: '/work/index',
      component: _import_views('Work/index'),
      name: "代办"
    }, {
      path: '/work/datas',
      component: _import_views('Work/datas'),
      name: '数据'
    }]
  

  }, {
    path: '/source',
    component: layOut,
    redirect: '/source/rent',
    name: '资源',
    meta: {
      title: 'source',
      icon: 'source'
    },
    children: [{
      path: '/source/rent',
      component: _import_views('Source/rent'),
      name: '租客'
    }, {
      path: '/source/host',
      component: _import_views('Source/host'),
      name: '业主'
    }]
  }, 
// {
//     path: '/work',
//     component: _import_com('layout'),
//     redirect: '/work/work1',
//     name: '房态',
//     meta: {
//       title: 'work',
//       icon: 'work'
//     },
//     children: [{
//         path: '/work/work1',
//         component: _import_views("Work/work1"),
//         name: '房源',
//         meta: {
//           title: 'work1',
//           icon: 'work1'
//         }
//       },
//       {
//         path: '/work/work2',
//         component: _import_views("Work/work2"),
//         name: '可租',
//         meta: {
//           title: 'work2',
//           icon: 'work2'
//         }
//       },
//       {
//         path: '/work/work3',
//         component: _import_views("Work/work3"),
//         name: '推广',
//         meta: {
//           title: 'work3',
//           icon: 'work3'
//         }
//       }, {
//         path: '/work/work4',
//         component: _import_views("Work/work1"),
//         name: '智能门锁',
//         meta: {
//           title: 'work1',
//           icon: 'work1'
//         }
//       },
//       {
//         path: '/work/work5',
//         component: _import_views("Work/work2"),
//         name: '智能电表',
//         meta: {
//           title: 'work2',
//           icon: 'work2'
//         }
//       }, {
//         path: '/work/work6',
//         component: _import_views("Work/work3"),
//         name: '智能水表',
//         meta: {
//           title: 'work3',
//           icon: 'work3'
//         }
//       }
//     ]
//   },
//   {
//     path: '/fun',
//     component: _import_com('layout'),
//     name: '合同',
//     meta: {
//       title: 'fun',
//       icon: 'fun'
//     },
//     redirect: "/fun/index",
//     children: [{
//         name: '租客合同',
//         path: '/fun/index',
//         component: _import_views('Fun')
//       },
//       {
//         name: '业主合同',
//         path: '/fun/index1',
//         component: _import_views('Work/work1')
//       },
//       {
//         name: '租客合同审批',
//         path: '/fun/index2',
//         component: _import_views('Work/work2')
//       },
//       {
//         name: '业主合同审批',
//         path: '/fun/index3',
//         component: _import_views('Work/work3')
//       },
//       {
//         name: '租客合同审批权限',
//         path: '/fun/index4',
//         component: _import_views('Work/work1')
//       }, {
//         name: '业主合同审批权限',
//         path: '/fun/index5',
//         component: _import_views('Work/work2')
//       }
//     ]
//   },
//   {
//     path: '/caiwu',
//     component: _import_com('layout'),
//     redirect: '/caiwu/house',
//     name: '财务',
//     meta: {
//       title: 'movie',
//       icon: 'movie'
//     },
//     children: [{
//       name: '房屋',
//       path: '/caiwu/house',
//       component: _import_views('Movie'),
//     }, {
//       name: '运营',
//       path: '/caiwu/operative',
//       component: _import_views('Work/work1'),
//     }, {
//       name: '借还',
//       path: '/caiwu/borrow',
//       component: _import_views('Work/work2'),
//     }, {
//       name: '未知款',
//       path: '/caiwu/unkonwMoney',
//       component: _import_views('Work/work3'),
//     }, {
//       name: '日租',
//       path: '/caiwu/dayRent',
//       component: _import_views('Movie'),
//     }, {
//       name: '供应商结算',
//       path: '/caiwu/settlement',
//       component: _import_views('Work/work3'),
//     }, {
//       name: '水电费充值',
//       path: '/caiwu/recharge',
//       component: _import_views('Work/work2'),
//     }]
//   },
//   {
//     path: '/report',
//     component: _import_com('layout'),
//     name: '报表',
//     meta: {
//       title: 'book',
//       icon: 'book'
//     },
//     redirect: '/report/index',
//     children: [{
//       name: '综合报表',
//       path: '/report/index',
//       component: _import_views('Book'),

//     }]
//   }, {
//     path: '/performace',
//     component: _import_com('layout'),
//     name: '业绩',
//     redirect: '/performace/index',
//     meta: {
//       title: 'performace',
//       icon: 'book',
//     },
//     children: [{
//       path: '/performace/index',
//       name: '房源业绩',
//       component: _import_views('Book')
//     }, {
//       path: '/performace/config',
//       name: '业绩配置',
//       component: _import_views('Work/work2')
//     }, {
//       path: '/performace/history',
//       name: '历史业绩',
//       component: _import_views('Work/work3')
//     }]
//   }, {
//     path: '/after',
//     name: '租后',
//     component: _import_com('layout'),
//     redirect: '/after/fix',
//     meta: {
//       title: 'after',
//       icon: 'book',
//     },
//     children: [{
//         path: '/after/fix',
//         name: '维修服务',
//         component: _import_views('Work/work1')
//       },
//       {
//         path: '/after/clean',
//         name: '保洁服务',
//         component: _import_views('Work/work2')
//       }, {
//         path: '/after/complain',
//         name: '投诉服务',
//         component: _import_views('Work/work3')
//       }, {
//         path: '/after/distribution',
//         name: '配货管理',
//         component: _import_views('Work/work1')
//       }, {
//         path: '/after/supplier',
//         name: '供应商管理',
//         component: _import_views('Work/work2')
//       }, {
//         path: '/after/net',
//         name: '宽带订单',
//         component: _import_views('Work/work3')
//       }
//     ]
//   }, {
//     path: '/OA',
//     name: 'OA',
//     component: _import_com('layout'),
//     redirect: '/OA/index',
//     meta: {
//       title: 'OA',
//       icon: 'book',
//     },
//     children: [{
//         path: '/OA/index',
//         name: '考勤管理',
//         component: _import_views('Work/work1')
//       },
//       {
//         path: '/OA/leave',
//         name: '请假管理',
//         component: _import_views('Work/work2')
//       }, {
//         path: '/OA/leaveconfig',
//         name: '请假审批管理',
//         component: _import_views('Work/work3')
//       }
//     ]
//   }, {
//     path: '/company',
//     component: _import_com('layout'),
//     name: '企业',
//     meta: {
//       title: 'book',
//       icon: 'book'
//     },
//     redirect: '/company/index',
//     children: [{
//       name: '企业公告',
//       path: '/company/index',
//       component: _import_views('Book'),
//     },{
//       name: '资产管理',
//       path: '/company/assets',
//       component: _import_views('Work/work1'),
//     },{
//       name: '楼盘字典',
//       path: '/company/building',
//       component: _import_views('Work/work2'),
//     },{
//       name: '擂台管理',
//       path: '/company/arena',
//       component: _import_views('Work/work3'),
//     },{
//       name: '企业信息',
//       path: '/company/information',
//       component: _import_views('Work/work1'),
//     },{
//       name: '企业服务',
//       path: '/company/service',
//       component: _import_views('Work/work2'),
//     },{
//       name: 'Web',
//       path: '/company/web',
//       component: _import_views('Work/work3'),
//     },{
//       name: '黑名单管理',
//       path: '/company/blacklist',
//       component: _import_views('Work/work1'),
//     },{
//       name: '企业账号',
//       path: '/company/accout',
//       component: _import_views('Work/work2'),
//     },]
//   }, {
//     path: '/market',
//     component: _import_com('layout'),
//     name: '营销',
//     meta: {
//       title: 'book',
//       icon: 'book'
//     },
//     redirect: '/market/index',
//     children: [{
//       name: '会员',
//       path: '/market/index',
//       component: _import_views('Work/work1'),
//     }, {
//       name: '优惠活动',
//       path: '/market/sales',
//       component: _import_views('Work/work2'),
//     }]
//   }, {
//     path: '/config',
//     component: _import_com('layout'),
//     name: '设置',
//     meta: {
//       title: 'config',
//       icon: 'book'
//     },
//     redirect: '/config/apart',
//     children: [{
//       name: '部门管理',
//       path: '/config/apart',
//       component: _import_views('Work/work1'),
//     }, {
//       name: '角色管理',
//       path: '/config/role',
//       component: _import_views('Work/work2'),
//     }, {
//       name: '员工管理',
//       path: '/config/employee',
//       component: _import_views('Work/work3'),
//     }, {
//       name: '字典管理',
//       path: '/config/dictionary',
//       component: _import_views('Work/work1'),
//     }, {
//       name: '决策管理',
//       path: '/config/decition',
//       component: _import_views('Work/work2'),
//     }, {
//       name: '安全管理',
//       path: '/config/safe',
//       component: _import_views('Work/work3'),
//     }, {
//       name: '批量设置',
//       path: '/config/setting',
//       component: _import_views('Work/work1'),
//     },{
//       name: '支付管理',
//       path: '/config/pay',
//       component: _import_views('Work/work2'),
//     }]
  // }
  {
    path: '*',
    redirect: '/work'
  }
]


export default new Router({
  routes: defaultRouter
})
