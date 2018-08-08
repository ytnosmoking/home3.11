import request from '@/utils/request'

export function getSth(data) {
  return request({
    url: 'v2/employee/time_manager/get_list',
    method: 'post',
    data
  })
}

export function getProduce(data) {
  return request({
    url: 'v2/company/company_notice/get_list_console',
    method: 'post',
    data
  })
}

export function getSale(data) {
  return request({
    url: 'v2/reportforms/over_all_situation/this_month_type_Data',
    method: 'post',
    data
  })
}