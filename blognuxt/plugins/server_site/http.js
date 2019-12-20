// http.js 封装 axios，防止多处打包
import Axios from "axios";
import config from "~/config";//引入配置文件

// 实例化 axios()
const http = Axios.create({
  baseURL: config.api,//根url
  timeout: 8000,
  validateStatus: function (status) {
    return status >= 200;
  }
});

// 定义错误异常方法
function LogicError (message, code, data) {
  this.message = message;
  this.code = code;
  this.data = data;
  this.name = "LogicError";
}

LogicError.prototype = new Error();
LogicError.prototype.constructor = LogicError;

// http 的request 请求
http.interceptors.request.use((data, headers) => {
  return data;
});

// http 的response 命令，失败的调用上边的失败异常方法
http.interceptors.response.use(response => {
  const data = response.data;
  switch (data.success) {
    case true:
      return data.data;
    default:
      throw new LogicError(data.msg);
  }
}, err => {
  throw new LogicError("网络请求错误");
});

export default http;// 输出http
