<template>
  <div class="payment_all">
  	<div class="payment_top">
  		<div class="top_img">
  			<!-- <img src="../../static/img/card.png" > -->
  			<div class="top_img_xinxi">
  				<p>LALALA</p>
  				<a href="#">开通自动续费</a>
  			</div>
  			<p>NO.125426798</p>
  		</div>
  	</div>
  	<div class="payment_center">
  		<div class="swiper-container">
  		    <div class="swiper-wrapper">
  		          <div class="swiper-slide color">
  					  <div class="money">
  						  <div class="money_one">
  						  	<p>限时特惠</p>
  						  </div>
  						  <div class="money_two">
  							<p>连续包月</p>
  							<p><span>￥</span>100</p>
  							<p>￥158</p>
  							<p>连续包月，次月可随时取消</p>
  							</div>
  					  </div>
  				  </div>
  		          <div class="swiper-slide">
  					  <div class="money">
  						  <div class="money_one">
  						  	<p>限时特惠</p>
  						  </div>
  						  <div class="money_two">
  							<p>连续包年</p>
  							<p><span>￥</span>100</p>
  							<p>￥158</p>
  							<p>连续包月，次月可随时取消</p>
  							</div>
  					  </div>
  				  </div>
  				  <div class="swiper-slide">
  					  <div class="money">
  						  <div class="money_one">
  						  </div>
  						  <div class="money_two">
  							<p>连续包季</p>
  							<p><span>￥</span>100</p>
  							<p>￥158</p>
  							<p>连续包月，次月可随时取消</p>
  							</div>
  					  </div>
  				  </div>
  				  <div class="swiper-slide">
  					  <div class="money">
  						  <div class="money_one">
  							  <p></p>
  						  </div>
  						  <div class="money_two">
  							<p>连续包月</p>
  							<p><span>￥</span>100</p>
  							<p>￥158</p>
  							<p>连续包月，次月可随时取消</p>
  							</div>
  					  </div>
  				  </div>
  		    </div>
  		</div>
  		<div class="center_mode">
  			<p>支付方式</p>
  			<div class="mode">
  				<div class="mode_left">
  					<img src="../../static/img/zhifubao.png" >
  					<span>支付宝</span>
  					<span>推荐</span>
  				</div>
  				<div class="mode_right">
  					<input type="radio" name="zhifu" id="" value="" />
  				</div>
  			</div>
  			<div class="mode">
  				<div class="mode_left">
  					<img src="../../static/img/weixin.png" >
  					<span>微信</span>
  				</div>
  				<div class="mode_right">
  					<input type="radio" name="zhifu" id="" value="" />
  				</div>
  			</div>
  		</div>
  		<div class="payment_immediately">
  			<a href="">立即支付</a>
  		</div>
  		<div class="payment_equity">
  			<p>会员权益</p>
  			<div class="equity_vip">
  				<div class="equity_vip_class">
  					<img src="../../static/img/time.png" >
  					<p>保险到期提醒</p>
  				</div>
  				<div class="equity_vip_class">
  					<img src="../../static/img/examination.png" >
  					<p>审车提醒</p>
  				</div>
  				<div class="equity_vip_class">
  					<img src="../../static/img/regulations.png" >
  					<p>违章告知</p>
  				</div>
  				<div class="equity_vip_class">
  					<img src="../../static/img/license.png" >
  					<p>驾照更换提醒</p>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'payment',
    data() {
      return {

      }
    },
    mounted:function(){
      this.$store.state.heard_title ='车平台 - 会员中心'
         var mySwiper = new Swiper ('.swiper-container', {
            slidesPerView: 3,
         	spaceBetween: 10,
           	  centeredSlidesBounds: true,
           	  loop: false,
                 pagination: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                   hideOnClick: true,
            }
         	})
       }

      	// $(".swiper-slide").click(function(){
      	// 	$(".swiper-slide").removeClass("color");
      	// 	$(this).addClass("color");
      	// })
  }
</script>

<style scoped>
 @import '../assets/css/payment.css'
</style>
