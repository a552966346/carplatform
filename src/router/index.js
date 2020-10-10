import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/view/login'
import register from '@/view/register'
import index from '@/view/index'
import add_vehicle from '@/view/add_vehicle'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name: 'login',
      component:login
    },
    {
      path:'/register',
      name: 'register',
      component:register
    },
    {
      path:'/index',
      name: 'index',
      component:index
    },
    {
      path:'/add_vehicle',
      name: 'add_vehicle',
      component:add_vehicle
    }

  ]
})
