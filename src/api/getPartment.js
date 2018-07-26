import request from "@/utils/request"
/**
 * @desc 获得资源 租客
 * @param  data
 */
export function getPartMent(data) {
  return request({
    url: "v2/sys/department/get_list",
    method: "post",
    data
  })
}