<template>
  <!--刘玉霞 -->
  <div class="personal_center">
    <!-- 黑色块内容 -->
    <div class="personalcenter_top">
    	<!-- 登录资料 -->
    	<div class="personalcenter_top_login">
    			<div class="personalcenter_top_loginimg">
    				<img src="../../static/img/portrait.jpg" >
            <div class="vip">
              <img src="../../static/img/VIP.png" >
            </div>
    			</div>
          <div class="personalcenter_top_logintext">
            <p>lalala</p>
            <p>上次登录<span style="padding-left: 10px;">2020-02-02</span></p>
          </div>
          <div class="top_top_set">
            <a href="#">设置</a>
          </div>
    	</div>
    	<!-- 我的 -->
    	<div class="personalcenter_bottom">
    		<router-link to="/isdetails">
    			<div class="personalcenter_bottom_item">
    				<p>5</p>
    				<p>我的预约</p>
    			</div>
    		</router-link>
    		<router-link to="news">
    			<div class="personalcenter_bottom_item">
    				<p>0</p>
    				<p>我的消息</p>
    			</div>
    		</router-link>
    		<router-link to="">
    			<div class="personalcenter_bottom_item">
            <p><img src="../../static/img/personalcenter_coupon.png" ></p>
    				<p>票券</p>
    			</div>
    		</router-link>
        <router-link to="order">
        	<div class="personalcenter_bottom_item">
        		<p><img src="../../static/img/personalcenter_gouwu.png"> </p>
        		<p>购物车</p>
        	</div>
        </router-link>
    	</div>
    </div>
    <!--白色块内容-->
    <div class="personalcenter_cont">
    	<!-- 广告 -->
    	<div class="personalcenter_cont_news">
        <div class="personalcenter_cont_scoll">
            <div><p class="dian"></p></div>
            <marquee>
             <p class="word">顺通广大,为您提供全方位的汽车服务</p>
            </marquee>
        </div>
    	</div>
    	<!-- 我的订单模块 -->
      <div class="personalcenter_cont_order">
        <!-- 我的订单 -->
        <div class="dingdan">
        	<div class="dingdan_top">
        		<router-link to="order">
        			<p>我的订单</p>
        			<p><span>全部订单</span><i class="iconfont icon-youjiantou"></i></p>
        		 </router-link>
        	</div>
          <div class="dingdan_center">
              <div class="dingdan_center_a">
                <router-link to="order">
                  <img src="../../static/img/personal_center_pay.png" >
                  <p>待付款</p>
                </router-link>
                <i class="iconfont icon-youjiantou"></i>
               </div>
               <div class="dingdan_center_a">
                <router-link to="order">
                  <img src="../../static/img/personal_center_delivered.png" >
                  <p>待发货</p>
                </router-link>
                <i class="iconfont icon-youjiantou"></i>
               </div>
               <div class="dingdan_center_a">
                <router-link to="order">
                  <img src="../../static/img/personal_center_receive.png" >
                  <p>待收货</p>
                </router-link>
                <i class="iconfont icon-youjiantou"></i>
               </div>
               <div class="dingdan_center_a">
               <router-link to="order">
                  <img src="../../static/img/personal_center_evaluated.png" >
                  <p>待评价</p>
                 </router-link>
                <i class="iconfont icon-youjiantou"></i>
               </div>
               <div class="dingdan_center_a">
                <router-link to="order">
                  <img src="../../static/img/personal_center_refund.png" >
                  <p>退款/售后</p>
                </router-link>
                <i class="iconfont icon-youjiantou"></i>
               </div>
        	</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal_center',
  data () {
    return {
      msg: 'personal_center'
    }
  },
  mounted:function(){
        this.$store.state.heard_title ='车平台 - 个人中心'
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/personal_center.css'

</style>
