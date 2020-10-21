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
  		<div class="center_screen">
  			<select name="data">
          <option value="0">洗车方式</option>
  				<option v-for="(item,index) in category" :key="item.id" :value="item.name" >{{item.introduce}}</option>
  			</select>
  			<select name="sort">
  				<option v-for="(item,index) in star" :key="item" value="1">{{item}}级</option>
  			</select>
  			<select name="screen">
  				<option value="1">筛选</option>
  			</select>

  		</div>
      <div class="center_text">

      </div>
  			<!-- 导航 -->
  		<div class="center_navigation" id="container" @click="shop">

  		</div>



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
        urls: require('../../static/img/daohang.png'),
        urlp: require('../../static/img/phone.png'),
        data:[],
        merchant:[],
        category:[],
        latitude:'',
        longitude:'',
        star:[1,2,3,4,5],
        detailimages :[],
      }
    },
    mounted:function(){
      var that = this
      // for(let i=0; i<=that.merchant.length; i++){
      //    markerss.id =  that.merchant.id;
      //    markerss.position = new TMap.latLng(that.merchant.lat,that.merchant.lng)
      // }
       that.$store.state.heard_title ='车平台 - 洗车'

        //定义地图中心点坐标
        var center = new TMap.LatLng(39.984120, 116.307484)
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        var map = new TMap.Map(document.getElementById('container'), {
            center: center,//设置地图中心点坐标
            zoom: 11,   //设置地图缩放级别
            viewMode:'2D',
        });
        that.$addr.get('index/service/wash')
            .then(res=>{
                console.log(res.data.result)
                that.data = res.data.result.data,
                that.merchant = that.data.merchant,
                that.category = that.data.category,
                console.log(that.merchant)
                that.detailimages = that.data.detailimages
                that.$nextTick(function(){
                  that.doswiper()
                })
            })
            var marker = new TMap.MultiMarker({
                        id: 'marker-layer',
                        map: map,
                        styles: {
                            "marker": new TMap.MarkerStyle({
                                "width": 25,
                                "height": 35,
                                "anchor": { x: 16, y: 32 },
                                "src": 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png'
                            })
                        },
                        // geometries: [markerss]
                        })
                    marker.on("click", (evt)=>{
                      this.shop()
                    })
    },
    methods: {
      shop() {
        var that = this;
        console.log(that.urls)
        layui.use('layer', function() {
          var layer = layui.layer;
         // console.log(typeof(that))
        // $(".layui-layer").css("background", "none");
          layer.open({
            type: 1,
            title: false,
            //样式类名
            closeBtn: 0, //不显示关闭按钮
            anim: 2,
            area: ['90%', 'auto'],
            offset: '400px',
            shade: 0.01,
            id: 'one',
            shadeClose: true, //开启遮罩关闭
            content: ` <div class="shop" ref="total" v-for="(item,index) in merchant">
                <div class="upper">
                  <div class="upper_img">
                    <img :src="item.banner" />
                  </div>
                  <div class="upper_text">
                    <div class="upper_text_top">
                      <p>{{item.name}}</p>
                      <a href="#"><img src="${that.urls}">
                      导航</a>
                    </div>
                    <div class="upper_text_score">
                      <p>快修店</p>
                      <p>{{item.star}}级</p>
                      <p><span>评分</span>{{item.star}}.0</p>
                    </div>
                    <div class="upper_text_phont">
                      <img src="${that.urlp}" >
                      <p>{{item.mobile}}</p>
                    </div>
                  </div>

                </div>
                <div class="bottom">
                  <div class="bottom_left">
                    <p>{{item.address}}</p>
                  </div>
                  <div class="bottom_right">
                    <a href="#">立即预约</a>
                  </div>
                </div>
              </div>`
          });
        });
      },
      marker(){
        var that = this

      },
      doswiper(){
        var mySwiper = new Swiper ('.swiper-container', {
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
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/wash.css'

</style>
