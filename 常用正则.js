/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 只允许输入正整数或小数点后两位 */
export function validatePositiveIntegerTwoPoint(str) {
  // const reg = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/; //只允许输入正整数或小数点后两位的数字
  const reg = /^(([0-9]|([1-9][0-9]{0,9}))((\.[0-9]{1,2})?))$/;  //只允许输入大于等于0或小数点后两位的数字
  return reg.test(str)
}

/* 只允许输入正整数 */
export function validatePositiveInteger(str) {
  const reg = /^[0-9]*[1-9][0-9]*$/;
  return reg.test(str)
}

/* 只允许输入大于或等于0的整数 */
export function validateEqualZeroInteger(str) {
  const reg = /^[0-9]*[0-9][0-9]*$/;
  return reg.test(str)
}

/* 只允许输入正负整数和0 */
export function validateIntegerDigitsZero(str) {
  const reg = /^-$|^-?[0-9][0-9]*$/;
  return reg.test(str)
}

/* 只允许输入非0的正整数 */
export function validateNonZeroPositiveInteger(str) {
  const reg = /^\+?[1-9][0-9]*$/;
  return reg.test(str)
}
