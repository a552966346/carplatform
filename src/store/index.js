import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    heard_title:'车平台 - 首页',
    imgurl:'http://super.mynatapp.cc'
  }
})
export default store
