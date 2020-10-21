<template>
  <div class="tyre_all">
  	<!-- banner -->
  	<img src="../../static/img/tyre.png" >
  	<div class="tyre_top">
  		<p>轮胎更换</p>
  		 <p>轮胎变形</p>
  		 <p>轮胎鼓包、开裂</p>
  		 <p>轮胎缺气碾压损坏</p>
  		 <p>轮胎被化学物质侵蚀</p>
  	</div>
  	<div class="tyre_center">
  		<!-- 大数据 -->
  		<div class="center_data">

  		</div>
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
  		<div class="center_navigation" id="container" >

  		</div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'tyre',
      data() {
        return {
          urls: require('../../static/img/daohang.png'),
          urlp: require('../../static/img/phone.png'),
        }
      },
      mounted:function(){
          this.$store.state.heard_title ='车平台 - 轮胎跟换'
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
              content: ` <div class="shop" ref="total" >
          								<div class="upper">
          									<div class="upper_img">
          										<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3459447635,4017257470&fm=26&gp=0.jpg" >
          									</div>
          									<div class="upper_text">
          										<div class="upper_text_top">
          											<p>路虎养车&nbsp;&nbsp;(晋中文苑东街店)</p>
          											<a href="#"><img src="${that.urls}">
          											导航</a>
          										</div>
          										<div class="upper_text_score">
          											<p>快修店</p>
          											<p>5级</p>
          											<p><span>评分</span>5.0</p>
          										</div>
          										<div class="upper_text_phont">
          											<img src="${that.urlp}" >
          											<p>123-2345-7692</p>
          										</div>
          									</div>

          								</div>
          								<div class="bottom">
          									<div class="bottom_left">
          										<p>山西省晋中市榆次区文苑街239号安徽的卡号啊</p>
          									</div>
          									<div class="bottom_right">
          										<a href="#">去换胎</a>
          									</div>
          								</div>
          							</div>`
            });
          });
        }
      }
    }
  </script>

  <style scoped>
    @import '../assets/css/tyre.css'

  </style>
