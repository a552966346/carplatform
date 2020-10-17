<template>
  <!--刘玉霞 -->
  <div class="appointment_details">
     <!-- 表单内容 -->
      <p>
         <mt-field label="车牌号码:" placeholder="请输入车牌号码" v-model="item.carnumber"></mt-field>
       </p>
      <p>
        <mt-field label="联系人:" placeholder="请输入联系人姓名" v-model="item.username"></mt-field>
      </p>
      <p>
        <mt-field label="手机号码:" placeholder="请输入手机号码" type="number" v-model="item.phone"></mt-field>
      </p>
      <p>
        <mt-field label="时间:" placeholder="请输入时间" type="datetime-local" v-model="item.time"></mt-field>
      </p>
      <p class="appointment_details_chooseseevice">
        <span>选择服务:</span>
        <select v-model="item.service">
          <option>换胎</option>
        </select>
      </p>
      <p>
       <mt-field label="备注:" placeholder="可填写所需请求" type="text" v-model="item.remarks"></mt-field>
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
        item:{
          carnumber:'',
          username:'',
          phone:'',
          time:'',
          service:'换胎',
          remarks:'',
        },
      }
  },
  mounted:function(){
        this.$store.state.heard_title ='车平台 - 预约'
  },
  methods:{
      submit:function(){
        var that = this
        console.log(this.item)

        that.$addr.post('v1/bpi/currentprice.json', this.item)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        //  var that = this;
        // Indicator.open('加载中...');
        console.log('提交')

      },
      reset:function(){
         console.log('重置')
         console.log(this.item)
      }
  }
}
</script>
<style scoped>
  @import '../assets/css/appointment_details.css'

</style>
