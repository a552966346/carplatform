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
            <p> 途牛养车(太原店)</p>
            <div class="top_left_text">
              <p>店铺评分<span>5.0</span></p>
              <p>粉丝数<span>8982</span></p>
            </div>
          </div>
          <div class="top_right">
            <a href="">
               <i class="iconfont icon-youjiantou"></i>
            </a>
          </div>
        </div>
        <!-- 轮播内容 -->
        <div class="store_swiper">
          <!-- 轮播图片 -->
          <div class="store_swiper_top">
            <!-- 轮播图 -->
            <div class="store_swiper_cont">
              <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div>
             <!-- <div style="width: 1px;"></div> -->
            </div>
            <!-- 地址 -->
            <div class="store_swiper_address">
                <div class="store_swiper_leftaddress">
                  <p>山西省太原市小店区</p>
                  <p><i class="iconfont icon-dingwei"></i>距离您987.9km</p>
                </div>
                <div class="store_swiper_rightaddress">
                    <span class="dianhua"><i class="iconfont icon-dianhua"></i></span>
                    <span class="weixin"><i class="iconfont icon-weixin"></i></span>
                </div>
            </div>
          </div>
           <!-- 热门服务 -->
           <div class="store_swiper_bottom">
              <p>热门服务</p>
              <div class="store_swiper_lable">
                <span class="active">普洗</span>
                <span>精洗</span>
                <span>全车内饰清洗</span>
                <span>大面积沥青去除</span>
                <span>打蜡</span>
                <span>抛光</span>
                <span>坐垫干洗</span>
              </div>
           </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="store_details_bottom">
        <a href="tel:400-500-600">
          <div>联系商家</div>
        </a>
        <router-link to="appointment_details">
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
        msg: 'store_details'
      }
    },
    mounted:function(){
          this.$store.state.heard_title ='车平台 - 商家店面'
          let that = this
          
    },
  }
</script>

<style scoped>
  @import '../assets/css/store_details.css'

</style>
