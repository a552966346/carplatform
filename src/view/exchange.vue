<template>
  <div class="exchange_all">
  	<div class="exchange_top">
  		<div class="swiper-container gallery-top">
  		    <div class="swiper-wrapper">
  		      <div class="swiper-slide " ><img src="../assets/picture/shujuxian.png" ></div>
  		      <div class="swiper-slide" ><img src="../assets/picture/xian.jpg" ></div>
  			  <div class="swiper-slide" ><img src="../assets/picture/xian3.jpg" ></div>
  		    </div>
  		</div>
  		 <div class="swiper-container gallery-thumbs">
  		    <div class="swiper-wrapper">
  		      <div class="swiper-slide boder" ><img src="../assets/picture/xian2.jpg" ></div>
  		      <div class="swiper-slide"><img src="../assets/picture/xian.jpg" ></div>
  		      <div class="swiper-slide"><img src="../assets/picture/xian3.jpg" ></div>
  		    </div>
  		  </div>
  	</div>
  	<div class="exchange_center">
  		<div class="center_xinxi">
  			<p>苹果数据线</p>
  			<div class="xingxi_money">
  				<p>1499积分<span>￥125</span></p>
  				<p>限量抢兑中</p>
  			</div>

  			<p><span>配送方式：快递</span><span>官方正品</span></p>
  		</div>
  		<div class="center_rule">
  			<p>兑换规则</p>
  			<div class="rule_text">
  				<p>用户每天可以在微信小程序签到领积分</p>
  				<p>购买商品领取积分，评价商品林区积分</p>
  				<p>参加特定活动领取积分</p>
  				<p>用户每天可以在微信小程序签到领积分</p>
  				<p>购买商品领取积分，评价商品林区积分</p>
  				<p>参加特定活动领取积分</p>
  				<p>用户每天可以在微信小程序签到领积分</p>
  				<p>购买商品领取积分，评价商品林区积分</p>
  				<p>参加特定活动领取积分</p>
  				<p>用户每天可以在微信小程序签到领积分</p>
  				<p>购买商品领取积分，评价商品林区积分</p>
  				<p>参加特定活动领取积分</p>
  				<p>用户每天可以在微信小程序签到领积分</p>
  				<p>购买商品领取积分，评价商品林区积分</p>
  				<p>参加特定活动领取积分</p>
  				<p>用户每天可以在微信小程序签到领积分</p>
  				<p>购买商品领取积分，评价商品林区积分</p>
  				<p>参加特定活动领取积分</p>

  			</div>
  		</div>
  	</div>
  	<div class="exchange_bottom">
  		<p>总计：<span>1988积分</span></p>
  		<a href="javaScript:;">立即兑换</a>
  	</div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'exchange',
    data() {
      return {

      }
    },
    mounted:function(){
          this.$store.state.heard_title ='车平台 - 积分商城'
    },
    mounted(){
      var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
      	  centerInsufficientSlides:true,
      	 // loop : true,
          });
          var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
      	  // loop : true,
            thumbs: {
      		  swiper:galleryThumbs,
      	  }
          })

    }
  }
</script>

<style>
  @import '../assets/css/exchange.css'
</style>
