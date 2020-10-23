<template>
  <div class="quality_film">
    <!-- banner-->
    <div class="quality_top">
    	<img src="../../static/img/quality_film_top.png" >
    </div>
    <!-- 内容 -->
    <div class=" quality_center">
      <!--筛选 -->
      <div class="center_screen">
        <select name="data">
          <option value="1">我的</option>
        </select>
        <select name="sort">
          <option value="1">你的</option>
        </select>
        <select name="screen">
          <option value="1">333</option>
        </select>
      </div>
      <!--地图 -->
      <div class="center_navigation" id="container" @click="shop">

       </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'quality_film',
  data () {
    return {
      msg: 'quality_film'
    }
  },
  mounted:function(){
      this.$store.state.heard_title='车平台 - 维修与救援'
     /* //定义地图中心点坐标
     var center = new TMap.LatLng(39.984120, 116.307484)
     //定义map变量，调用 TMap.Map() 构造函数创建地图
     var map = new TMap.Map(document.getElementById('container'), {
         center: center,//设置地图中心点坐标
         zoom: 11,   //设置地图缩放级别
         viewMode:'2D',
     }); */
  },
  methods:{
      shop(ent) {
        console.log(ent)
        let that = this;
        //console.log(that.urls)
        layui.use('layer', function() {
          let layer = layui.layer;
         // console.log(typeof(that))
        // $(".layui-layer").css("background", "none");
          layer.open({
            type: 1,
            title: false,
            //样式类名
            closeBtn: 0, //不显示关闭按钮
            anim: 2,
            area: ['90%', '160px'],
            offset: '400px',
            shade: 0.01,
            id: 'one',
            shadeClose: true, //开启遮罩关闭
            content: `<div class="shop">
								<div class="upper">
									<div class="upper_img">
										<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3459447635,4017257470&fm=26&gp=0.jpg" >
									</div>
									<div class="upper_text">
										<p>路虎养车(晋中文苑东街店)</p>
										<div class="upper_text_score">
											<p>快修店</p>
											<p>5级</p>
											<p><span>评分</span>5.0</p>
										</div>
										<div class="upper_text_phont">
											<img src="img/phone.png" >
											<p>123-2345-7692</p>
										</div>
									</div>
									<div class="upper_daohang">
										<a href="#"><img src="img/daohang.png" >
										导航</a>
									</div>
								</div>
                <div class="center">
                  <div class="center_left"><p>精选服务</p></div>
                  <div class="center_right"><img src="../../static/img/wash__layer_one.png" alt=""><p>普洗</p></div>
                  <div class="center_right"><img src="../../static/img/wash__layer_one.png" alt=""><p>精洗</p></div>
                  <div class="center_right"><img src="../../static/img/wash__layer_one.png" alt=""><p>全车内饰清洗</p></div>
                  <div class="center_right"><img src="../../static/img/wash__layer_one.png" alt=""><p>打蜡</p></div>
                </div>
								<div class="bottom">
									<div class="bottom_left">
										<p>山西省晋中市榆次区文苑街239号安徽的卡号啊</p>
									</div>
									<div class="bottom_right">
										<a href="#">去换胎</a>
									</div>
								</div>
							</div> `
          });
        });
      },
  }
}
</script>
<style  scoped>
 @import '../assets/css/quality_film.css';
</style>
