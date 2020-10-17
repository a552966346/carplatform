<template>
  <div class="examination_all">
  	<div class="examination_top" >
  			<p v-bind:class="{ break: isBreak }" @click="exa_switch_one">全程代办</p>
  			<p v-bind:class="{ break: !isBreak }" @click="exa_switch_two">自驾前往</p>
  	</div>
  	<div class="examination_center">
  		<div class="examination_center_one " v-show="isBreak">
  			<div class="examination_position">
  				<p>接车位置</p>
  				<select name="position">
  					<option value="">上海浦发区**路**号**汽车监测站</option>
  				</select>
  			</div>
  			<div class="examination_location" id="container">

  			</div>
  			<div class="center_one_inp">
  				<div class="examination_inp">
  					<p>预约时间</p>
  					<input type="date" name="time" placeholder="请选择预约日期" id="" value="" />
  				</div>
  				<div class="examination_inp">
  					<p>预留电话</p>
  					<input type="nub" name="phone"  placeholder="请输入您的电话号" id="" value="" />
  				</div>
  			</div>
  			<div class="examination_payment">
  				<button type="button">当前审车费用预计<span >300元</span></button>
  			</div>
  		</div>
  		<div class="examination_center_one" v-show="!isBreak" >
  			<div class="center_one_all">
  				<div class="examination_inp">
  					<p>预留电话</p>
  					<input type="nub" name="phone" placeholder="请输入您的电话号" id="" value="" />
  				</div>
  				<div class="center_two">
  					<img src="../../static/img/location.png" >
  					<span>等待通知审车时间</span>
  				</div>
  				<div class="examination_payment">
  					<button type="button">当前审车费用预计<span >300元</span></button>
  				</div>
  			</div>
  		</div>
  		<div class="examination_bottom">
  			<div class="bottom_header">
  			   <span class="line"></span>
  			   <span class="text">审车携带资料</span>
  			   <span class="line"></span>
  			</div>
  			<div class="bottom_text">
  				<p class="text">一、审车所需手续</p>
  				<p class="text_two">
  				<span>1、行驶证原件</span><br />
  				<span>2、有效的交强险副本原件（含车船税）</span><br />
  				<span>3、车主身份证原件</span><br />
  				<span>4、如果你的车主是单位含需要带上公章哦</span><br />
  				</p>
  				<p class="text">一、审车流程</p>
  				<p class="text_two">
  				<span>1、进行车辆唯一性确认。</span><br />
  				<span>2、对车尾、车速、制动、灯光、侧滑、地沟、等工位进行监测，并对检测部位进行自动拍照。</span><br />
  				<span>3、核发环保标志。</span><br />
  				<span>4、机动车安全技术检验报告单，拍照上传照片。</span><br />
  				<span>5、保险审核</span><br />
  				<span>6、缴费</span><br />
  				<span>7、打印审验合格证</span><br />
  				</p>
  				<p class="text">嘉伟监测站咨询电话：0371-55030777</p>
  			</div>
  		</div>
  	</div>
  	<div class="examination_last">
  		<div class="last_left">
  			<img src="../../static/img/customer.png" >
  			<p>联系商家</p>
  		</div>
  		<div class="last_right">
  			<a href="">立即预约</a>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'examination',
    data() {
      return {
        isBreak:true,
      }
    },
    mounted:function(){
        this.$store.state.heard_title ='车平台 - 审车代办'
        //定义地图中心点坐标
        var center = new TMap.LatLng(39.984120, 116.307484)
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        var map = new TMap.Map(document.getElementById('container'), {
            center: center,//设置地图中心点坐标
            zoom: 11,   //设置地图缩放级别
            viewMode:'2D',
        });
    },
    methods:{
      // $(".examination_top>p").click(function(){
      // 	$(".examination_top>p").removeClass("break");
      // 	$(this).addClass("break");
      // 	$(".examination_center_one").hide();
      // 	console.log($(this).index())
      // 	$('.examination_center_one').eq($(this).index()).show()
      // })
      exa_switch_one: function(){
           this.isBreak=true;
      },
      exa_switch_two: function(){
          this.isBreak=false;
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/examination.css'

</style>
