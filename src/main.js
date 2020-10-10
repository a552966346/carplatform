// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import './assets/iconfont/iconfont.css'
axios.defaults.baseURL = "https://api.coindesk.com/"
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
Vue.config.productionTip = false
Vue.prototype.$addr= axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
