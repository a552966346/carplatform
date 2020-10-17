<template>
  <div class="integral">
    <div class="integral_top">
      <div class="integral_top_text">
        <div class="top_text_txt">
          <p>当前积分</p>
          <h1>3,109</h1>
        </div>
        <a href="#" @click="int_sign">
           <div class="text_sign">
              <img src="../../static/img/integral_sign.png" alt="">
              <p>每日签到</p>
           </div>
         </a>
      </div>
      <div class="integral_top_img">
        <a href="#">
          <div class="top_img_class">
              <img src="../../static/img/integral_rule.png" alt="">
              <p>积分规则</p>
          </div>
        </a>
        <a href="#">
          <div class="top_img_class">
              <img src="../../static/img/integral_exchange.png" alt="">
              <p>积分兑换</p>
          </div>
        </a>
        <a href="#">
          <div class="top_img_class">
              <img src="../../static/img/integral_details.png" alt="">
              <p>积分明细</p>
          </div>
        </a>
      </div>
    </div>
    <div class="integral_center">
      <div class="center_top">
        <p>换好物</p>
        <a href="">更多<i class="iconfont icon-youjiantou"></i></a>
      </div>
      <div class="center_commodity">
        <div class="center_commodity_item">
            <img src="../../static/img/xian.jpg" alt="">
            <p>苹果数据线</p>
            <p>￥1499积分</p>
        </div>
        <div class="center_commodity_item">
            <img src="../../static/img/xian.jpg" alt="">
            <p>苹果数据线</p>
            <p>￥1499积分</p>
        </div>
        <div class="center_commodity_item">
            <img src="../../static/img/xian.jpg" alt="">
            <p>苹果数据线</p>
            <p>￥1499积分</p>
        </div>
        <div class="center_commodity_item">
            <img src="../../static/img/xian.jpg" alt="">
            <p>苹果数据线</p>
            <p>￥1499积分</p>
        </div>
      </div>
      <div class="center_top">
        <p>优惠卡券</p>
        <a href="">更多<i class="iconfont icon-youjiantou"></i></a>
      </div>
      <div class="center_bottom">
        <div class="center_bottom_all">
          <div class="center_bottom_coupon">
            <div class="coupon_text">
              <div>
                  <p>￥<span>20</span></p>
                  <p>满100享用</p>
              </div>
            </div>
          </div>
          <p>优惠保养券</p>
           <p>￥1499积分</p>
         </div>
         <div class="center_bottom_all">
           <div class="center_bottom_coupon">
             <div class="coupon_text">
               <div>
                   <p>￥<span>20</span></p>
                   <p>满100享用</p>
               </div>
             </div>
           </div>
           <p>优惠保养券</p>
            <p>￥1499积分</p>
          </div>
          <div class="center_bottom_all">
            <div class="center_bottom_coupon">
              <div class="coupon_text">
                <div>
                    <p>￥<span>20</span></p>
                    <p>满100享用</p>
                </div>
              </div>
            </div>
            <p>优惠保养券</p>
             <p>￥1499积分</p>
           </div>
           <div class="center_bottom_all">
             <div class="center_bottom_coupon">
               <div class="coupon_text">
                 <div>
                     <p>￥<span>20</span></p>
                     <p>满100享用</p>
                 </div>
               </div>
             </div>
             <p>优惠保养券</p>
              <p>￥1499积分</p>
            </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'integral',
    data(){
      return{

      }
    },
    mounted: function(){
      this.$store.state.heard_title ='车平台 - 积分'
    },
    methods:{
      int_sign:function(){
        var that = this;
        console.log(that.urls)
        layui.use('layer', function() {
          var layer = layui.layer;
          })
        layer.open({
          type: 1,
          title: false,
          //样式类名
          closeBtn: 1, //不显示关闭按钮
          anim: 2,
          area: ['75%', 'auto'],
          offset: '400px',
          shade: 0.4,
          id: 'one',
          shadeClose: true, //开启遮罩关闭
          content: `11111`
        })
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/integral.css'
</style>
