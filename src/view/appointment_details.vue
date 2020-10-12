<template>
  <div class="appointment_details">
     <!-- 表单内容 -->
      <p>
         <mt-field label="车牌号码:" placeholder="请输入车牌号码" v-model="carnumber"></mt-field>
       </p>
      <p>
        <mt-field label="联系人:" placeholder="请输入联系人姓名" v-model="username"></mt-field>
      </p>
      <p>
        <mt-field label="手机号码:" placeholder="请输入手机号码" type="number" v-model="phone"></mt-field>
      </p>
      <p>
        <mt-field label="时间:" placeholder="请输入时间" type="datetime-local" v-model="time"></mt-field>
      </p>
      <p class="appointment_details_chooseseevice">
        <span>选择服务:</span>
        <select v-model="service">
          <option>换胎</option>
        </select>
      </p>
      <p>
       <mt-field label="备注:" placeholder="可填写所需请求" type="text" v-model="remarks"></mt-field>
      </p>
      <div class="check_btn">
        <div>
           <mt-button type="default" size="small" class="submit" @click="submit">提交</mt-button>
        </div>
       <div>
          <mt-button plain size="small" class="reset" @click="reset">重置</mt-button>
       </div>
      </div>
  </div>
</template>
<script>
  // import { Indicator } from 'mint-ui';
export default {
  name: 'add_vehicle',
  data () {
    return {
        msg: 'add',
        carnumber:'',
        username:'',
        phone:'',
        time:'',
        service:'换胎',
        remarks:''
      }
  },
  methods:{
      submit:function(){
        //  var that = this;
        // Indicator.open('加载中...');
        console.log('提交')

      },
      reset:function(){
         console.log('重置')
      }
  }
}
</script>
<style>
  .appointment_details{width: 100%;height: 100%;display: flex;flex-direction: column;padding: 0px 15px;padding-top: 15px;}
  .appointment_details p{width: 100%;border-bottom: 1px solid #ccc;padding: 0px 15px;}
  .mint-cell-wrapper{padding: 0px;}
  .mint-cell-title{text-align: left;font-size: 14px;color: #333;}
  .mint-field-core{text-align: right;font-size: 14px;color: #333;}
  input::placeholder {font-size: 14px;color: #ccc;}
  /* 选择服务 */
  .appointment_details_chooseseevice{display: flex;justify-content: space-between;min-height: 48px;align-items: center;}
  .appointment_details_chooseseevice select{border: none;font-size: 14px;}
  /* 按钮 */
  .check_btn{width: 100%;padding-top: 40px;display: flex;}
  .check_btn>div{flex: 1;}
  .submit{width: 80%;margin: 0 auto;background-color:#F8D11F;color: #fff;border-radius:20px;height: 40px;}
  .reset{width: 80%;margin: 0 auto;color: #333;border-radius:20px;height: 40px;}
  .mint-button--default.is-plain {border: 1px solid #F8D11F;}
  .mint-button::after{background-color: #F8D11F;}
</style>
