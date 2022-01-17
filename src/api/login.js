/*
 * @Author: cui
 * @Date: 2022-01-17 17:35:58
 * @LastEditTime: 2022-01-17 17:45:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-1.0/src/api/login.js
 */
import service from "../utils/http";

export function login(data) {
  return service({
    url: "/api/h5login.do",
    method: "post",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data,
  });
}
