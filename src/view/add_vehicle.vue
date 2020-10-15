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
<style>
  *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;list-style: none;}
  .add_vehicle{width: 100%;height: 100%;display: flex;flex-direction: column;overflow: hidden;}
  /* 顶部内容 */
  .add_vehicle_top{width: 100%;height: 80px;display: flex;flex-direction: column;justify-content: center;align-items: start;padding: 0px 30px;background-color: white;border-bottom: 5px solid #f2f2f2;}
  .add_vehicle_top p{font-size: 12px;color: #ccc;padding-bottom: 6px;}
  .mint-button--primary{color: #F8D11F;background-color: transparent;}
  .mint-button--small{padding: 0px;padding-right: 12px;}
  /* 内容 */
  .add_vehicle_vont{width: 100%;flex: 1;}
  .add_vehicle_firstvont{width: 100%;padding: 0px 15px;padding-top: 10px;}
  .add_vehicle_firstvont p{width: 100%;border-bottom: 1px solid #ccc;padding: 0px 15px;}
  .add_vehicle_firstvont p:last-of-type{border: none;}
  .add_vehicle_secondvont{width: 100%;border-top: 10px solid #F2F2F2;padding: 0px 15px;}
  .add_vehicle_secondvont p{width: 100%;border-bottom: 1px solid #ccc;padding: 0px 15px;}
  .add_vehicle_secondvont p:last-of-type{border: none;}

  .car_number{display: flex;justify-content: space-between;border-bottom: 1px solid #ccc; padding: 0px 15px;min-height: 48px;align-items: center;}
  .car_number span{width: 105px;text-align: left;}
  .car_number1{flex: 1;display: flex;justify-content: flex-end;}
  .car_number1 select{font-size: 14px;color: #F8D11F;background-color: #fef5d0;border: none;border-radius: 3px;}
  .car_number1 input{text-align: right;font-size: 14px;border: none;width: 145px;}



  .mint-cell-wrapper{padding: 0px;}
  .mint-cell-title{text-align: left;font-size: 14px;color: #333;}
  .mint-field-core{text-align: right;font-size: 14px;color: #333;}

  .add_vehicle_switch{display: flex;justify-content: space-between;align-items: center;min-height: 48px;}

  .mint-switch-core{width: 45px;height: 17px;}
  .mint-switch-core::before{width: 23px;height: 15px;}
  .mint-switch-core::after{width: 23px;height: 15px;}
  .mint-switch-input:checked + .mint-switch-core {border-color: #F8D11F;background-color: #F8D11F;}
  input::placeholder {font-size: 14px;color: #ccc;}
  /* 按钮 */
  .check_btn{width: 100%;padding-top: 40px;}
  .check{width: 80%;margin: 0 auto;background-color:#F8D11F;color: #fff;border-radius:20px;height: 40px;}
</style>
