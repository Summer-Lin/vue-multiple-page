import Vue from 'vue'
import Backend from './backend.vue'
import router from './router'
// import router from '../../router/backend'
// 初始化样式
// import '../../../static/css/reset.css'
// 使用二次封装axios
import axiosPlugin from "@/assets/js/index";
Vue.use(axiosPlugin);

// import axios from "axios";
// Vue.prototype.$axios = axios

// 模拟ajax请求数据
// require('@/api/Mock.js')
// render函数渲染的公共子组件，尝试
import '@/assets/js/components'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#backend',
  router,
  components: { Backend },
  template: '<Backend/>'
})
