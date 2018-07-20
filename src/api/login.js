import request from "@/utils/request"

export function loginByUsername(data) {
  return request({
    url: "/v2/jjr_user_login/pc_login_new",
    method: "post",
    data
  })
}
