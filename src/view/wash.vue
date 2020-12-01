<template>
  <div class="wash_all">
  	<!-- 轮播图 -->
  	<div class="wash_lunbo">
  		<div class="swiper-container">
  			<div class="swiper-wrapper">
  				<div class="swiper-slide wash_b1" v-for="(item,index) in detailimages "><img :src="item" ></div>
  			</div>
  		</div>
  	</div>
  	<div class="wash_center">
  		<!-- 筛选 -->
  		<!-- <div class="center_screen">
  			<select name="data">
          <option >洗车方式</option>
  				<option v-for="(item,index) in category" :key="item.id" :value="item.name" >{{item.introduce}}</option>
  			</select>
  			<select name="sort">
           <option >店铺等级</option>
  				<option v-for="(item,index) in star" :key="item" value="1">{{item}}级</option>
  			</select> -->
  		<!-- 	<select name="screen">
  				<option >筛选</option>
  			</select> -->

  		</div>
  			<!-- 导航 -->
  		<div class="center_navigation" id="container" >

  		</div>
      <!-- 弹框 -->
        <el-dialog
          :visible.sync="centerDialogVisible"
          width="90%"
          title="商家详情"
          modal
          :with-header="false"
          :show-close = "showcs"
          close-on-click-modal
          top=400px
          >
          <div class="shop" ref="total" v-for="(item,index) in merchant" :key="item.id" v-show="shows==item.id">
                    <div class="upper">
                      <div class="upper_img">
                        <img :src="item.banner" />
                      </div>
                      <div class="upper_text">
                        <div class="upper_text_top">
                          <p>{{item.name}}</p>
                          <a href="#"><img src="../../static/img/daohang.png">
                          导航</a>
                        </div>
                        <div class="upper_text_score">
                          <p>快修店</p>
                          <p>{{item.star}}级</p>
                          <p><span>评分</span>{{item.star}}.0</p>
                        </div>
                        <div class="upper_text_phont">
                          <img src="../../static/img/phone.png" >
                          <p>{{item.mobile}}</p>
                        </div>
                      </div>

                    </div>
                    <div class="center">
                      <div class="center_left"><p>精选服务</p></div>
                      <div class="center_right" v-for="(item,index) in item.service"><p>{{item}}</p></div>
                     <!-- <div class="center_right"><img src="../../static/img/wash__layer_one.png" alt=""><p>精洗</p></div>
                      <div class="center_right"><img src="../../static/img/wash__layer_one.png" alt=""><p>全车内饰清洗</p></div>
                      <div class="center_right"><img src="../../static/img/wash__layer_one.png" alt=""><p>打蜡</p></div> -->
                    </div>
                    <div class="bottom">
                      <div class="bottom_left">
                        <p>{{item.address}}</p>
                      </div>
                      <div class="bottom_right">
                       <a :href="'tel:'+item.mobile">立即预约</a>
                      </div>
                    </div>
                  </div>
        </el-dialog>
  	</div>

  </div>
</template>

<script>
import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'repair',
    data() {
      return {
        data:[],
        merchant:[],
        category:[],
        latitude:'',
        longitude:'',
        star:[1,2,3,4,5],
        detailimages :[],
        centerDialogVisible: false,
        shows:'',
        showcs:false,
        img:require('../../static/img/wash_weizhi.png'),
        llat:'',
        llng:''
      }
    },
    mounted:function(){
      let that = this
      let markerss = []
       that.$store.state.heard_title ='车平台 - 洗车'
        //定义地图中心点坐标
        // 定位
        var geolocation = new qq.maps.Geolocation();
        var options = {
            timeout: 600000
        };
        geolocation.getLocation(showPosition, showErr, options);
        function showPosition(position) {
            that.llat = position.lat,
             that.llng = position.lng
        };
        function showErr() {
            console.log("定位失败")
        };
        that.$addr.get('index/service/wash')
            .then(res=>{
                that.data = res.data.result.data,
                that.merchant = that.data.merchant,
                that.category = that.data.category,
                that.detailimages = that.data.detailimages
                that.$nextTick(function(){
                  that.doswiper()
                  // console.log(that.marker(that.merchant))
                })
                let center = new TMap.LatLng(that.llat, that.llng)
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
                                       "src": that.img
                                   })
                               },
                                 geometries: markerss,

                              })
                              marker.on("click", that.shop)
            })

    },
    methods: {
      shop(evt) {
         console.log(evt.geometry.id)
         this.shows =evt.geometry.id
         this.centerDialogVisible = true
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
        /* {
             "id":that.merchant[i].id,
             "styleId": 'marker',
             "position":position,
             "properties": {
                 "title":that.merchant[i].name
             } */


       },
      doswiper(){
        let mySwiper = new Swiper ('.swiper-container', {
             loop: true, // 循环模式选项
             slidesPerView: 1.2,
             spaceBetween: -15,
          	  centeredSlides: true,
          	  loop: true,
             pagination: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
                 hideOnClick: true,
                },
        	})
      },
    }
  }
</script>

<style scoped>
  @import '../assets/css/wash.css';

</style>
