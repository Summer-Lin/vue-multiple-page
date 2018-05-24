import axios from "axios";
// import qs from "qs";
// import { Toast, Indicator } from "mint-ui";
// import router from "@/router";
// import util from "@/util/";


const Axios = axios.create({
  baseURL: "/", // 因为我本地做了反向代理
  timeout: 10000,
  responseType: "json",
  //withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    //  console.log("请求拦截开始");
    // Indicator.open({
    //   spinnerType: "fading-circle"
    // });
    // 在发送请求之前做某件事
    // if (
    //   config.method === "post" ||
    //   config.method === "put" ||
    //   config.method === "delete"
    // ) {
    //   // 序列化
    //   // config.data = qs.stringify(config.data);
    // }

    // 若是有做鉴权token , 就给头部带上token
    // if (localStorage.token) {
    //     config.headers.Authorization = localStorage.token;
    // }

    return config;
  },
  error => {
    //   console.log(error);
    // Toast({
    //   // 错误提醒
    //   message: error,
    //   position: "bottom"
    // });
    return Promise.reject(error);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    //  console.log("对响应数据做些事");
    // Indicator.close();
    //对响应数据做些事
    // if (res.data && res.data.code != "999") {
    //   // Toast({
    //   //   // 错误提醒
    //   //   message: res.data.message,
    //   //   position: "bottom"
    //   // });
    //   return Promise.reject(res.data.message);
    // }

    return res;
  },
  error => {
    // Indicator.close();
    // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
    // 直接丢localStorage或者sessionStorage
    // if (!window.localStorage.getItem("loginUserBaseInfo")) {
    //   // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
    //   // Toast({
    //   //   // 错误提醒
    //   //   message: "请重新登录",
    //   //   position: "bottom"
    //   // });
    //   // router.push({
    //   //   path: "/login"
    //   // });
    // } else {
    //   // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
    //   // let lifeTime =
    //   //   JSON.parse(window.localStorage.getItem("loginUserBaseInfo")).lifeTime *
    //   //   1000;
    //   //let nowTime = new Date().getTime(); // 当前时间的时间戳
    //   // console.log(nowTime, lifeTime);
    //   // console.log(nowTime > lifeTime);
    //   if (false) {
    //     // Toast({
    //     //   message: "登录状态信息过期,请重新登录",
    //     //   position: "bottom"
    //     // });
    //     // router.push({
    //     //   path: "/login"
    //     // });
    //   } else {
    //     //    console.log("请求响应失败");
    //     //      console.log(error.response);
    //     // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
    //     // if (error.response.status === 403) {
    //     //     router.push({
    //     //         path: "/error/403"
    //     //     });
    //     // }
    //     // if (error.response.status === 500) {
    //     //     router.push({
    //     //         path: "/error/500"
    //     //     });
    //     // }
    //     // if (error.response.status === 502) {
    //     //     router.push({
    //     //         path: "/error/502"
    //     //     });
    //     // }
    //     // if (error.response.status === 404) {
    //     //     router.push({
    //     //         path: "/error/404"
    //     //     });
    //     //}
    //     if (error.response.status === 500) {
    //       //    console.log(error.response);
    //       // Toast({
    //       //   // 错误提醒
    //       //   message: error.response.statusText,
    //       //   position: "bottom"
    //       // });
    //     }
    //     if (error.response.status === 504) {
    //       // Toast({
    //       //   // 错误提醒
    //       //   message: error.response.statusText,
    //       //   position: "bottom"
    //       // });
    //     }
    //   }
    // }
    // 返回 response 里的错误信息
    return Promise.reject(error);
  }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, "$axios", { value: Axios });
  }
};
