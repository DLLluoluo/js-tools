/**
 * 格式化时间
 * @param {Date对象} date 
 * @param {String} fmt //yyyy-MM-dd hh:mm:ss / yyyy-MM-dd / hh:mm:ss
 * @returns 
 */
 function formatDate(date, fmt) {
  const padLeftZero = function(str) {
    return ('00' + str).substr(str.length)
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    console.log(RegExp.$1, RegExp.$1.length)
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}
// 例子:
const currentTime = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
console.log(currentTime, '当前时间');



/**
 * 将时间戳转换成日期格式
 * @param {时间戳} timestamp 
 * @returns 
 */
function timestampToTime(timestamp) {
  var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  return Y+M+D+h+m+s;
}
console.log(timestampToTime(new Date().getTime())); //注意：如果是Unix时间戳记得乘以1000。比如：PHP函数time()获得的时间戳就要乘以1000。



/**
 * 将日期格式转换成时间戳
 */
 const date1 = new Date('2022-05-05 18:55:49');
 // (1) getTime
 const time1 = date1.getTime();
 // (2) valueOf
 const time2 = date1.valueOf();
 console.log(time1); // 1651748149000
 console.log(time2); // 1651748149000
