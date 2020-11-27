<template>
    <!--刘玉霞 -->
   <div class="repair_maintenance">
     <!-- 顶部图片 -->
      <div class="repair_maintenance_top">
        <!-- <img src="../../static/img/repair_top.png" > -->
        <div class="maintenace_phone">
            <img src="../../static/img/phone.png" alt="">
            <a href="tel:13555555555">123-456-789</a>
        </div>
      </div>

      <div class="repair_maintenance_maintain">
        <p class="maintain_txt1">继续拖动，查看图文详情</p>
        <p class="maintain_txt2">本产品针对日常行驶过程中的维修以及对车辆进行的保养提供详细说明</p>
      </div>
      <!-- 发动机快修保养模块 -->
      <div class="repair_maintenance_tyre" >
        <p>{{category[0].name}}</p>
        <img :src="$store.state.imgurl+category[0].detailimages" />
        <div class="maintain_txt5" >
            <span v-for="item in category[0].child" :key="item.id">{{item.name}}</span>
        </div>
      </div>
      <!-- 轮胎修复模块 -->
     <div class="repair_maintenance_tyre">
        <p>{{category[1].name}}</p>
        <img :src="$store.state.imgurl+category[1].detailimages" >
        <div class="maintain_txt5" >
            <span v-for="item in category[1].child" :key="item.id">{{item.name}}</span>
        </div>
      </div>
      <!-- 底盘快修保养模块 -->
      <div class="repair_maintenance_chassis">
        <p>{{category[2].name}}</p>
        <div class="repair_maintenance_chassisall">
          <div class="repair_maintenance_chassistext">
              <p v-for="item in category[2].child" :key="item.id">{{item.name}}</p>
          </div>
          <div class="repair_maintenance_chassispic">
            <img :src="$store.state.imgurl+category[2].detailimages" >
          </div>
        </div>
      </div>
       <div class="repair_maintenance_maintain">
          <p class="maintain_txt2">当您遇到以上问题时，请直接联系我们，联系电话:  <span>123-123-123</span></p>
          <p class="maintain_txt2">我们将第一时间反应，为您解决相关的汽车问题</p>
       </div>
   </div>
</template>

<script>
export default {
  name: 'repair_maintenance',
  data () {
    return {
      msg: 'repair_maintenance',
      category:[],
    }
  },
  mounted:function(){
    this.$store.state.heard_title='车平台 - 快修与保养';
      let that = this
      that.$addr.get("index/service/repair")
          .then(res=>{
            that.category = res.data.result.data.category
          })
  }
}
</script>
<style scoped>
  @import '../assets/css/repair_maintenance.css'

</style>
