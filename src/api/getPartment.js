import request from '@/utils/request'
/**
 * @desc 获得资源 租客 部门
 * @param  data
 */
export function getPartMent(data) {
  return request({
    url: 'v2/sys/department/get_list',
    method: 'post',
    data
  })
}

/**
 * @desc 获得 部门下面  用户
 * @param userId
 */
export function getPartUser(data) {
  return request({
    url: 'v2/sys/table_jjr_user/search_list_by_nick_name',
    method: 'post',
    data
  })
}