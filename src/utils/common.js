export function getTime(dayCount = '') {
  const time = new Date()
  time.setDate(time.getDate() + dayCount)
  const year = time.getFullYear()
  let month = time.getMonth() + 1
  month = month > 9 ? month : '0' + month
  let day = time.getDate()
  day = day > 9 ? day : '0' + day
  return `${year}-${month}-${day}`
}

