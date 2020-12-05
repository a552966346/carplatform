<template>
  <!--刘玉霞 -->
  <div class="store_details">
    <!-- 背景 -->
    <div class="store_details_back"></div>
    <!-- 定位内容 -->
    <div class="store_details_cont">
     <!-- 上部分内容 -->
      <div class="store_details_top">
        <!-- 门店介绍 -->
        <div class="store_top">
          <div class="top_left">
            <p> {{merchant.name}}</p>
            <div class="top_left_text">
              <p>店铺评分<span>{{merchant.star}}.0</span></p>
              <p>粉丝数<span>8982</span></p>
            </div>
          </div>
          <div class="top_right">
            <!-- <a href="">
               <i class="iconfont icon-youjiantou"></i>
            </a> -->
          </div>
        </div>
        <!-- 轮播内容 -->
        <div class="store_swiper">
          <!-- 轮播图片 -->
          <div class="store_swiper_top">
            <!-- 轮播图 -->
            <div class="store_swiper_cont" >
              <div class="store_swiper_itemcont" v-for="(item,index) in isimg" :key><img :src="$store.state.imgurl+item"/></div>
             <!-- <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div> -->
             <!-- <div style="width: 1px;"></div> -->
            </div>
            <!-- 地址 -->
            <div class="store_swiper_address">
                <div class="store_swiper_leftaddress">
                   <p>{{merchant.address}}</p>
                  <p><i class="iconfont icon-dingwei"></i>距离您{{km}}km</p>
                </div>
                <div class="store_swiper_rightaddress">
                    <a :href="'tel:'+merchant.mobile"> <span class="dianhua"><i class="iconfont icon-dianhua"></i></span></a>
                    <a href=""><span class="weixin"><i class="iconfont icon-weixin"></i></span></a>
                </div>
            </div>
          </div>
           <!-- 热门服务 -->
           <div class="store_swiper_bottom">
              <p>热门服务</p>
              <div class="store_swiper_lable">
                <span :class="{active:index==nub}" v-for="(item,index) in service" :key = "index" @click="isactive(index)">{{item}}</span>
              </div>
           </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="store_details_bottom">
        <a href="tel:400-500-600">
          <div>联系商家</div>
        </a>
        <router-link :to="{path:'/appointment_details',query:{id:id}}">
          <div>立即预约</div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'store_details',
        id:"",
        merchant:{},
        isimg:[],
        service:[],
        nub:0,
        km:'',
        lat:'',
        lng:'',
        llat:'',
        llng:''
      }
    },
    mounted:function(){
          this.$store.state.heard_title ='车平台 - 商家店面'
          let that = this
          that.id = that.$route.query.id
             that.$addr.post("index/index/merchant",{
                id:that.id
            })
             .then(res=>{
              that.merchant = res.data.result.merchant
              that.isimg = that.merchant.bannerimages
              that.lat = res.data.result.merchant.lat
              that.lng = res.data.result.merchant.lng
              that.service = that.merchant.service
              that.$nextTick(function(){
                  that.dingwei()
                  console.log(that.km)
              })
             })
    },
    methods:{
      isactive(index){
          this.nub = index
      },
      dingwei() {
          var that = this
          //定位
           var geolocation = new qq.maps.Geolocation();
          var options = {
              timeout: 600000
          };
          geolocation.getLocation(showPosition, showErr, options);
          function showPosition(position) {
              console.log(position)
              that.llat = position.lat,
                  that.llng = position.lng,
                  that.laddress = position.address
              that.km = that.getGreatCircleDistance(that.llat, that.llng,that.lat,that.lng)
          }

          function showErr() {
              console.log("定位失败")
          };
      },
      getGreatCircleDistance(lat1, lng1, lat2, lng2) {
          var EARTH_RADIUS = 6378137.0;
          var radLat1 = this.getRad(lat1);
          var radLat2 = this.getRad(lat2);
          var a = radLat1 - radLat2;
          var b = this.getRad(lng1) - this.getRad(lng2);
          var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) *
              Math.pow(
                  Math.sin(b / 2), 2)));
          s = s * EARTH_RADIUS;
          s = Math.round(s * 10000) / 10000.0;
          s = parseInt(s/1000)
          return s;
      },
      getRad(d) {
          var PI = Math.PI;
          return d * PI / 180.0;
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/store_details.css';
</style>
