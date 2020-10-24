// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import './assets/iconfont/iconfont.css'
axios.defaults.baseURL = "/api"
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-type']='application/json'
Vue.config.productionTip = false
Vue.prototype.$addr= axios;

/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(MintUI)
  console.log(Vue)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
