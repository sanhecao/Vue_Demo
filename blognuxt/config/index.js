const config = {
  //开发环境配置，开发的时候
  development: {
    //api: "http://localhost:58427/api/",
   // api: "http://apk.neters.club/api/"
    api: "http://localhost:2223/api/"
  },
  //生产环境配置，部署的时候
  production: {
    api: ""
  }
};
//获取当前环境变量,是 production或者development
module.exports = config[process.env.NODE_ENV];
