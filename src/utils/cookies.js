/*
 * @Author: your name
 * @Date: 2022-01-17 16:14:59
 * @LastEditTime: 2022-01-17 18:11:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-components/src/utils/cookies.js
 */
import lock from "./base64.js";
var cookies = {};
cookies.setCookie = function (c_name, value, expiredays) {
  if (value) {
    var enValue = lock.utf16to8(lock.encode64(value));
  } else {
    // var enValue = "";
  }
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name +
    "=" +
    enValue +
    (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
};
cookies.getCookie = function (c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      var c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return lock.utf8to16(
        lock.decode64(document.cookie.substring(c_start, c_end))
      );
    }
  }
  return "";
};
cookies.clearCookie = function (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = cookies.getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};
export default cookies;
