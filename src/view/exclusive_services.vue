<template>
  <div class="exclusive_services">
    <!--开通模块 -->
    <div class="exclusive_title">
        <div class="exclusive_lefttitle">
            <div class="exclusive_lefttitle_pic">
              <img src="../assets/portrait.jpg"/>
            </div>
            <div class="exclusive_lefttitle_cont">
                <p>逆行的雪豹</p>
                <p><i>开通VIP会员，享受专属服务</i></p>
            </div>
        </div>
        <div class="exclusive_righttitle">
            <button>立即开通</button>
        </div>
    </div>
    <!-- 剩余板块 -->
    <div class="exclusive_cont">
      <!-- 添加车辆 -->
      <div class="exclusive_top">
          <a href="#">
            <img src="../assets/exclusive_add.png" >
          </a>
          <p>请立即添加您的爱车</p>
      </div>
      <!-- 内容提醒 -->
      <div class="exclusive_center">
        <!-- 保险到期提醒 -->
        	<div class="center_remind">
        		<div class="center_remind_pic">
        			<img src="../assets/exclusive_insurance.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>保险到期提醒</p>
        			<p>到期提醒，给你方便</p>
        		</div>
        	</div>
          <!-- 审车提醒 -->
        	<div class="center_remind">
        		<div class="center_remind_pic">
        			<img src="../assets/exclusive_car.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>审车提醒</p>
        			<p>验车办理从不逾期</p>
        		</div>
        	</div>
          <!-- 违章告知 -->
        	<div class="center_remind">
            <div class="center_remind_pic">
        			<img src="../assets/exclusive_notification.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>违章告知</p>
        			<p>违章及时办理，避免延误</p>
        		</div>
        	</div>
          <!-- 驾照到期等换提醒 -->
        	<div class="center_remind">
        		 <div class="center_remind_pic">
        			<img src="../assets/driving_driving.png" >
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
      msg: 'exclusive_services'
    }
  }
}
</script>
<style>
  *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;list-style: none;}
    .exclusive_services{height: 100%;width: 100%;display: flex;flex-direction: column;overflow: hidden;}
    /* 开通模块 */
    .exclusive_title{width: 100%;height: 70px;background-color: #3e3e3e;display: flex;justify-content: space-between;align-items: center;padding: 0px 15px;}
    .exclusive_lefttitle {display: flex;align-items: center;}
    .exclusive_lefttitle_pic{width: 45px;height: 45px;border: 1px solid #fff;border-radius: 50%;}
    .exclusive_lefttitle_pic img{width: 100%;height: 100%;border-radius: 50%;}
    .exclusive_lefttitle_cont{color: #f6d88f;display: flex;flex-direction: column;align-items: start;justify-content: center;padding-left: 10px;}
    .exclusive_lefttitle_cont p:nth-child(2){font-size: 12px;padding-top: 5px;}
    .exclusive_righttitle button{background-color:#e6c37b;border: none;color: #fff;border-radius: 15px;outline: none;font-size: 12px;padding: 3px 10px;}
    /* 顶部内容 */
    .exclusive_cont{width: 100%;flex: 1;overflow: auto;padding: 20px 30px;}
    /* 添加车辆 */
    .exclusive_top{width: 100%;height: 160px;background: url(../assets/exclusive_back.png) no-repeat 0.0;background-position: center;background-size: 100% 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;}
    .exclusive_top img{width: 60px;height: 60px;}
    .exclusive_top p{font-size: 12px;color: #ccc;padding-top: 15px;}
    /* 内容提醒 */
   .exclusive_center{width:100%;display: flex;flex-direction: column;padding-top: 50px;}
    .center_remind{width: 80%;margin: 0 auto;display: flex;align-items: center;margin-bottom: 20px;}
    .center_remind_pic{width: 40px;}
    .center_remind_pic img{width: 100%;}
    .center_remind_cont{padding-left: 20px;display: flex;flex-direction: column;align-items: flex-start;justify-content: center;}
    .center_remind_cont p:nth-child(1){font-size: 14px;color: #333;}
    .center_remind_cont p:nth-child(2){font-size: 12px;color: #ccc;padding-top: 2px;}
</style>
