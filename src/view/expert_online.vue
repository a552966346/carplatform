<template>
  <!--刘玉霞 -->
  <div class="expert_online">
    <!-- 头部banner -->
    <div class="expert_top">
          <p>我们专业打造优质平台</p>
          <p>为您解答疑难</p>
          <p>一流技术&nbsp;&nbsp;&nbsp;&nbsp;专业素养&nbsp;&nbsp;&nbsp;&nbsp;优质团队</p>
    </div>
    <div class="expert_center">
        <p>专家团队</p>
        <!-- 专家 -->
        <div class="expert_center_center">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                  <a href="">
                    <div class="swiper-slide">
                      <div class="center_zhuanjia">                          <img src="../../static/img/portrait.jpg" alt="">                            <h4>李亚娟</h4>                            <p>保险理赔专家</p>                      </div>
                    </div>
                  </a>
                  <a href="">
                    <div class="swiper-slide">
                      <div class="center_zhuanjia">
                          <img src="../../static/img/portrait.jpg" alt="">
                            <h4>李亚娟</h4>
                            <p>保险理赔专家</p>
                      </div>
                    </div>
                  </a>
                  <a href="">
                    <div class="swiper-slide">
                      <div class="center_zhuanjia">
                          <img src="../../static/img/portrait.jpg" alt="">
                            <h4>李亚娟</h4>
                            <p>保险理赔专家</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
         </div>
    </div>
    <div class="expert_center">
        <p>服务项目</p>
        <div class="expert_center_fuwu">
               <div class="swiper-container_two">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="../../static/img/expert_back_five.png" alt="">
                        <div class="fuwu_class">保险理赔服务</div>
                      </div>
                  </div>
                  <!-- Add Pagination -->
                 <!-- <div class="swiper-pagination"></div> -->
                </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'expert_online',
  data () {
    return {

    }
  },
  mounted(){
    this.isswiper()
  },
  methods:{
    isswiper(){
       var swiper = new Swiper('.swiper-container_two', {
            slidesPerView: 2.5,
            slidesPerColumn: 2,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
          var swiper = new Swiper('.swiper-container', {
             slidesPerView: 3,
             spaceBetween: 10,
           scrollbar: {
             el: '.swiper-scrollbar',
             hide: true,
           }
          })
    }
  }
}
</script>
<style scoped>
  @import '../assets/css/expert_online.css'

</style>
