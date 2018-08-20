import request from '@/utils/request'
// top
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

export function getNotice(data) {
  return request({
    url: 'v2/company/company_notice/get_by_id',
    method: 'post',
    data
  })
}

export function getAllNoticeStyle(data) {
  return request({
    url: 'v2/sys/zi_dian/get_list_by_mark',
    method: 'post',
    data
  })
}
// center
export function getBill(data) {
  return request({
    url: 'v2/balance/table_balance_sheet/get_compact_count',
    method: 'post',
    data
  })
}

export function getMove(data) {
  return request({
    url: 'v2/compact/chengzu/status_count',
    method: 'post',
    data
  })
}

export function getClean(data) {
  return request({
    url: 'v2/rentservice/table_clean/get_status_count',
    method: 'post',
    data
  })
}

export function getFix(data) {
  return request({
    url: 'v2/rentservice/table_web_repair/get_status_count',
    method: 'post',
    data
  })
}

export function getComplain(data) {
  return request({
    url: 'v2/rentservice/complaint_letter/get_status_count',
    method: 'post',
    data
  })
}

// footer
export function getJoinRent(data) {
  return request({
    url: 'v2/house/part_house/get_count_by_status',
    method: 'post',
    data
  })
}

export function getWholeRent(data) {
  return request({
    url: 'v2/house/full_house/get_count_by_status',
    method: 'post',
    data
  })
}

export function getCentralizeRent(data) {
  return request({
    url: 'v2/house/focus_house/get_count_by_status',
    method: 'post',
    data
  })
}