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
    		<a href="#" @click="integral">
    			<div class="personalcenter_bottom_item">
    				<p>5</p>
    				<p>积分</p>
    			</div>
    		</a>
    		<a href="#" @click="agency">
    			<div class="personalcenter_bottom_item">
    				<p>0</p>
    				<p>待办</p>
    			</div>
    		</a>
    		<a href="#" @click="appointment">
    			<div class="personalcenter_bottom_item">
    				<p>0</p>
    				<p>我的预约</p>
    			</div>
    		</a>
    		<a href="#" @click="coupon">
    			<div class="personalcenter_bottom_item">
            <p><img src="../../static/img/personalcenter_coupon.png" ></p>
    				<p>票券</p>
    			</div>
    		</a>
    	</div>
    </div>
    <!--白色块内容-->
    <div class="personalcenter_cont">
    	<!-- 广告 -->
    	<div class="personalcenter_cont_news">
        <div class="personalcenter_cont_scoll">
            <div><p class="dian"></p></div>
            <marquee>
             <p class="word">APP专向，30天4.65%，低风险理财。</p>
            </marquee>
        </div>
    	</div>
    	<!-- 我的订单模块 -->
      <div class="personalcenter_cont_order">
        <!-- 我的订单 -->
        <div class="dingdan">
        	<div class="dingdan_top">
        		<a href="" @click="order">
        			<p>我的订单</p>
        			<p><span>全部订单</span><i class="iconfont icon-youjiantou"></i></p>
        		</a>
        	</div>
          <div class="dingdan_center">
        		<a href="#" @click="payment">
        			<img src="../../static/img/personal_center_pay.png" >
        			<p>待付款</p>
        		</a>
        		<a href="#" @click="delivered">
        			<img src="../../static/img/personal_center_delivered.png" >
        			<p>待发货</p>
        		</a>
        		<a href="#" @click="receive">
        			<img src="../../static/img/personal_center_receive.png" >
        			<p>待收货</p>
        		</a>
        		<a href="#" @click="evaluated">
        			<img src="../../static/img/personal_center_evaluated.png" >
        			<p>待评价</p>
        		</a>
        		<a href="#" @click="refund">
        			<img src="../../static/img/personal_center_refund.png" >
        			<p>退款/售后</p>
        		</a>
        	</div>
        </div>
        <!-- 服务项目 -->
        <div class="center_bottom">
        	<a href="#" @click="centercontact">
        		<img src="../../static/img/personal_centercontact.png" >
        		<p>联系客服</p>
        	</a>
        	<a href="#" @cliack="examination">
        		<img src="../../static/img/personal_center_car.png" >
        		<p>审车代办</p>
        	</a>
        	<a href="#" @click="repair">
        		<img src="../../static/img/personal_center_repair.png" >
        		<p>维修与救援</p>
        	</a>
        	<a href="#" @click="maintain">
        		<img src="../../static/img/personal_center_maintain.png" >
        		<p>快修与保养</p>
        	</a>
        	<a href="#" @click="tire">
        		<img src="../../static/img/personal_center_tire.png" >
        		<p>轮胎更换</p>
        	</a>
        	<a href="#" @click="expert">
        		<img src="../../static/img/personal_center_expert.png" >
        		<p>专家在线</p>
        	</a>
        	<a href="#" @click="quality">
        		<img src="../../static/img/personal_center_quality.png" >
        		<p>品质贴膜</p>
        	</a>
        	<a href="#" @click="member">
        		<img src="../../static/img/personal_center_member.png" >
        		<p>会员中心</p>
        	</a>
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
    //积分
    integral:function(){
      this.$router.push({
         name: '',
       })
    },
    //待办
    agency:function(){
      this.$router.push({
         name: '',
       })
    },
    //我的预约
    appointment:function(){
      this.$router.push({
         name: '',
       })
    },
    //券票
    coupon:function(){
      this.$router.push({
         name: '',
       })
    },
    //全部订单
    order:function(){
      this.$router.push({
         name: '',
       })
    },
    //待付款
    payment:function(){
      this.$router.push({
         name: '',
       })
    },
    //代发货
    delivered:function(){
      this.$router.push({
         name: '',
       })
    },
    //待收货
    receive:function(){
      this.$router.push({
         name: '',
       })
    },
    //待评价
    evaluated:function(){
      this.$router.push({
         name: '',
       })
    },
    //联系客服
    centercontact:function(){
      this.$router.push({
         name: '',
       })
    },
    //审车代办
    examination:function(){
      this.$router.push({
         name: 'examination',
       })
    },
    //维修与救援
    repair:function(){
      this.$router.push({
         name: 'quality_film',
       })
    },
    //快修与保养
    maintain:function(){
      this.$router.push({
         name: 'repair_maintenance',
       })
    },
    //轮胎更换
    tire:function(){
      this.$router.push({
         name: 'tyre',
       })
    },
    //专家在线
    expert:function(){
      this.$router.push({
         name: 'expert_online',
       })
    },
    //品质贴膜
    quality:function(){
      this.$router.push({
         name: 'Film',
       })
    },
    //会员中心
    member:function(){
      this.$router.push({
         name: 'exclusive_services',
       })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/personal_center.css'

</style>
