// ES6API转成常用语法插件
import "babel-polyfill";
import Vue from 'vue'
import App from './index.vue'
import router from './router'
// 引入lib-flexible进行rem
import 'lib-flexible/flexible.js'
// 引入fastclick解决300ms问题
import fastclick from 'fastclick'
// 初始化样式
import '../../../static/css/reset.css'
// 使用二次封装axios
import axiosPlugin from "@/assets/js/index";
Vue.use(axiosPlugin);

// import axios from "axios";
// Vue.prototype.$axios = axios

// 模拟ajax请求数据
require('@/api/Mock.js')
// render函数渲染的公共子组件，尝试
import '@/assets/js/components'

Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: { App },
  template: '<App/>'
})
