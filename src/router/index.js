import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/view/login'
import register from '@/view/register'
import index from '@/view/index'
import add_vehicle from '@/view/add_vehicle'
import appointment_details from '@/view/appointment_details'
import exclusive_services from '@/view/exclusive_services'
import expert_online from '@/view/expert_online'
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
    },
    {
      path:'/appointment_details',
      name: 'appointment_details',
      component:appointment_details
    },
    {
      path:'/exclusive_services',
      name: 'exclusive_services',
      component:exclusive_services
    },
    {
      path:'/expert_online',
      name: 'expert_online',
      component:expert_online
    }

  ]
})
