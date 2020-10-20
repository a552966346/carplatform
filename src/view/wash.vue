<template>
  <div class="wash_all">
  	<!-- 轮播图 -->
  	<div class="wash_lunbo">
  		<div class="swiper-container">
  			<div class="swiper-wrapper">
  				<div class="swiper-slide wash_b1"><img src="../../static/img/wash_one.png" ></div>
  				<div class="swiper-slide wash_b1"><img src="../../static/img/wash_two.png" ></div>
  				<div class="swiper-slide wash_b1"><img src="../../static/img/wash_three.png" ></div>
  			</div>
  		</div>
  	</div>
  	<div class="wash_center">
  		<!-- 筛选 -->
  		<div class="center_screen">
  			<select name="data">
  				<option value="1">榆次区</option>
  			</select>
  			<select name="sort">
  				<option value="1">默认排序</option>
  			</select>
  			<select name="screen">
  				<option value="1">筛选</option>
  			</select>

  		</div>
  			<!-- 导航 -->
  		<div class="center_navigation" id="container" @click="shop">

  		</div>
  	</div>
  </div>
</template>

<script>
import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'repair',
    data() {
      return {
        urls: require('../../static/img/daohang.png'),
        urlp: require('../../static/img/phone.png'),
      }
    },
    mounted:function(){
       this.$store.state.heard_title ='车平台 - 洗车'
       var mySwiper = new Swiper ('.swiper-container', {
           loop: true, // 循环模式选项
          slidesPerView: 1.2,
       	spaceBetween: -15,
         	  centeredSlides: true,
         	  loop: true,
               pagination: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                 hideOnClick: true,
               },
       	})
        //定义地图中心点坐标
        var center = new TMap.LatLng(39.984120, 116.307484)
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        var map = new TMap.Map(document.getElementById('container'), {
            center: center,//设置地图中心点坐标
            zoom: 11,   //设置地图缩放级别
            viewMode:'2D',
        });
    },
    methods: {
      shop: function() {
        var that = this;
        console.log(that.urls)
        layui.use('layer', function() {
          var layer = layui.layer;
         // console.log(typeof(that))
        // $(".layui-layer").css("background", "none");
          layer.open({
            type: 1,
            title: false,
            //样式类名
            closeBtn: 0, //不显示关闭按钮
            anim: 2,
            area: ['90%', 'auto'],
            offset: '400px',
            shade: 0.01,
            id: 'one',
            shadeClose: true, //开启遮罩关闭
            content: `<div class="shop">
									<div class="shop_text">
										<p>路虎养车(晋中文苑东街店)</p>
										<div class="shop_text_score">
											<p>快修店</p>
											<p>5级</p>
											<p><span>评分</span>5.0</p>
										</div>
										<div class="shop_left">
											<p>山西省晋中市榆次区文苑街239号安徽的卡号啊</p>
										</div>
									</div>
									<div class="shop_a">
										<a href="#">查看详情<img src="img/right.png" ></a>

									</div>
								</div>`
          });
        });
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/wash.css'

</style>
