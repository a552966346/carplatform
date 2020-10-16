<template>
    <!--刘玉霞 -->
   <div class="repair_maintenance">
     <!-- 顶部图片 -->
      <div class="repair_maintenance_top">
        <img src="../assets/picture/repair_top.png" >
      </div>
      <!-- 发动机快修保养模块 -->
      <div class="repair_maintenance_maintain">
        <p class="maintain_txt1">继续拖动，查看图文详情</p>
        <p class="maintain_txt2">本产品针对日常行驶过程中的维修以及对车辆进行的保养提供详细说明</p>
        <p class="maintain_txt3">发动机快修保养模块</p>
        <p class="maintain_txt4"><img src="../assets/picture/repair_fast.png" ></p>
        <div class="maintain_txt5">
            <p>机油三滤的检查与更换</p>
            <p>正时皮带的检查与更新</p>
            <p>火花塞的检查与更换</p>
            <p>防冻液的检查与更新</p>
            <p>节气门的清洗</p>
            <p>燃油泵检查与清洗</p>
        </div>
      </div>
      <!-- 轮胎修复模块 -->
      <div class="repair_maintenance_tyre">
        <p>轮胎修复模块</p>
        <img src="../assets/picture/repair_repair.png" >
      </div>
      <!-- 底盘快修保养模块 -->
      <div class="repair_maintenance_chassis">
        <p>底盘快修保养模块</p>
        <div class="repair_maintenance_chassisall">
          <div class="repair_maintenance_chassistext">
              <p>手动变速机的检查与更换</p>
              <p>球笼的检查与更换</p>
              <p>离合器的检查与更换</p>
              <p>制动液的检查与更换</p>
              <p>刹车片的检查与更换</p>
              <p>手制动的检查 调整</p>
              <p>蓄电池的检查与更换</p>
              <p>雨刮片的检查与更换</p>
              <p>空调制冷剂的加注</p>
              <p>全车灯光检查调整</p>
          </div>
          <div class="repair_maintenance_chassispic">
            <img src="../assets/picture/repair_chassis.png" >
          </div>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  name: 'repair_maintenance',
  data () {
    return {
      msg: 'repair_maintenance'
    }
  }
}
</script>
<style scoped>
  @import '../assets/css/repair_maintenance.css'

</style>
