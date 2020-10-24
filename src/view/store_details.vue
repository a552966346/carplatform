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
            <div class="store_swiper_cont" >
              <div class="store_swiper_itemcont" ><img :src="merchant.bannerimages"></div>
             <!-- <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../../static/img/store_details_pic.jpg"></div> -->
             <!-- <div style="width: 1px;"></div> -->
            </div>
            <!-- 地址 -->
            <div class="store_swiper_address">
                <div class="store_swiper_leftaddress">
                  <p>{{merchant.address}}</p>
                  <p><i class="iconfont icon-dingwei"></i>距离您987.9km</p>
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
                <span :class="{active:active}">普洗</span>
                <span :class="{active:active}">精洗</span>
                <span :class="{active:active}">全车内饰清洗</span>
                <span :class="{active:active}">大面积沥青去除</span>
                <span :class="{active:active}">打蜡</span>
                <span :class="{active:active}">抛光</span>
                <span :class="{active:active}">坐垫干洗</span>
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
        msg: 'store_details',
        id:"",
        merchant:{},
        active:""
      }
    },
    mounted:function(){
          this.$store.state.heard_title ='车平台 - 商家店面'
          let that = this
          that.id = that.$route.query.id
          console.log(that.id)
           that.$addr.post("index/index/merchant",{
              id:that.id
          })
           .then(res=>{

            that.merchant = res.data.result.merchant
            console.log(that.merchant)
           })
    },
  }
</script>

<style scoped>
  @import '../assets/css/store_details.css'

</style>
