import request from '@/utils/request'
/**
 * @desc 获得资源 租客
 * @param  data
 */
export function getTable(data) {
  return request({
    url: 'v2/meet/guest_source_pools/get_list',
    method: 'post',
    data
  })
}
/**
 * @desc 来源列表
 * @param data  来源mark
 */
export function getFrom (data) {
  return request({
    url: 'v2/sys/zi_dian/get_list_by_mark',
    method: 'post',
    data
  })
}

/**
 * @desc getCity_by_gcid
 */
export function getCity(data) {
  return request({
    url: '/v2/location/city/get_ctiy_by_gcid',
    method: 'post',
    data
  })
}

/**
 * @desc  getTown_by_city_id
 * @param {data}
 */
export function getTown(data) {
  return request({
    url: '/v2/location/town/get_list',
    method: 'post',
    data
  })
}

/**
 * @desc  getTown_by_city_id
 * @param {data}
 */
export function getCountry(data) {
  return request({
    url: '/v2/location/district/get_list',
    method: 'post',
    data
  })
}