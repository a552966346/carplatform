<template>
  <!--刘玉霞 -->
  <div class="add_vehicle">
    <!-- 顶部信息 -->
    <div class="add_vehicle_top">
      	<p>以上信息我们仅供管理局查询。我们将严格保密</p>
        <div class="add_top_add">
            <mt-button type="primary" size="small">手动添加</mt-button>
            <mt-button type="default" size="small" @click="phone">拍照自动识别添加</mt-button>
        </div>
    </div>
     <!-- 表单内容 -->
    <div class="add_vehicle_vont">
      <div class="add_vehicle_firstvont">
        <div class="car_number">
          <span>车牌号</span>
          <div class="car_number1">
            <select v-model="item.plate">
              <option value="晋">晋</option>
              <option value="津">津</option>
              <option value="京">京</option>
              <option value="冀">冀</option>
            </select>
            <input placeholder="请输入车牌号" type="number" v-model="item.cnub"/>
          </div>
           <!-- <mt-field label="车牌号" placeholder="请输入车牌号" type="number"></mt-field> -->
        </div>
        <p>
          <mt-field label="车身架号" placeholder="请输入车身架号后6位" type="number" v-model="item.bodynub"></mt-field>
        </p>
        <p>
           <mt-field label="发动机号" placeholder="请输入发动机号后6位" type="number" v-model="item.engnub"></mt-field>
        </p>
      </div>
      <div class="add_vehicle_secondvont">
        <p class="add_vehicle_switch" >
            <span>接收信息提醒</span>
            <mt-switch  v-model="item.accept"></mt-switch>
        </p>
        <p>
            <mt-field label="手机号码" placeholder="请输入手机号" type="tel" v-model="item.phone_nub"></mt-field>
        </p>
        <div class="check_btn">
          <mt-button type="default" size="small" class="check" @click="query">立即查询</mt-button>
          <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add_vehicle',
  data () {
    return {
      //获取数据
      msg: 'add',
      item:{
      plate:'晋',
      cnub:'',
      bodynub:'',
      engnub:'',
      phone_nub:'',
      accept:false
      },
      // action sheet 选项内容
      actions: [{
        name: '拍照',
        method : this.getCamera	// 调用methods中的函数
      }, {
        name: '从相册中选择',
        method : this.getLibrary	// 调用methods中的函数
      }],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false
      }

  },
  mounted:function(){
        this.$store.state.heard_title ='车平台 - 添加车辆'
  },
  methods:{
    phone:function(){
      // console.log(this)
       this.sheetVisible = true;
    },
    getCamera: function(){
       console.log("打开照相机")
     },
    getLibrary: function(){
        console.log("打开相册")
    },
    //请求数据
     query:function(){
       var  that = this;
       var data = that.item;
       layui.use('layer', function(){
         var layer = layui.layer;
       console.log(data)
       if(data.cnub.length!=6){
         layer.msg("请输入正确车牌号!");
       }else if(data.phone_nub.length!=11){
         layer.msg("请输入正确手机号")
       }else if(data.plate = ''){
         layer.msg("请选择车牌归属地")
       }else if(data.cnub = ''){
         layer.msg("请填写车牌号")
       }else if(data.bodynub = ''){
         layer.msg("请填写车身架号")
       }else if(data.engnub = ''){
         layer.msg("请填写发动机架号")
       }else if(data.phone_nub = ''){
         layer.msg("请填写手机号码")
       }else {
           console.log(that.item)
           that.$addr.get('v1/bpi/currentprice.json')
                  .then(response => {
                    console.log(response.data)
          })
         }
       })
     }
  }
}
</script>
<style scoped>
  @import '../assets/css/add_vehicle.css'

</style>
