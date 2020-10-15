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
              <img src="../assets/horn.png">
              <p>暂无更多消息</p>
            </div>
            <!-- 菜单 -->
            <div class="swiper-container1">
              <div class="swiper-wrapper">
                <!-- 审车代办 -->
                <div class="swiper-slide">
                  <div class="index_menu_item">
                    <a href="" @click="examination">
                      <div class="index_menu_item1">
                        <div class="activity_management">
                          <img src="../assets/tag_proxy.png" />
                        </div>
                        <div class="common_title">审车代办</div>
                      </div>
                    </a>
                  </div>
                </div>
               <!-- 维修与救援 -->
               <div class="swiper-slide" @click="repair">
                 <div class="index_menu_item">
                   <a href="">
                     <div class="index_menu_item1">
                       <div class="activity_management">
                           <img src="../assets/tag_repair.png" />
                       </div>
                       <div class="common_title">维修与救援</div>
                     </div>
                   </a>
                 </div>
               </div>
                <!-- 洗车 -->
                <div class="swiper-slide">
                  <div class="index_menu_item">
                    <a href="" @click="wash">
                      <div class="index_menu_item1">
                        <div class="activity_management">
                          <img src="../assets/tag_wash.png" />
                        </div>
                        <div class="common_title">洗车</div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 备品超市 -->
                <div class="swiper-slide">
                  <div class="index_menu_item">
                    <a href=""  @click="market">
                      <div class="index_menu_item1">
                        <div class="activity_management">
                            <img src="../assets/tag_market.png" />
                        </div>
                        <div class="common_title">备品超市</div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 车辆美容 -->
                <div class="swiper-slide">
                  <div class="index_menu_item">
                    <a href="" @click="beauty">
                      <div class="index_menu_item1">
                        <div class="activity_management">
                          <img src="../assets/tag_beauty.png" />
                        </div>
                        <div class="common_title">车辆美容</div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 轮胎更换 -->
                <div class="swiper-slide">
                   <div class="index_menu_item">
                     <a href="" @click="change">
                       <div class="index_menu_item1">
                         <div class="activity_management">
                             <img src="../assets/tag_change.png" />
                         </div>
                         <div class="common_title">轮胎更换</div>
                       </div>
                     </a>
                   </div>
                 </div>

                <!-- 车辆美容 -->
                <!-- 快修与保养 -->
                <div class="swiper-slide">
                  <div class="index_menu_item">
                    <a href="" @click="run">
                      <div class="index_menu_item1">
                        <div class="activity_management">
                           <img src="../assets/tag_run.png" />
                        </div>
                        <div class="common_title">快修与保养</div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 品质贴膜 -->
                <div class="swiper-slide">
                  <div class="index_menu_item">
                    <a href="" @click="around">
                      <div class="index_menu_item1">
                        <div class="activity_management">
                            <img src="../assets/tag_around.png" />
                        </div>
                        <div class="common_title">品质贴膜</div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 审车代办 -->
                <div class="swiper-slide">
                  <div class="index_menu_item">
                    <a href="" @click="service">
                      <div class="index_menu_item1">
                        <div class="activity_management">
                             <img src="../assets/tag_service.png" />
                        </div>
                        <div class="common_title">专属服务</div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 专属服务 -->
                <div class="swiper-slide">
                  <div class="index_menu_item">
                    <a href="" @click="spicial">
                      <div class="index_menu_item1">
                        <div class="activity_management">
                            <img src="../assets/tag_spicial.png" />
                        </div>
                        <div class="common_title">专家在线</div>
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
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                   <img src="../assets/index_banner1.png" />
                  </div>
                  <div class="swiper-slide">
                    <img src="../assets/index_banner1.png" />
                   </div>
                  <div class="swiper-slide">
                    <img src="../assets/index_banner1.png" />
                  </div>

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
            	<a href="javascript:;"  @click="more">更多<i class="iconfont icon-youjiantou"></i></a>
            </div>
            <!-- 内容 -->
            <div class="index_shop_cont">

                <div class="index_shop_item">
                	<div class="index_shop_picitem">
                		<img src="../assets/index_shop.png">
                	</div>
                	<div class="index_shop_textitem">
                		<p class="index_centershop_toptitle">万科云溪洗车店</p>
                		<div class="index_shop_centertext">
                			<p class="index_centershop_centertitle">维修保养</p>
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                		</div>
                		<p class="index_centershop_bottomtitle">山西省太原市小区店***号</p>
                	</div>
                  <a href="javascript:'" @click="shop">
                    <div class="index_shop_righttext">
                        <img class="position_img" src="../assets/index_navigation.png">
                        <p>1km</p>
                    </div>
                  </a>
                </div>
                <div class="index_shop_item">
                	<div class="index_shop_picitem">
                		<img src="../assets/index_shop.png">
                	</div>
                	<div class="index_shop_textitem">
                		<p class="index_centershop_toptitle">万科云溪洗车店</p>
                		<div class="index_shop_centertext">
                			<p class="index_centershop_centertitle">维修保养</p>
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                		</div>
                		<p class="index_centershop_bottomtitle">山西省太原市小区店***号</p>
                	</div>
                  <a href="javascript:'" @click="navigation">
                    <div class="index_shop_righttext">
                        <img class="position_img" src="../assets/index_navigation.png">
                        <p>1km</p>
                    </div>
                  </a>
                </div>
                <div class="index_shop_item">
                	<div class="index_shop_picitem">
                		<img src="../assets/index_shop.png">
                	</div>
                	<div class="index_shop_textitem">
                		<p class="index_centershop_toptitle">万科云溪洗车店</p>
                		<div class="index_shop_centertext">
                			<p class="index_centershop_centertitle">维修保养</p>
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                			<img src="../assets/index_star.png">
                		</div>
                		<p class="index_centershop_bottomtitle">山西省太原市小区店***号</p>
                	</div>
                  <a href="javascript:'">
                    <div class="index_shop_righttext">
                        <img class="position_img" src="../assets/index_navigation.png">
                        <p>1km</p>
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
        msg: 'index'
      }
    },
    mounted() {
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
           spaceBetween: 15,
          pagination: {
            el: '.swiper-pagination',
          },
        });

    },
    methods:{
      //审车代办
      examination:function(){
       this.$router.push({
        name: '',
        })
      },
      //维修与救援
      repair:function(){
       this.$router.push({
        name: '',
        })
      },
    //洗车
      wash:function(){
       this.$router.push({
        name: '',
        })
       },
       //备品超市
      market:function(){
         this.$router.push({
          name: '',
          })
       },
       //车辆美容
      beauty:function(){
       this.$router.push({
        name: '',
        })
       },
      //轮胎更换
      change:function(){
       this.$router.push({
        name: '',
        })
       },
       //快修与保�
      run:function(){
       this.$router.push({
        name: '',
        })
       },
       //品质贴膜
     around:function(){
       this.$router.push({
        name: '',
        })
      },
      //专属服务
     service:function(){
       this.$router.push({
        name: 'exclusive_services',
        })
      },
      //专家在线
     spicial:function(){
       this.$router.push({
        name: 'expert_online',
        })
      },
      //更多
     more:function(){
       this.$router.push({
        name: '',
        })
      },
      //商家
     shop:function(){
       this.$router.push({
        name: '',
        })
      },
      //导航
     navigation:function(){
       this.$router.push({
        name: '',
        })
      },
    }
  }
