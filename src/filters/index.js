export function strParse(str, length = 10) {
  if (length > 10 && str.length > 10) {
    str = str.substr(0, length) + "...";
  }
  return str
}

//  转化 公客 私客户
export function changeCode (code) {
  if (code === "1") {
    return "转为私客"
  } else {
    return "转为公客"
  }
}