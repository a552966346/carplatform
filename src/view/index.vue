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
                <div class="index_shop_item"  v-for="(item,index) in merchant" :key="index">
                	<div class="index_shop_picitem">
                		<img :src="item.banner" />
                	</div>
                	<div class="index_shop_textitem">
                		<p class="index_centershop_toptitle">{{item.name}}</p>
                		<div class="index_shop_centertext">
                			<p class="index_centershop_centertitle">维修保养</p>
                			<img :src=" index_star(item.star)">
                		</div>
                		<p class="index_centershop_bottomtitle">{{item.address}}</p>
                	</div>
                  <a href="javascript:'">
                    <div class="index_shop_righttext">
                        <img class="position_img" src="../../static/img/index_navigation.png">
                        <p>{{item.weigh}}km</p>
                    </div>
                  </a>
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
      }
    },
    created(){
        this.$nextTick(() => {
               this.doswiper()
             })
    },
    mounted:function() {
        this.$addr.get('/index/index/index')
                               .then(response => {
                                // console.log(this)
                                console.log(response.data.result)
                                 this.banner = response.data.result.banner;
                                 //console.log(this.banner)
                                 this.types = response.data.result.types;
                                 this.merchant=response.data.result.merchant
                                 //console.log(this.merchant)
                                 this.$nextTick(function(){
                                   this.doswiper()
                                 })
                              } )

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
        console.log(movieId)
        this.$router.push({
           name: movieId,
         })
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
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/index.css'

</style>
