<template>
  <!--刘玉霞 -->
  <div class="exclusive_services">
    <!--开通模块 -->
    <div class="exclusive_title">
        <div class="exclusive_lefttitle">
            <div class="exclusive_lefttitle_pic">
              <img src="../assets/picture/portrait.jpg"/>
            </div>
            <div class="exclusive_lefttitle_cont">
                <p>逆行的雪豹</p>
                <p><i>开通VIP会员，享受专属服务</i></p>
            </div>
        </div>
        <div class="exclusive_righttitle">
            <button @click="vip">立即开通</button>
        </div>
    </div>
    <!-- 剩余板块 -->
    <div class="exclusive_cont">
      <!-- 添加车辆 -->
      <div class="exclusive_top">
          <a href="#" @click="add">
            <img src="../assets/picture/exclusive_add.png" >
          </a>
          <p>请立即添加您的爱车</p>
      </div>
      <!-- 内容提醒 -->
      <div class="exclusive_center">
        <!-- 保险到期提醒 -->
        	<div class="center_remind">
        		<div class="center_remind_pic">
        			<img src="../assets/picture/exclusive_insurance.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>保险到期提醒</p>
        			<p>到期提醒，给你方便</p>
        		</div>
        	</div>
          <!-- 审车提醒 -->
        	<div class="center_remind">
        		<div class="center_remind_pic">
        			<img src="../assets/picture/exclusive_car.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>审车提醒</p>
        			<p>验车办理从不逾期</p>
        		</div>
        	</div>
          <!-- 违章告知 -->
        	<div class="center_remind">
            <div class="center_remind_pic">
        			<img src="../assets/picture/exclusive_notification.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>违章告知</p>
        			<p>违章及时办理，避免延误</p>
        		</div>
        	</div>
          <!-- 驾照到期等换提醒 -->
        	<div class="center_remind">
        		 <div class="center_remind_pic">
        			<img src="../assets/picture/driving_driving.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>驾照到期等换提醒</p>
              <p>更换驾照，避免忘记</p>
        		</div>
        	</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'exclusive_services',
  data () {
    return {
        msg: 'exclusive_services',
    }
  },
 methods:{
    vip:function(){
        console.log("开通会员");
    },
    add:function(){
      this.$router.push({
              name: 'add_vehicle',
              // params: {

              // }
            })
      console.log("添加车辆")
    },
  }

}
</script>
<style scoped>
  @import '../assets/css/exclusive_services.css'

</style>

