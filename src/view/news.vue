<template>
  <div class="news">
      <div class="news_top">
          <div class="news_top_option" @click="isbacks_one">
              <p  :class="{back:isback}">
                  <img src="../../static/img/horn.png" >
                  <span>物流信息</span>
              </p>
          </div>
           <div class="news_top_option" @click="isbacks_two">
                  <p  :class="{back:!isback}">
                    <img src="../../static/img/horn.png" >
                    <span>专属服务信息</span>
                  </p>
          </div>
      </div>
      <div class="news_center" v-show="isback">
          <div class="cenrer_xiaoxi">
                <div class="center_xiaoxi_top">
                  <p><img src="../../static/img/horn.png" alt=""><span>您的订单已经发货</span></p>
                  <p>9:45</p>
                </div>
                <div class="center_xiaoxi_center">
                    <div class="xiaoxi_center_text">
                      <img src="../../static/img/index_shop.png" alt="">
                      <p>吉达司汽油机油权和承诺SN5W40四季通用汽车发动机润滑油机油正品4L</p>
                    </div>
                </div>
          </div>
          <div class="cenrer_xiaoxi">
                <div class="center_xiaoxi_top">
                  <p><img src="../../static/img/horn.png" alt=""><span>您的订单已经发货</span></p>
                  <p>9:45</p>
                </div>
                <div class="center_xiaoxi_center">
                    <div class="xiaoxi_center_text">
                      <img src="../../static/img/index_shop.png" alt="">
                      <p>吉达司汽油机油权和承诺SN5W40四季通用汽车发动机润滑油机油正品4L</p>
                    </div>
                </div>
          </div>
          <div class="cenrer_xiaoxi">
                <div class="center_xiaoxi_top">
                  <p><img src="../../static/img/horn.png" alt=""><span>您的订单已经发货</span></p>
                  <p>9:45</p>
                </div>
                <div class="center_xiaoxi_center">
                    <div class="xiaoxi_center_text">
                      <img src="../../static/img/index_shop.png" alt="">
                      <p>吉达司汽油机油权和承诺SN5W40四季通用汽车发动机润滑油机油正品4L</p>
                    </div>
                </div>
          </div>
          <div class="cenrer_xiaoxi">
                <div class="center_xiaoxi_top">
                  <p><img src="../../static/img/horn.png" alt=""><span>您的订单已经发货</span></p>
                  <p>9:45</p>
                </div>
                <div class="center_xiaoxi_center">
                    <div class="xiaoxi_center_text">
                      <img src="../../static/img/index_shop.png" alt="">
                      <p>吉达司汽油机油权和承诺SN5W40四季通用汽车发动机润滑油机油正品4L</p>
                    </div>
                </div>
          </div>
          <div class="cenrer_xiaoxi">
                <div class="center_xiaoxi_top">
                  <p><img src="../../static/img/horn.png" alt=""><span>您的订单已经发货</span></p>
                  <p>9:45</p>
                </div>
                <div class="center_xiaoxi_center">
                    <div class="xiaoxi_center_text">
                      <img src="../../static/img/index_shop.png" alt="">
                      <p>吉达司汽油机油权和承诺SN5W40四季通用汽车发动机润滑油机油正品4L</p>
                    </div>
                </div>
          </div>
      </div>
       <div class= "news_center" v-show="!isback">
            <div class="cenrer_xiaoxi">
                  <div class="center_xiaoxi_top">
                    <p><img src="../../static/img/horn.png" alt=""><span>您的驾照将要过期</span></p>
                    <p>9:45</p>
                  </div>
                  <div class="center_xiaoxi_center">
                        <p>吉达司汽油机油权和承诺SN5W40四季通用汽车发动机润滑油机油正品4L</p>
                  </div>
            </div>
       </div>
  </div>
</template>

<script>
  export default{
    name:"news",
    data(){
      return{
        isback:true,
      }
    },
    mounted(){
      this.$store.state.heard_title ='车平台 - 我的消息'
    },
   methods:{
     isbacks_one(){
       this.isback = true
     },
     isbacks_two(){
       this.isback =false
     }
   }
  }
</script>

<style scoped>
     @import '../assets/css/news.css';
</style>
