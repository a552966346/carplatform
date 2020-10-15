<template>
    <!--刘玉霞 -->
   <div class="repair_maintenance">
     <!-- 顶部图片 -->
      <div class="repair_maintenance_top">
        <img src="../assets/repair_top.png" >
      </div>
      <!-- 发动机快修保养模块 -->
      <div class="repair_maintenance_maintain">
        <p class="maintain_txt1">继续拖动，查看图文详情</p>
        <p class="maintain_txt2">本产品针对日常行驶过程中的维修以及对车辆进行的保养提供详细说明</p>
        <p class="maintain_txt3">发动机快修保养模块</p>
        <p class="maintain_txt4"><img src="../assets/repair_fast.png" ></p>
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
        <img src="../assets/repair_repair.png" >
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
            <img src="../assets/repair_chassis.png" >
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
<style>
  *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;list-style: none;}
  .repair_maintenance{width: 100%;/* height: 100%;display: flex;flex-direction: column;overflow: hidden; */}
  /* 顶部图片 */
  .repair_maintenance_top{width: 100%;/* height: 160px; */padding-bottom: 10px;}
  .repair_maintenance_top>img{height: 100%;width: 100%;}
  /* 发动机快修保养模块 */
  .repair_maintenance_maintain{width: 100%;padding: 5px 15px;height: 50%;}
  .maintain_txt1{font-size: 12px ;color: #CCCCCC;text-align: center;padding: 5px;border-top: 1px solid #ccc;}
  .maintain_txt2{padding: 10px 0 ;color: #757575;font-size:12px;text-align: center;}
  .maintain_txt3{padding: 10px 0;font-size: 18px;color: #DA311D;text-align: center;font-weight: bold;letter-spacing: 1px;}
  .maintain_txt4{width: 100%;}
  .maintain_txt4 img{width: 100%;}
  .maintain_txt5{width: 100%;display: flex;flex-wrap: wrap;}
  .maintain_txt5 p{width: 50%;line-height: 25px;}
   /* 轮胎修复模块 */
  .repair_maintenance_tyre{width: 100%;}
  .repair_maintenance_tyre>p{padding: 20px 0;font-size: 18px;color: #DA311D;text-align: center;font-weight: bold;letter-spacing: 1px;}
  .repair_maintenance_tyre>img{width: 100%;padding-bottom: 20px;}
  /* 底盘快修保养模块 */
  .repair_maintenance_chassis{width: 100%;}
  .repair_maintenance_chassis>p{padding: 20px 0;font-size: 18px;color: #DA311D;text-align: center;font-weight: bold;letter-spacing: 1px;}
  .repair_maintenance_chassisall{display: flex;}
  .repair_maintenance_chassistext{width: 50%;padding: 10px 15px;font-size: 14px;text-align: center;}
  .repair_maintenance_chassistext>p{color: #FFFFFF;background-color: #AD8F6D;line-height: 25px;}

  .repair_maintenance_chassispic{width: 50%;}
  .repair_maintenance_chassispic img{width: 100%;}
</style>
