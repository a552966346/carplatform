<template>
  <!--刘玉霞 -->
  <div class="appointment_details">
     <!-- 表单内容 -->
      <p>
         <mt-field label="车牌号码:" :placeholder="carnub" v-model="carnub" readonly></mt-field>
       </p>
      <p>
        <mt-field label="联系人:" placeholder="请输入联系人姓名" v-model="username"></mt-field>
      </p>
      <p>
        <mt-field label="手机号码:" :placeholder="phone" type="number" v-model="phone"readonly></mt-field>
      </p>
      <p>
        <mt-field label="时间:" placeholder="请输入时间" type="datetime-local" v-model="time" ></mt-field>
      </p>
      <p class="appointment_details_chooseseevice">
        <span>选择服务:</span>
        <select v-model="service">
          <option value=''>选择服务</option>
          <option v-for="(item,index) in isservice" :key="index" :value="item.id">{{item.name}}</option>
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
  name: 'appointment_details',
  data () {
    return {
          msg: 'add',
          carnub:'',
          username:'',
          phone:'',
          time:'',
          service:'',
          isservice:[],
          remarks:'',
          id:'',
          merchant:''
      }
  },
  mounted:function(){
        this.$store.state.heard_title ='车平台 - 预约'
        this.merchant= this.$route.query.id
        this.$addr.get("/index/service/subscribe")
        .then(res=>{
          this.isservice = res.data.result.service
          this.carnub =res.data.result.userinfo.number
          this.phone =res.data.result.userinfo.mobile
          this.id = res.data.result.userinfo.id
        })
  },
  methods:{
      submit:function(){
        var that = this
       layui.use('layer', function(){
            var layer = layui.layer;
        if(that.username==''){
          layer.msg("请输入联系人姓名")
        }
        else if(that.service == ''){
          layer.msg("请选择预约服务")
        }
       else if(that.time==''){
          layer.msg("请选择预约时间")
        }
        else{
          that.$addr.post('/index/service/record', {
             name : that.username,
             booktime : that.time,
             service : that.service,
             mark : that.remarks,
             id: that.id,
             merchant:that.merchant
          })
             .then(function (response) {
               if(response.data.code==200){
                 layer.msg("预约成功")
                 that.$router.push("/")
               }
             })
             .catch(function (error) {
               console.log(error);
             });
        }
        //  var that = this;
        // Indicator.open('加载中...')
          })
      },
      reset:function(){
         console.log('重置')
         this.username = '',
         this.time = '',
         this.service = '',
         this.remarks = ''
      }
  }
}
</script>
<style scoped>
  @import '../assets/css/appointment_details.css'

</style>