</script>

<style>
     *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;list-style: none;}
    .index{width: 100%;height: 100%; }
    .index_top{width: 100%;height: 180px;position: relative;}
    .index_top>img{width: 100%;height: 100%;}
    /* 文字*/
    .index_text{width: 100%;height: 100%;position: absolute;top: 0;left: 0;display: flex;flex-direction: column;justify-content: center;align-items: start;padding: 10px 20px;}
    .index_text>p{color: white;}
    .index_text>p:nth-child(1){font-size: 15px;font-weight: bold;}
    .index_text>p:nth-child(2){font-size: 12px;padding: 15px 0px;font-weight: bold;}
    .index_text>p:nth-child(3){padding-left: 3px;border: 1px solid #FFFFFF;width: 130px;font-size: 10px;font-weight: bold;}
    .index_text>a{text-align: center;width: 20%;padding: 2px 5px;background-color: white;color: #639cf9;border-radius: 15px;text-decoration: none;font-size: 8px;margin-top: 15px;}
    /* 全部版块*/
    .index_center{width: 100%;/* padding: 5px 15px; */position: absolute;top: 160px;}
    .index_center1{width: 100%;padding: 0px 15px;}
    .center_content{width: 100%;background-color: #FFFFFF;border-radius: 20px;/* box-shadow: 1px 1px 5px #ccc; */padding: 5px 20px;}
    /* 喇叭*/
    .center_content_service{width: 100%;border-bottom: 1px solid #ebeff2;display: flex;align-items: center;padding: 5px 0px;}
    .center_content_service>img{padding-left: 5px;width: 20px;}
    .center_content_service>p{padding-left: 15px;font-size: 12px;color: #d6d6d6;}
    /* 块链接*/
    .swiper-container1{width: 100%;padding: 20px 0px;overflow-x: hidden;position: relative;}
    .swiper-slide{display: inline-block;}
    .index_menu_item{width: 100%;margin-bottom: 10px;}
    .index_menu_item1{width: 100%;text-align: center;}
    .index_menu_item1 img{width: 40px;margin: 0 auto;}
    .common_title{padding-top: 6px;font-size: 12px;}
    .swiper-container1 .swiper-pagination-bullet{width: 5px!important;height: 5px!important;display: inline-block;border-radius: 50%;background: #000;opacity: 1;}
    .swiper-container1 .swiper-pagination-bullet-active {width: 20px!important;height: 5px!important;border-radius: 30px;opacity: 1;background-color: #333!important;}
    /* banner轮播 */
    .index_banner{width: 100%;padding-bottom: 15px;}
     .swiper-container2{width: 100%;overflow-x: hidden;position: relative;}
    .swiper-container2 img{width: 100%;height: 90px;}
    .swiper-container2 .swiper-pagination-bullet{width: 5px!important;height: 5px!important;display: inline-block;border-radius: 50%;background: #fff;opacity: 1;}
    .swiper-container2 .swiper-pagination-bullet-active {width: 5px!important;height: 5px!important;border-radius: 30px;opacity: 1;background-color: #333!important;}
    /*附近商家标题*/
    .index_shop{width: 100%;}
    .index_shop_title{width: 100%;padding:8px 15px;padding-top: 15px;border-bottom: 1px solid #EBEFF2;border-top:  1px solid #EBEFF2;display: flex;align-items: center;justify-content: space-between;}
    .index_shop_title>p{font-size: 14px;padding-left: 5px;border-left: 3px solid #D5622E;color: #333;font-weight: bold;}
    .index_shop_title>a{font-size: 14px;color: #999;}
    /* 附近商家内容 */
    .index_shop_cont{width: 100%;padding: 0px 15px;padding-top: 20px;}
    .index_shop_item{width: 100%;display: flex;padding: 20px 15px;box-shadow: 1px 1px 5px #ccc;border-radius: 10px;margin-bottom: 20px;}
    /* 左侧内容 */
    .index_shop_picitem{width: 25%;}
    .index_shop_picitem img{width: 70%;}
    /* 中间内容 */
    .index_shop_textitem{width: 55%;display: flex;flex-direction: column;justify-content: space-around;align-items: start;border-right: 1px solid #DCDCDC;padding: 0px 10px;}
    /* 中间文字 */
    .index_centershop_toptitle{font-size: 13px;font-weight: bold;}
    .index_centershop_centertitle{font-size: 12px;color: #fb8e6c;border: 1px solid  #fb8e6c;padding: 0px 3px;border-radius: 15px;}
    .index_centershop_bottomtitle{font-size: 12px;color: #999;}
    /* 右侧内容 */
    .index_shop_item>a{width: 20%;display: flex;align-items: center;justify-content: center;}
    .index_shop_centertext{display: flex;align-items: center;}
    .index_shop_centertext img{width: 12px;height: 12px;margin: 0px 3px;}
    .index_shop_righttext{width: 100%;}
    .index_shop_righttext img{width: 40px;margin-bottom: 6px;}
    .index_shop_righttext p{font-size: 12px;color:#00abee;}
</style>
