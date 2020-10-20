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
            <iframe id="mapPage" width="70%" height="100%" frameborder=0 z-index="9999"
                src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=W24BZ-WXDCO-JJGWX-SOQQZ-2HQRO-5JBJ4&referer=myapp">
            </iframe>
  			</div>
        <div class="examination_location"  id="container" >

        </div>
  			<div class="center_one_inp">
  				<div class="examination_inp">
  					<p>预约时间</p>
  					<input type="date" name="time" placeholder="请选择预约日期" id="" value="" v-model="date"/>
  				</div>
  				<div class="examination_inp">
  					<p>预留电话</p>
  					<input type="nub" name="phone"  placeholder="请输入您的电话号" id="" value=""v-model="phone" />
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
  					<input type="nub" name="phone" placeholder="请输入您的电话号" id="" value="" v-model="phone"/>
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
  			<a href="#" @click="appointment">立即预约</a>
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
        address:'',
        date:'',
        phone:'',
        //position:[],
        longitude:'',//经度
        latitude:''//纬度
      }
    },
    mounted:function(){
      var that = this;
        that.$store.state.heard_title ='车平台 - 审车代办';
        var geolocation = new qq.maps.Geolocation('W24BZ-WXDCO-JJGWX-SOQQZ-2HQRO-5JBJ4', 'myapp');
        // var positionNum = 0;
        var options = {timeout: 10000000};
        geolocation.getLocation(showPosition, showErr, options);
        function showPosition(position) {
          console.log(that)
          that.latitude = position.lat;
          that.longitude = position.lng;
          //定义地图中心点坐标
          var center = new TMap.LatLng(that.latitude, that.longitude)
          //定义map变量，调用 TMap.Map() 构造函数创建地图
          var map = new TMap.Map(document.getElementById('container'), {
              center: center,//设置地图中心点坐标
              zoom: 11,   //设置地图缩放级别
              viewMode:'2D',
          });

          var markerLayer = new TMap.MultiMarker({
                      id: 'container',
                      map: map,
                     
                      styles: { //点标注的相关样式
                                      "marker": new TMap.MarkerStyle({
                                          "width": 25,
                                          "height": 35,
                                          "anchor": { x: 16, y: 32 },
                                          "src": "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png"
                                      })
                                  },
                      geometries: [{ //点标注数据数组
                                      "id": "demo",
                                      "styleId": "marker",
                                      "position": new TMap.LatLng(that.latitude, that.longitude),
                                      "properties": {
                                      "title": "marker"
                                      }
                                  }],
                  });
          };
          function showErr() {
            console.log("定位失败")
          };
    },
    methods:{
    map(){
       markerLayer.add({
                  	position: evt.latLng
                  });
    },
      exa_switch_one(){
           this.isBreak=true;
      },
      exa_switch_two(){
          this.isBreak=false;
      },
        appointment(){

          console.log(this.latitude)
        this.$addr.post('/index/proxy/collect', {
              address: this.address,
              latitude: this.latitude,
              longitude: this.longitude,
              type:1,
              date: this.date,
              phone: this.phone
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      },
    }
  }
</script>

<style scoped>
  @import '../assets/css/examination.css'

</style>
