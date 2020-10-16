<template>
  <!--刘玉霞 -->
  <div class="register">
      <!-- 手机号 -->
      <div class="register_common">
        <p>手机号</p>
      	<input type="number" placeholder="请输入手机号" name="phone" v-model="phone_number">
      </div>
      <!-- 验证码 -->
      <div class="register_common">
        <p>验证码</p>
        <div class="register_code">
          <input type="text" placeholder="请输入验证码" name="Verification" v-model="verification">
          <button @click="verification_code">获取验证码</button>
        </div>
      </div>
      <!-- 性别 -->
      <div class="register_common">
      	<p>性别</p>
      	<div>
      		<input type="radio" value="man" name="sex" v-model="sex">男
      		<input type="radio" value="women" name="sex" v-model="sex">女
      	</div>
      </div>
      <!-- 常住地 -->
      <div class="register_common">
      	<p>常住地</p>
      	<div class="register_address">
            <select name="province" v-model="province">
              <option value="山西省">山西省</option>
              <option value="山西省">山西省</option>
              <option value="山西省">山西省</option>
              <option value="山西省">山西省</option>
            </select>
            <select name="city" v-model="city">
              <option value="太原市">太原市</option>
              <option value="晋中市">晋中市</option>
              <option value="运城市">运城市</option>
              <option value="大同市">大同市</option>
            </select>
            <select name="area" v-model="area">
              <option value="小店区">小店区</option>
              <option value="山西省">山西省</option>
              <option value="山西省">山西省</option>
              <option value="山西省">山西省</option>
            </select>
      	</div>
      </div>
      <!-- 车牌号码 -->
      <div class="register_common">
      	<p>车牌号码</p>
      	<div class="register_number">
      		<select name="plate" v-model="plate">
      				<option value="晋">晋</option>
      				<option value="京">京</option>
      				<option value="冀">冀</option>
      				<option value="津">津</option>
      		</select>
      		<input type="text" maxlength="6" placeholder="请输入您的车牌号码" v-model="car_number">
      	</div>
      </div>
      <!-- 当前行驶里程 -->
      <div class="register_common">
        <p>当前行驶里程</p>
        <div class="register_distance">
          <input type="number" maxlength="4" placeholder="请输入当前行驶里程" name="distance" v-model="kilometre">万/公里
        </div>
      </div>
      <!-- 按钮 -->
      <div class="register_btn">
      	<!-- <a href="javascript:;">立即注册</a> -->
          <button @click="submit_register">立即注册</button>
      </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
      name: 'Register',
        data(){
            return {
              phone_number:"",//手机号
              verification:"",//验证码
              sex:"man",
              province:"山西省",
              city:'晋中市',
              area:'小店区',
              plate:"晋",
              car_number:'',
              kilometre:""
            }
        },
        methods: {
          //获取验证码
          verification_code:function(verification){
            var that = this;
              layui.use('layer', function(){
                var layer = layui.layer;
               var index = layer.load(1, {
               	shade: [0.2, '#000'] //0.2透明度的黑色背景
               });
              that.$addr.get('v1/bpi/currentprice.json')
                                     .then(response => {
                                     //  console.log(response)
                              } )
            });
          },
          //注册
            submit_register: function (event) {
              var that = this;
              layui.use('layer', function(){
                var layer = layui.layer;
               console.log(that.phone_number)
               console.log(that.verification)
               console.log(that.sex)
               //console.log(that)
              //判断输入
              if(that.phone_number==""){
                layer.msg('请输入手机号');
              }
              else if(that.phone_number.length!=11){
                 layer.msg('请输入正确的手机号');
              }
              else if(that.verification==""){
                layer.msg('请输入验证码');
              }
              else if(that.car_number ==""){
                layer.msg('请输入车牌号');
              }
              else if(that.car_number.length!=6){
                 layer.msg('请输入正确的车牌号');
              }
              else if(that.kilometre == ""){
                layer.msg('请输入行驶里程');
              }

              else{
                // 请求数据
                that.$addr.get('v1/bpi/currentprice.json')
                       .then(response => {
                       layer.msg('注册成功')
                        console.log(response)
                 //        that.$router.push({
                 //          name: 'index',
                 // })
              })
            }
          });
        }
     }
  }
</script>

<style scoped>
  @import '../assets/css/Register.css'

</style>
