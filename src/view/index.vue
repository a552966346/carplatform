<template>
  <!--刘玉霞 -->
  <div class="index">
    <!-- 导航 -->
    <div class="index_top">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=324399191,4253983438&fm=11&gp=0.jpg">
      <div class="index_text">
        <p>汽车服务</p>
        <p>顺通大广汽车服务有限公司</p>
        <p><i>心中有梦，志在远方~</i></p>
        <a href="javascript:;">查看详情</a>
      </div>
      <!-- 服务 -->
      <div class="index_center">
        <div class="index_center1">
          <!-- 方框 -->
          <div class="center_content">
            <!-- 公告 -->
            <div class="center_content_service">
              <img src="../../static/img/horn.png">
              <p>暂无更多消息</p>
            </div>
            <!-- 菜单 -->
            <div class="swiper-container1">
              <div class="swiper-wrapper">
                <!-- 审车代办 -->
                <div class="swiper-slide" v-for="(item,index) in types" :key='index'>
                  <div class="index_menu_item">
                    <a href="#" @click="index_run(item.vue)">
                      <div class="index_menu_item1">
                        <div class="activity_management">
                          <img :src="item.logoimage" />
                        </div>
                        <div class="common_title">{{item.name}}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
               <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <!-- banner轮播 -->
          <div class="index_banner">
            <div class="swiper-container2">
                <div class="swiper-wrapper" >
                  <div class="swiper-slide" v-for="(value,index) in banner" >
                      <img :src="value" />
                      <!-- {{value}} -->
                  </div>
                <!--  <div class="swiper-slide">
                    <img src="../../static/img/index_banner1.png" />
                   </div>
                  <div class="swiper-slide">
                    <img src="../../static/img/index_banner1.png" />
                  </div> -->
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <!-- 附近商家 -->
        <div class="index_shop">
            <!-- 标题 -->
            <div class="index_shop_title">
            	<p>附近商家</p>
            	<a href="javascript:;">更多<i class="iconfont icon-youjiantou"></i></a>
            </div>
            <!-- 内容 -->
            <div class="index_shop_cont">
              <div  v-for="(item,index) in merchant" :key="item.id">

                <div class="index_shop_item" >
                  <router-link  :to="{path:'/store_details',query:{ id:item.id }}" class="around">
                	<div class="index_shop_picitem">
                		<img :src="item.banner" />
                	</div>
                 </router-link>
                	<div class="index_shop_textitem">
                		<p class="index_centershop_toptitle">{{item.name}}</p>
                		<div class="index_shop_centertext">
                			<p class="index_centershop_centertitle">维修保养</p>
                			<img :src=" index_star(item.star)">
                		</div>
                		<p class="index_centershop_bottomtitle">{{item.address}}</p>
                	</div>
                  <a href=" #" @click="toMap(item)">
                    <div class="index_shop_righttext">
                        <img class="position_img" src="../../static/img/index_navigation.png">
                        <p>{{km[index]}}km</p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  // @import 'https://at.alicdn.com/t/font_2118841_f4e5dnhf8iv.css';
  export default {
    name: 'index',

    data() {
      return {
        msg: 'index',
        banner:[],
        types:[],
        merchant:[],
        star:[
         require('../../static/img/stars_one.png'),
         require('../../static/img/stars_two.png'),
         require('../../static/img/stars_three.png'),
         require('../../static/img/stars_four.png'),
         require('../../static/img/stars_five.png')
        ],
        stats:[],
        id:"",
        llat:'',
        llng:'',
        address:'',
        km:[],
        status:'',
        lat:[],
        lng:[],
        token:''
      }
    },
    mounted:function() {
      this.$store.state.heard_title ='车平台 - 首页'
     let token = localStorage.getItem("token")
     if(token == null){
        let param = this.getUrlParam('token');
        console.log(param)
        if(param){
          localStorage.setItem("token",param);
          token = param;
        }else{
          window.location.href = "/api/index/index/login"
        }
      }
      let that = this
      console.log(token)
         that.$addr.post('/index/index/index',{token:token})
               .then(response => {
                // console.log(this)
                console.log(response.data)
                 that.banner = response.data.result.banner;
                 //console.log(this.banner)
                 that.types = response.data.result.types;
                 that.status =  response.data.result.status
                 that.merchant=response.data.result.merchant
                 console.log(this.merchant)

                 that.$nextTick(function(){
                   that.doswiper()
                 })
        } )

           //定位
        var geolocation = new qq.maps.Geolocation('W24BZ-WXDCO-JJGWX-SOQQZ-2HQRO-5JBJ4', '车平台');
        // var positionNum = 0;
        var options = {timeout: 10000000};
        geolocation.getLocation(showPosition, showErr, options);
        function showPosition(position) {
            console.log(position)
           that.llat = position.lat,
           that.llng = position.lng,
           that.laddress = position.address
          that.km =  that.distance()
           console.log( that.km)
           // that.km = that.GetDistance( that.llat,  that.llng,  lat2,  lng2)
          }
          function showErr() {
            console.log("定位失败")
          };


    },
    methods:{
      doswiper(){
        // swiper
        setTimeout(()=>{
          var swiper = new Swiper('.swiper-container1', {

              slidesPerView: 4,
              slidesPerColumn:2,
              spaceBetween: 0,
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
          });
          var swiper = new Swiper('.swiper-container2', {
            autoplay: true,
            spaceBetween: 15,
            loop:true,
            pagination: {
              el: '.swiper-pagination',
            },
          });
        })
      },
      // 项目挑传
      index_run(movieId){
        console.log(this.status)
        if(this.status == true){
          this.$router.push({
             name: movieId
              })
        }else{
           this.$router.push({
              name:"/register",
            })
        }

      },
      getUrlParam(name) {//封装方法

        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

        var r = window.location.search.substr(1).match(reg); //匹配目标参数

        if (r != null) return unescape(r[2]);

        return null; //返回参数值

       },
      index_star(str){
          switch(str){
            case '1' :
            return this.star[0];
            break;
            case '2' :
            return this.star[1];
            break;
            case '3' :
            return this.star[2];
             console.log("------")
            break;
            case '4' :
           return  this.star[3];
            break;
            case '5':
            return this.star[4];
             console.log('+++++')
            break;
          }
      },
      // onClick(item) { //item是传递过来的高德地图、百度地图、腾讯地图
      //   console.log(item)
      //    this.$router.query(item)
      // },
      toMap(res) {
          let oudlat = this.llat,
                oudlng = this.llng,
                outaddress = this.address;
            console.log(res)
            let nlat = res.lat,
            nlng = res.lng,
            address = res.address;
            window.location.href="https://apis.map.qq.com/uri/v1/routeplan?type=drive&from="+outaddress+"&fromcoord="+oudlat+","+oudlng+"&to="+address+"&tocoord="+nlat+","+nlng+"&policy=1&referer=W24BZ-WXDCO-JJGWX-SOQQZ-2HQRO-5JBJ4"
      },
      //计算距离
      distance(){
        let that = this
        let km = []
        console.log(merchant)
        for(let i=0;i<that.merchant.length;i++){
              that.lat[i] =that.merchant[i].lat
              that.lng[i] =that.merchant[i].lng
              km[i]=that.GetDistance( that.lat[i],  that.lng[i],  that.llat,  that.llng)
        }
        return km
      },
      GetDistance( lat1,  lng1,  lat2,  lng2){
        //console.log(lat1,  lng1,  lat2,  lng2)
          var radLat1 = lat1*Math.PI / 180.0;
          var radLat2 = lat2*Math.PI / 180.0;
          var a = radLat1 - radLat2;
          var  b = lng1*Math.PI / 180.0 - lng2*Math.PI / 180.0;
          var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
          Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
          s = s *6378.137 ;// EARTH_RADIUS;
          s = Math.round(s) ;
          //console.log(s)
          return s;
      }

    }
  }
</script>

<style scoped>
  @import '../assets/css/index.css'

</style>
