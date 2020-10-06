<template>
  <div class="register">
      <!-- 手机号 -->
      <div class="register_common">
        <p>手机号</p>
      	<input type="number" placeholder="请输入手机号" name="phone">
      </div>
      <!-- 验证码 -->
      <div class="register_common">
        <p>验证码</p>
        <div class="register_code">
          <input type="text" placeholder="请输入验证码" name="Verification">
          <button>获取验证码</button>
        </div>
      </div>
      <!-- 性别 -->
      <div class="register_common">
      	<p>性别</p>
      	<div>
      		<input type="radio" value="男" name="sex">男
      		<input type="radio" value="女" name="sex">女
      	</div>
      </div>
      <!-- 常住地 -->
      <div class="register_common">
      	<p>常住地</p>
      	<div class="register_address">
            <select name="province">
              <option value="山西省">山西省</option>
              <option value="山西省">山西省</option>
              <option value="山西省">山西省</option>
              <option value="山西省">山西省</option>
            </select>
            <select name="city">
              <option value="太原市">太原市</option>
              <option value="晋中市">晋中市</option>
              <option value="运城市">运城市</option>
              <option value="大同市">大同市</option>
            </select>
            <select name="area">
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
      		<select name="plate">
      				<option value="晋">晋</option>
      				<option value="京">京</option>
      				<option value="冀">冀</option>
      				<option value="津">津</option>
      		</select>
      		<input type="text" maxlength="6" placeholder="请输入您的车牌号码">
      	</div>
      </div>
      <!-- 当前行驶里程 -->
      <div class="register_common">
        <p>当前行驶里程</p>
        <div class="register_distance">
          <input type="number" maxlength="4" placeholder="请输入当前行驶里程" name="distance">万/公里
        </div>
      </div>
      <!-- 按钮 -->
      <div class="register_btn">
      	<!-- <a href="javascript:;">立即注册</a> -->
          <button>立即注册</button>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'Register',
    data () {
      return {
        msg: 'Login'
      }
    }
  }
</script>

<style scoped>
  .register{width: 100%;height: 100%;padding: 30px 20px;}
  /* 块 */
  .register_common{width: 100%;display: flex;align-items: center;justify-content: space-between;border-bottom: 1px solid #ddd;padding: 10px 15px;padding-right: 10px;font-size: 14px;}
  .register_common>p{font-size: 14px;color: #ccc;}

  .register_code>input{width:60%;font-size: 14px;border: none;outline: none;color: #333;text-align: right;}
  .register_code>button{border: none;background-color: transparent;color:#F8D11F;outline: none;}

  input[name="phone"] {width:80%;padding: 5px 0px;text-align: right;font-size: 14px;border: none;outline: none;}
  .register_common>div{font-size: 14px;width:78%;text-align: right;}

  .register_distance{width: 70%!important;}
  input[name="distance"] {width:70%;;font-size: 14px;border: none;outline: none;color: #333;text-align: right;padding-right: 5px;}
  input[type="radio"] {font-size: 14px;}
  input::placeholder {font-size: 14px;color: #333;}
  /* .register_address{width:80%;text-align: right;} */
  .register_address>select{border: none;outline: none;text-align-last: right;}
  /* .register_number{display: flex;align-items: center;} */
  .register_number>select{border: none;outline: none;padding: 5px 0px;color: #F8D11F;}
  .register_number>input{width: 60%;text-align: right;border: none;outline: none;padding: 5px 0px;}
  /* 按钮 */
  .register_btn{width: 100%;}
  .register_btn>button{width: 80%;margin: 0 auto;margin-top: 50px;background-color:#F8D11F;border-radius: 20px;border: none;padding: 10px 0px;color: white;}
</style>
