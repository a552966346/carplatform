<template>
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
              <div class="store_swiper_itemcont"><img src="../assets/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../assets/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../assets/store_details_pic.jpg"></div>
              <div class="store_swiper_itemcont"><img src="../assets/store_details_pic.jpg"></div>
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
        <a href="#">
          <div>立即预约</div>
        </a>
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
    }
  }
</script>

<style>
  *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;list-style: none;}
 .store_details{width: 100%;height: 100%;}
 /* 头部背景*/
 .store_details_back{width: 100%;height: 200px;background: url(../assets/store_details_pic.jpg) no-repeat 0.0;filter: blur(10px);}
 /* 内容*/
.store_details_cont{width: 100%;height: 100%;display: flex;flex-direction: column;overflow: hidden;position: absolute;left: 0;top: 0;}
/* 上部分内容 */
.store_details_top{width: 94%;margin: 0 auto;flex: 1;display: flex;flex-direction: column;}
/* 门店介绍 */
.store_top{width: 100%;height: 80px;display: flex;justify-content: space-between;align-items: center;color: #fff;}
.top_left>p{font-size: 14px;text-align: left;padding-bottom: 3px;}
.top_left_text{display: flex;}
.top_left_text p{font-size: 12px;}
.top_right i{color:#fff;font-size: 18px;}
/* 轮播内容 */
.store_swiper{width: 100%;padding: 10px 10px;padding-right: 0px;background-color: #fff;border-radius: 5px;flex: 1;display: flex;flex-direction: column;}
/* 轮播图片 */
.store_swiper_top{height: 180px;display: flex;flex-direction: column;}
.store_swiper_cont{height: 100px;display: -webkit-box;overflow-y: hidden;overflow-x: scroll;}
.store_swiper_itemcont{width:200px;margin-right: 10px;}
.store_swiper_itemcont img{width:100%;height: 100%;border-radius: 5px;}
.store_swiper_address{flex: 1;display: flex;justify-content: space-between;align-items: center;padding-right: 10px;}
.store_swiper_leftaddress p:nth-child(1){font-size: 14px;color: #333;text-align: left;padding-bottom: 3px;}
.store_swiper_leftaddress p:nth-child(2){font-size: 12px;color: #CCCCCC;text-align: left;}
.store_swiper_leftaddress p i{font-size: 12px;margin-right: 5px;}
.dianhua{color:#FADD61;margin-right: 5px;}
.weixin{color:#98ff5a;}
/* 热门服务 */
.store_swiper_bottom{flex:1;border-top: 1px ;border-top: 1px solid #F2F2F2;}
.store_swiper_bottom>p{font-size: 14px;color: #333;font-weight: bold;text-align: left;padding: 20px 0px;}
.store_swiper_lable{display: flex;flex-wrap: wrap;}



.store_swiper_lable span{background-color:#F2F2F2;padding: 5px 0px;margin-bottom: 5px;color: #333;width: 32%;display: inline-block;margin-right: 2%;}
.store_swiper_lable span:nth-child(3n+3){margin-right: 0%;}

.active{background-color:#FEF5D0!important;color: #fad71b!important;}
 /* 底部*/
 .store_details_bottom{width: 100%;height: 70px;display: flex;justify-content: center;align-items: center;box-shadow: 1px 0 5px #ccc;}
 .store_details_bottom a{flex: 1;}
 .store_details_bottom a div{width: 70%;background-color: #FADD61;color: #FFFFFF;margin: 0 auto;padding: 5px;border-radius: 20px;}
</style>
