export function strParse(str, length = 10) {
  if (length > 10 && str.length > 10) {
    str = str.substr(0, length) + "...";
  }
  return str
}