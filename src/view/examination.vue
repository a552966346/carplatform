<template>
  <div class="examination_all">
  	<div class="examination_top" >
  			<p v-bind:class="{ break: isBreak }" @click="exa_switch_one" v-model="value">全程代办</p>
  			<p v-bind:class="{ break: !isBreak }" @click="exa_switch_two" v-model="value">自驾前往</p>
  	</div>
  	<div class="examination_center">
  		<div class="examination_center_one " v-if="isBreak">
  			<div class="examination_position">
  				<p>接车位置</p>
            <input type="text" name="" placeholder="请选择机构位置" v-model="address" @click="toMap">
  			</div>
        <div class="examination_location"  id="container" >

        </div>
  			<div class="center_one_inp">
  				<div class="examination_inp">
  					<p>预约时间</p>
  					<input type="datetime-local" name="time" placeholder="请选择预约日期" id="data1" value="" v-model="date"/>
  				</div>
  				<div class="examination_inp">
  					<p>预留电话</p>
  					<input type="nub" name="phone" :key="a1"  placeholder="请输入您的电话号" id="phone1" value=""v-model="phone1" />
  				</div>
  			</div>
  			<div class="examination_payment">
  				<button type="button">提示：当前审车费用预计<span >{{whole}}元</span></button>
  			</div>
  		</div>
  		<div class="examination_center_one" v-else-if="!isBreak" >
  			<div class="center_one_all">
  				<div class="center_one_inp">
  					<div class="examination_inp">
  						<p>预约时间</p>
  						<input type="date" name="time" placeholder="请选择预约日期" id="data2" value="" v-model="date"/>
  					</div>
  					<div class="examination_inp">
  						<p>预留电话</p>
  						<input type="nub" name="phone" :key="a2" placeholder="请输入您的电话号" id="phone2" value=""v-model="phone2" />
  					</div>
  				</div>
  				<div class="center_two">
  					<img src="../../static/img/location.png" >
  					<span>等待通知审车时间</span>
  				</div>
  				<div class="examination_payment">
  					<button type="button">提示：当前审车费用预计<span >{{single}}元</span></button>
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
  			<p><a href="tel:400-500-600">联系商家</a></p>
  		</div>
  		<div class="last_right">
        <input type="button" @click="appointment" :value="text" :disabled="bled"/>

  		</div>
  	</div>
  </div>
</template>

<script>
  export default {

    name: 'examination',
    data() {
      return {
        value:1,
        city: '',
        isBreak:true,
        address:'',
        date:'',
        phone1:'',
        phone2:'',
        //position:[],
        longitude:'',//经度
        latitude:'',//纬度
        text:"立即预约",
        bled:false,
        position:'',
        booktime:'',
        whole:'',
        single:''
      }
    },
    created() {
       this.getLocation()
    },
    mounted:function(){
      //var  ss = this.$route.query
      var that = this;
        that.$store.state.heard_title ='车平台 - 审车代办';
       var geolocation = new qq.maps.Geolocation();
       var options = {
           timeout: 600000
       };
       that.$addr.post('index/proxy/fee')
       .then(res =>{
           console.log(res)
           that.whole = res.data.result.whole
           that.single = res.data.result.single
       })
       geolocation.getLocation(showPosition, showErr, options);
        function showPosition(position) {
          //定义地图中心点坐标
          if(that.latitude == ''){
            that.latitude = position.lat;
            that.longitude = position.lng;
            that.address = position.addr;
            var center = new TMap.LatLng(that.latitude, that.longitude)
          }else{
           var center = new TMap.LatLng(that.latitude, that.longitude)
          }
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
      getUrlKey(name) {
      		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
      	},
      exa_switch_one(){
           this.isBreak=true;
           this.value = 1
      },
      exa_switch_two(){
          this.isBreak=false;
          this.value = 2
      },
        appointment(){
          var that = this
          let reg1 = /^[1][3,4,5,7,8][0-9]{9}$/;
           let phone = that.phone.trim()

          layui.use('layer', function() {
            var layer = layui.layer;
            if(that.value==1){
              if(that.address==''){
                layer.msg("请选择接车位置")
              }
              else if(that.date==''){
                layer.msg("请选择接车时间")
              }
              else if(that.phone==""){

                 layer.msg("请输入联系电话")
              }else{
                  if((reg1.test(phone))){
                      that.$addr.post('/index/proxy/collect', {
                             type:that.value,
                             address: that.address,
                             latitude: that.latitude,
                             longitude: that.longitude,
                             date: that.date,
                             phone: that.phone1
                           })
                           .then(function (response) {
                             console.log(response)
                            that.position = response.data.result.data.position
                            that.booktime = response.data.result.data.booktime
                             if(response.data.code==200){
                               layer.msg("已提交申请等待通知")
                               that.text = "等待通知"
                                that.bled = true
                                that.run()
                             }

                           })
                  }else{
                      layer.msg("请输入正确手机号")
                  }
              }
            }else{
              if(that.date==''){
                layer.msg("请选择预约时间")
              }
              else if(that.phone==""){
                 layer.msg("请输入联系电话")
              }else{
                if((reg1.test(phone))){
                that.$addr.post('/index/proxy/collect', {
                       type:that.value,
                       date: that.date,
                       phone: that.phone2
                     })
                     .then(function (response) {
                       console.log(response)
                       if(response.data.code==200){
                         layer.msg("已提交申请等待通知")
                         that.text = "等待通知"
                        that.bled = true
                        that.run()
                       }
                     })
                 }else{
                     layer.msg("请输入正确手机号")
                 }
              }
            }
          console.log(that.value)
        })
      },
      toMap() {
        if(this.brand_id == null) {
            this.brand_id = 0;
        }
       let url = escape(
         `${window.location.origin}${window.location.pathname}#/examination`
       )
       console.log(url)
       this.$router.go(-1)
        sessionStorage.setItem("nickname", this.nickname);
        sessionStorage.setItem("tel", this.tel);
        window.location.href="https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl="+url+"&key=W24BZ-WXDCO-JJGWX-SOQQZ-2HQRO-5JBJ4&referer=车平台"
    },
    //获取地图返回的参数
    getLocation() {
        let location = this.$route.query.latng; //腾讯地图返回的路由参数
        if(location != null) {
            let arr = location.split(",");
            this.latitude = arr[0]; //拆分分纬度
            this.longitude = arr[1]; //拆分出经度
        }
        this.address = this.$route.query.addr; //路由地址
        this.city = this.$route.query.city; //路由城市
      },
     run(){    //预约成功后跳转
        this.$router.push({
          　　path: '/success',
                query:{
                    position:this.position,
                    time:this.booktime
                }
          });
      }
   /*   removeMarker() {
                  if (markerLayer) {
                      markerLayer.setMap(null);
                      markerLayer = null;
                  }
              } */
     }
  }
</script>

<style scoped>
  @import '../assets/css/examination.css';

</style>
