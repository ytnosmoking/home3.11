import request from "@/utils/request"
/**
 * @desc 获得资源 租客
 * @param  data
 */
export function getTable(data) {
  return request({
    url: "v2/meet/guest_source_pools/get_list",
    method: "post",
    data
  })
}