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
import personal_center from '@/view/personal_center'
import repair_maintenance from '@/view/repair_maintenance'
import store_details from '@/view/store_details'
import quality_film from '@/view/quality_film'
import Film from '@/view/Film'
import payment from '@/view/payment'
import cosmetology from'@/view/cosmetology'
import examination from '@/view/examination'
import detailed from '@/view/detailed'
import exchange from '@/view/exchange'
import rule from '@/view/rule'
import tyre from '@/view/tyre'
import integral from '@/view/integral'
import wash from '@/view/wash'
import success from '@/view/success'
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
    },
    {
      path:'/personal_center',
      name: 'personal_center',
      component:personal_center
    },
    {
      path:'/repair_maintenance',
      name: 'repair_maintenance',
      component:repair_maintenance
    },
    {
      path:'/store_details',
      name: 'store_details',
      component:store_details
    },
    {
      path:'/quality_film',
      name: 'quality_film',
      component:quality_film
    },
    {
      path:'/Film',
      name: 'Film',
      component:Film
    },
    {
      path:'/payment',
      name: 'payment',
      component:payment
    },
    {
      path:'/cosmetology',
      name: 'cosmetology',
      component:cosmetology
    },
    {
      path:'/examination',
      name: 'examination',
      component:examination
    },
    {
      path:'/detailed',
      name: 'detailed',
      component:detailed
    },
  {
      path:'/exchange',
      name: 'exchange',
      component:exchange
    },
    {
        path:'/rule',
        name: 'rule',
        component:rule
      },
      {
        path:'/tyre',
        name: 'tyre',
        component:tyre
      },
      {
        path:'/integral',
        name: 'integral',
        component:integral
      },
      {
        path:'/wash',
        name: 'wash',
        component:wash
      },
      {
        path:'/success',
        name: 'success',
        component:success
        },
  ]
})
