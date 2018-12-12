import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import monitor from '@/views/monitor/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [{
        path: '/index/monitor',
        name: 'monitor',
        component: monitor
      }]
    },
    {
      path: '*',
      redirect: '/index/monitor'
    }
  ]
})
