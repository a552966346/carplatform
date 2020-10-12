<template>
  <div class="personal_center">
    <!-- 黑色块内容 -->
    <div class="personalcenter_top">
    	<!-- 登录资料 -->
    	<div class="personalcenter_top_login">
    			<div class="personalcenter_top_loginimg">
    				<img src="../assets/portrait.jpg" >
            <div class="vip">
              <img src="../assets/VIP.png" >
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
    		<a href="#">
    			<div class="personalcenter_bottom_item">
    				<p>5</p>
    				<p>积分</p>
    			</div>
    		</a>
    		<a href="#">
    			<div class="personalcenter_bottom_item">
    				<p>0</p>
    				<p>待办</p>
    			</div>
    		</a>
    		<a href="#">
    			<div class="personalcenter_bottom_item">
    				<p>0</p>
    				<p>我的预约</p>
    			</div>
    		</a>
    		<a href="#">
    			<div class="personalcenter_bottom_item">
            <p><img src="../assets/personalcenter_coupon.png" ></p>
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
        		<a href="">
        			<p>我的订单</p>
        			<p><span>全部订单</span><i class="iconfont icon-youjiantou"></i></p>
        		</a>
        	</div>
          <div class="dingdan_center">
        		<a href="#">
        			<img src="../assets/personal_center_pay.png" >
        			<p>待付款</p>
        		</a>
        		<a href="#">
        			<img src="../assets/personal_center_delivered.png" >
        			<p>待发货</p>
        		</a>
        		<a href="#">
        			<img src="../assets/personal_center_receive.png" >
        			<p>待收货</p>
        		</a>
        		<a href="#">
        			<img src="../assets/personal_center_evaluated.png" >
        			<p>待评价</p>
        		</a>
        		<a href="#">
        			<img src="../assets/personal_center_refund.png" >
        			<p>待付款</p>
        		</a>
        	</div>
        </div>
        <!-- 服务项目 -->
        <div class="center_bottom">
        	<a href="#">
        		<img src="../assets/personal_centercontact.png" >
        		<p>联系客服</p>
        	</a>
        	<a href="#">
        		<img src="../assets/personal_center_car.png" >
        		<p>审车代办</p>
        	</a>
        	<a href="#">
        		<img src="../assets/personal_center_repair.png" >
        		<p>维修与救援</p>
        	</a>
        	<a href="#">
        		<img src="../assets/personal_center_maintain.png" >
        		<p>快修与保养</p>
        	</a>
        	<a href="#">
        		<img src="../assets/personal_center_tire.png" >
        		<p>轮胎更换</p>
        	</a>
        	<a href="#">
        		<img src="../assets/personal_center_expert.png" >
        		<p>专家在线</p>
        	</a>
        	<a href="#">
        		<img src="../assets/personal_center_quality.png" >
        		<p>品质贴膜</p>
        	</a>
        	<a href="#">
        		<img src="../assets/personal_center_member.png" >
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;list-style: none;}
  .personal_center{width: 100%;}
  /* 黑色块内容 */
  .personalcenter_top{width: 100%;background-color: #3E3E3E;padding: 0 20px;}
  /* 登录资料 */
  .personalcenter_top_login{display: flex;padding: 25px 0px;}
  /* 头像 */
  .personalcenter_top_loginimg{width: 50px;height: 50px;display: flex;justify-content: center;align-items: flex-end;border: 2px solid #FADDB3;border-radius: 50%;position: relative;}
  .personalcenter_top_loginimg>img{width: 100%;height: 100%;border-radius: 50%;}
  .vip{position: absolute;right: 0;}
  .vip img{height: 13px;}
  /* 登录信息 */
  .personalcenter_top_logintext{padding-left: 20px;flex: 1;display: flex;flex-direction: column;justify-content: center;align-items: flex-start;}
  .personalcenter_top_logintext>p{color:#fff;font-size: 14px;}
  .personalcenter_top_logintext>p:nth-child(1){font-weight: bold;}
  .personalcenter_top_logintext>p:nth-child(2){color: #A3A3A3;padding-top: 10px;font-size: 12px;}
  /* 设置 */
  .top_top_set{width: 50px;display: flex;align-items: center;justify-content: flex-end;}
  .top_top_set>a{color: #FADDB3;font-size: 14px;}
  /* 登录块 */
  .personalcenter_bottom{display: flex;padding: 10px 0px;}
  .personalcenter_bottom a{flex: 1;}
  .personalcenter_bottom_item{color: #FADDB3;font-size: 12px;}
  .personalcenter_bottom_item p:nth-child(1){padding-bottom: 5px;height: 20px;}
  .personalcenter_bottom_item p:nth-child(1) img{height: 20px;}
  /* 白色块内容 */
  .personalcenter_cont{width: 100%;}
  /* 滚动快 */
  .personalcenter_cont_news{height:40px;background-color: #FFFFFF;display: flex;justify-content: space-between;align-items: center;padding: 0 20px;}
  .personalcenter_cont_news>marquee{width: 100%;height: 100%;display: flex;align-items: center;}
  .personalcenter_cont_scoll{width: 100%;height: 100%;display: flex;align-items: center;}
  .personalcenter_cont_scoll>div{width: 20px;}
  .dian{width: 10px;height: 10px;border-radius: 50%;background-color: #f04a57;margin-right: 15px;}
  .word{flex: 1;justify-content: flex-start;text-align: left;}
  /* 我的订单模块 */
  .personalcenter_cont_order{width: 100%;}
  /* 我的订单  */
  .dingdan{width: 100%;padding: 0px 20px;/* background-color: #F5F5F5; */}
  .dingdan_top{height: 30%;background-color: #FFFFFF;border-bottom: 2px solid #F0F0F0;    padding: 20px 0px;}
  .dingdan_top>a{height: 100%;display: flex;justify-content: space-between;align-items: center;color: #888;}
  .dingdan_top>a>p:nth-child(1){font-size: 14px;color: #333;}
  .dingdan_top>a>p:nth-child(2){font-size: 12px;color: #666;}
  /* 我的订单块 */
  .dingdan_center{display: flex;padding:15px 0px;background-color: #FFFFFF;}
  .dingdan_center>a{width: 20%;text-align: center;}
  .dingdan_center>a>img{width: 25px;height: 25px;}
  .dingdan_center>a>p{padding-top: 15px;font-size: 12px;color: #6E6E6E;}
  /* 服务项目 */
  .center_bottom{width: 100%;display: flex;flex-wrap: wrap;padding: 0px 20px;padding-top: 30px;}
  .center_bottom>a{width: 25%;text-align: center;margin-bottom: 20px;}
  .center_bottom>a>img{height: 25px;width: 25px;}
  .center_bottom>a>p{color: #6E6E6E;font-size: 12px;padding-top: 10px;}


</style>
