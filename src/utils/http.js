/*
 * @Author: cui
 * @Date: 2022-01-17 10:24:34
 * @LastEditTime: 2022-01-17 18:11:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /t11-protal/src/utils/http.js
 */

import Axios from "axios";
// import { ElMessage } from 'element-plus'
import cookies from "@/utils/cookies";

// const baseURL = 'http://office-qa.myt11.com'
const axios = Axios.create({
  baseURL: "",
  timeout: 20000, // 请求超时 20s
});
// axios.defaults.withCredentials = true
if (cookies.getCookie("token")) {
  axios.defaults.headers.common["Authorization"] = cookies.getCookie("token");
} else if (sessionStorage.getItem("token")) {
  axios.defaults.headers.common["Authorization"] =
    sessionStorage.getItem("token");
}
axios.defaults.headers.common["platform"] = "ios";
// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      // const code = error.response.status;
      // const msg = error.response.data.message;
      // ElMessage.error(`Code: ${code}, Message: ${msg}`)
      // console.error(`[Axios Error]`, error.response);
    } else {
      // ElMessage.error(`${error}`)
    }
    return Promise.reject(error);
  }
);

export default axios;
