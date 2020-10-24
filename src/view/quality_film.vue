<template>
  <div class="quality_film">
    <!-- banner-->
    <div class="quality_top">
    	<img src="../../static/img/quality_film_top.png" >
    </div>
    <!-- 内容 -->
    <div class=" quality_center">
      <!--筛选 -->
<!--      <div class="center_screen">
        <select name="data">
          <option value="1">我的</option>
        </select>
        <select name="sort">
          <option value="1">你的</option>
        </select>
        <select name="screen">
          <option value="1">333</option>
        </select>
      </div> -->
      <!--地图 -->
      <div class="center_navigation" id="container" >

       </div>
		<!-- 商户 -->
        <div class="quality_bottom" @click="table = true" v-for="item in merchant" :key="item.id" v-show="isID ==item.id">
            <div class="bottom_top">
              <p>{{item.name}}</p>
               <p>
                  <span>{{item.address}}</span>
                  <span>导航<img src="../../static/img/daohang.png"></span>
                </p>
            </div>
            <div class="bottom_bottom">
                  <img src="../../static/img/phone.png" >
                  <span>{{item.mobile}}</span>
            </div>
        </div>
        <!-- 抽屉 -->
        <el-drawer
          :withHeader="false"
          :visible.sync="table"
          direction="btt"
          size="60%">
              <div class="quality_drawer" v-for="item in merchant" :key="item.id" v-show="isID ==item.id">
                  <div class="quality_drawer_top">
                    <div class="drawer_top_text">
                      <p>
                          <span class="border_none">{{item.name}}</span>
                          <span class="border">快修店</span>
                          <span class="border">{{item.star}}级</span>
                        </p>
                        <p id="two">{{item.address}}</p>
                        <p id="three">起止时间：09：00 — 22：00</p>
                    </div>

                      <div class="drawer_top_img">
                        <img src="../../static/img/maintain.png" alt="">
                        <img src="../../static/img/maintain.png" alt="">
                        <img src="../../static/img/maintain.png" alt="">
                        <img src="../../static/img/maintain.png" alt="">
                      </div>
                  </div>
                  <div class="quality_drawer_center">
                      <div class="center_top">
                        <p :class="{ color: isBreak }" @click="isbreak_one">概况</p>
                        <p :class="{ color: !isBreak }" @click="isbreak_two">服务</p>
                      </div>
                      <div class="center_text" v-show="isBreak">
                            <p>啊空间的开挖的开挖很快就打黑屋骄傲和我的空间hawk的话卡玩家获得卡玩家获得卡位好的空间hawk的哈万家灯火卡玩家获得卡玩家获得卡玩家获得卡位好的卡号我空间的好卡哇好的开挖基坑接电话卡接我电话卡位还得看骄傲和我客户打款我hwak</p>
                      </div>
                      <div class="center_text" v-show="!isBreak">
                            <p>啊空间的开挖的开挖很快就打黑屋骄傲和我的空间hawk的话卡玩家获得卡玩家获得卡位好的空间hawk的哈万家灯火卡玩家获得卡玩家获得卡</p>
                      </div>
                      <div class="center_bottom">
                          <p>
                            <img src="../../static/img/phone.png" alt="">
                            <span>{{item.mobile}}</span>
                          </p>
                          <p>
                            <span>导航</span>
                            <img src="../../static/img/daohang.png" >
                          </p>
                      </div>
                  </div>
              </div>
        </el-drawer>

    </div>
  </div>
</template>

<script>
export default {
  name: 'quality_film',
  data () {
    return {
      msg: 'quality_film',
      data:[],
      merchant:[],
      category:[],
      latitude:'',
      longitude:'',
      table:false,
      isBreak: true,
      isID:""
    }
  },
  mounted:function(){
      this.$store.state.heard_title='车平台 - 维修与救援'
      var that = this
      var markerss
      that.$addr.get('index/service/help')
      .then(res=>{
          that.data = res.data.result.data,
          that.merchant = that.data.merchant,
          that.category = that.data.category,
          console.log(that.merchant)
          that.detailimages = that.data.detailimages
           that.isID = that.merchant[0].id
          let center = new TMap.LatLng(that.merchant[1].lat, that.merchant[1].lng)
          //定义map变量，调用 TMap.Map() 构造函数创建地图
          let map = new TMap.Map(document.getElementById('container'), {
              center: center,//设置地图中心点坐标
              zoom: 11,   //设置地图缩放级别
              viewMode:'2D',
          });
              markerss = that.marker(that.merchant)
            let marker = new TMap.MultiMarker({
                         id: 'container',
                         map: map,
                         styles: {
                             "marker": new TMap.MarkerStyle({
                                 "width": 25,
                                 "height": 35,
                                 "anchor": { x: 16, y: 32 },
                                 "src": '../../static/img/wash_weizhi.png'
                             })
                         },
                           geometries: markerss,

                        })
                        marker.on("click", that.drawer)
      })
  },
  methods:{
      drawer(evt){
        this.isID = evt.geometry.id
      },
      isbreak_one(){
        this.isbreak = true;
      },
      isbreak_two(){
        this.isbreak = false;
      },
      marker(ent){
        let that = this
        let id = []
        let pos = [],name = [], str = '',markers = []
       //console.log(ent[0].lat)
          //console.log(ent[i].lat)
          for(let i= 0 ; i<ent.length; i++){
            // that.marker(that.merchant[i])
            let position =  new TMap.LatLng(ent[i].lat,ent[i].lng)
            pos[i] = position,
            id[i] = ent[i].id
            name[i] = ent[i].name
            str = {"id":id[i],"position":pos[i],"styleId":'marker'}
            markers[i] = str
            }
             return markers

       },
  }
}
</script>
<style  scoped>
 @import '../assets/css/quality_film.css';
</style>
