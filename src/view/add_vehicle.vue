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
            <select v-model="plate">
              <option value="晋">晋</option>
            </select>
            <input placeholder="请输入车牌号" type="number" v-model="cnub"/>
          </div>
           <!-- <mt-field label="车牌号" placeholder="请输入车牌号" type="number"></mt-field> -->
        </div>
        <p>
          <mt-field label="车身架号" placeholder="请输入车身架号后6位" type="number" v-model="bodynub"></mt-field>
        </p>
        <p>
           <mt-field label="发动机号" placeholder="请输入发动机号后6位" type="number" v-model="engnub"></mt-field>
        </p>
       <p>
          <mt-field label="车型" placeholder="请输入车型" type="text" v-model="cars"></mt-field>
       </p>
        <p>
          <mt-field label="注册日期" placeholder="请选择注册日期" type="date" v-model="time"></mt-field>
        </p>
        <p>
           <mt-field label="行驶里程" placeholder="请输入当前行驶里程" type="number" v-model="km">km</mt-field>
        </p>


      </div>
      <div class="add_vehicle_secondvont">
       <!-- <p class="add_vehicle_switch" >
            <span>接收信息提醒</span>
            <mt-switch  v-model="item.accept"></mt-switch>
        </p> -->
        <div class="gengduo">
            <p>更多信息</p><i class="iconfont icon-youjiantou"></i>
        </div>
       <div class="car_number">
         <span>车检年限</span>
         <div class="car_number2">
           <select v-model="carsdate">
             <option value="1">1</option>
           </select>
         </div>
       </div>
        <p>
            <mt-field label="审车时间" placeholder="请输入上次车检时间" type="date" v-model="oldtime"></mt-field>
        </p>
        <p>
            <mt-field label="车险时间" placeholder="请输入保险到期时间" type="date" v-model="newtime"></mt-field>
        </p>
        <p>
            <mt-field label="驾照时间" placeholder="请填写获得驾照时间" type="date" v-model="cartime"></mt-field>
        </p>
        <p>
            <mt-field label="违章情况" placeholder="请填写违章情况(是/否)" type="text" v-model="illega"></mt-field>
        </p>

        <div class="check_btn">
          <mt-button type="default" size="small" class="check" @click="query">提交</mt-button>
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
      plate:'晋',  //车牌
      cnub:'', //车牌号
      bodynub:'', //车身架号
      engnub:'', //发动机号
      phone_nub:'', //电话号
      accept:false,
      cars:'', //车型
      time:'', //注册日期
      km:'' ,//行驶公里
      carsdate:'' ,//车检年限
      oldtime:'' ,//审车时间
      newtime:'' ,//保险到期时间
      cartime:'', //驾照时间
      illega:'' ,//违章
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
    openPicker() {
            this.$refs.picker.open();
          },
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
     layui.use('layer', function(){
         var layer = layui.layer;
       // if(that.cnub.length!=6){
       //   layer.msg("请输入正确车牌号!");
       // }else if(that.plate = ''){
       //   layer.msg("请选择车牌归属地")
       // }else if(that.cnub = ''){
       //   layer.msg("请填写车牌号")
       // }else if(that.bodynub = ''){
       //   layer.msg("请填写车身架号")
       // }else if(that.engnub = ''){
       //   layer.msg("请填写发动机架号")
       // }else if(that.phone_nub = ''){
       //   layer.msg("请填写手机号码")
       // }else {
           that.$addr.post('/index/vehicle/add',{
             number:that.plate+that.cnub,
             imei: that.bodynub,
             motor: that.engnub,
             type_id: that.cars,
             registertime: that.time,
              km: that.km,
              digit: that.carsdate,
              booktime:that.oldtime,
              insurancetime:that.newtime,
              licensetime:that.cartime,
              illega:that.illega
           })
                  .then(response => {
                    console.log(response)
                    if(response.data.code == 200){
                      layui.use('layer', function() {
                        var layer = layui.layer;
                          layer.msg("添加成功")
                          that.$router.push({
                            　path: '/exclusive_services',
                            });
                        })
                    }
          })
         // }
       })
     }
  }
}
</script>
<style scoped>
  @import '../assets/css/add_vehicle.css'

</style>
