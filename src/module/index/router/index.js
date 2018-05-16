import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (resolve) => {
  import('@/module/index/pages/Home').then((module) => {
    resolve(module)
  })
}

const Logistics = (resolve) => {
  import('@/module/index/pages/Logistics').then((module) => {
    resolve(module)
  })
}
const Test = (resolve) => {
  import('@/module/index/pages/Test').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/logistics',
      name: 'Logistics',
      component: Logistics
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
