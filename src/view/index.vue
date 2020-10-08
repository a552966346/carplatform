<template>
  <div class="index">
      <!-- 导航 -->
      <div class="index_top">
      	<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=324399191,4253983438&fm=11&gp=0.jpg">
        <div class="index_text">
        	<p>汽车服务</p>
        	<p>顺通大广汽车服务有限公司</p>
        	<p><i>心中有梦，志在远方~</i></p>
        	<a href="javascript:;">查看详情</a>
        </div>
        <!-- 服务 -->
        <div class="index_center">
        	<!-- 方框 -->
        	<div class="center_content">
        		<!-- 公告 -->
        		<div class="center_content_service">
        			<img src="../assets/horn.png">
        			<p>暂无更多消息</p>
        		</div>
            <!-- 菜单 -->
            <div class="swiper-container">
            		<div class="swiper-wrapper">
            			<!-- 审车代办 -->
            			<div class="swiper-slide">
            				<a href="javascript:;">
            				    <img src="../assets/tag_proxy.png"/>
            				    <p>审车代办</p>
            				</a>
            			</div>
            			<!-- 洗车 -->
            			<div class="swiper-slide">
                      <a href="javascript:;">
                          <img src="../assets/tag_wash.png"/>
                          <p>洗车</p>
                      </a>
            			</div>
            			<!-- 成为志愿者 -->
            			<div class="swiper-slide">
            				<div class="index_menu_item">
            					<a href="">
            						<div class="index_menu_item1">
            							<div class="index_volunteer">
            								<img src="img/index_volunteer.png" >
            							</div>
            							<div class="common_title">成为志愿者</div>
            						</div>
            					</a>
            				</div>
            			</div>
            			<!-- 积分商城 -->
            			<div class="swiper-slide">
            				<div class="index_menu_item">
            					<a href="">
            						<div class="index_menu_item1">
            							<div class="points_mall">
            								<img src="img/points_mall.png" >
            							</div>
            							<div class="common_title">积分商城</div>
            						</div>
            					</a>
            				</div>
            			</div>
            			<!-- 加入团队 -->
            			<div class="swiper-slide">
            				<div class="index_menu_item">
            					<a href="">
            						<div class="index_menu_item1">
            							<div class="img/join_team">
            								<img src="img/join_team.png" >
            							</div>
            							<div class="common_title">加入团队</div>
            						</div>
            					</a>
            				</div>
            			</div>
            			<!-- 在线捐赠 -->
            			<div class="swiper-slide">
            				<div class="index_menu_item">
            					<a href="">
            						<div class="index_menu_item1">
            							<div class="online_donation">
            								<img src="img/online_donation.png" >
            							</div>
            							<div class="common_title">在线捐赠</div>
            						</div>
            					</a>
            				</div>
            			</div>
            			<!-- 培训课程 -->
            			<div class="swiper-slide">
            				<div class="index_menu_item">
            					<a href="">
            						<div class="index_menu_item1">
            							<div class="training_course">
            								<img src="img/training_course.png" >
            							</div>
            							<div class="common_title">培训课程</div>
            						</div>
            					</a>
            				</div>
            			</div>
            			<!-- 个人中心 -->
            			<div class="swiper-slide">
            				<div class="index_menu_item">
            					<a href="">
            						<div class="index_menu_item1">
            							<div class="activity_management">
            								<img src="img/personal_center.png" >
            							</div>
            							<div class="common_title">个人中心</div>
            						</div>
            					</a>
            				</div>
            			</div>
            			<!-- 党建工作 -->
            			<div class="swiper-slide">
            				<div class="index_menu_item">
            					<a href="">
            						<div class="index_menu_item1">
            							<div class="activity_management">
            								<img src="img/party_building.png" >
            							</div>
            							<div class="common_title">党建工作</div>
            						</div>
            					</a>
            				</div>
            			</div>
            		</div>
            </div>
            <!-- <div class="center_content_img">
              <div>
                <a href="javascript:;">
                    <img src="../assets/tag_proxy.png"/>
                    <p>审车代办</p>
                </a>
                <a href="javascript:;">
                    <img src="../assets/tag_wash.png"/>
                    <p>洗车</p>
                </a>
                <a href="javascript:;">
                    <img src="../assets/tag_beauty.png"/>
                    <p>车辆美容</p>
                </a>
                <a href="javascript:;">
                    <img src="../assets/tag_run.png"/>
                    <p>快修与保养</p>
                </a>
                <a href="javascript:;">
                    <img src="../assets/tag_repair.png"/>
                    <p>维修与救援</p>
                </a>
                <a href="javascript:;">
                    <img src="../assets/tag_market.png"/>
                    <p>备品超市</p>
                </a>
                <a href="javascript:;">
                    <img src="../assets/tag_change.png"/>
                    <p>轮胎更换</p>
                </a>
                <a href="javascript:;">
                    <img src="../assets/tag_around.png"/>
                    <p>品质贴膜</p>
                </a>
                <a href="javascript:;">
                    <img src="../assets/tag_service.png"/>
                    <p>审车代办</p>
                </a>
                <a href="javascript:;">
                    <img src="../assets/tag_spicial.png"/>
                    <p>专属服务</p>
                </a>
              </div>


        		</div>
            -->
            <!-- 点 -->
           <!-- <div class="center_content_bottom">
        			<p class="style"></p>
        			<p></p>
        		</div> -->

          </div>
        </div>
      </div>




  </div>
</template>

<script>
  import Swiper from 'swiper';
export default {
  name: 'index',
  data () {
    return {
      msg: 'index'
    }
  },
  mounted(){
     new Swiper ('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      scrollbar: '.swiper-scrollbar',
    })
    console.log(Swiper)
    }
}
</script>
<style scoped>
  *{padding: 0;margin: 0;box-sizing: border-box;}
  .index{width: 100%;height: 100%;}
  .index_top{width: 100%;height: 180px;position: relative;}
  .index_top>img{width: 100%;height: 100%;}
  /* 文字 */
  .index_text{width: 100%;height: 100%;position: absolute;top:0;left: 0;display: flex;flex-direction: column;    justify-content: center;align-items: start;padding: 10px 20px;}
  .index_text>p{color: white;}
  .index_text>p:nth-child(1){font-size: 15px;font-weight: bold;}
  .index_text>p:nth-child(2){font-size: 12px;padding: 15px 0px;}
  .index_text>p:nth-child(3){padding-left: 3px;border: 1px solid #FFFFFF;width: 130px;font-size: 10px;}
  .index_text>a{text-align: center;width: 20%;padding: 2px 5px;background-color: white;color: #639cf9;border-radius: 15px;text-decoration: none;font-size: 8px;margin-top: 15px;}
   /* 每个版块 */
  .index_center{width: 100%;padding: 5px 10px;position: absolute;top: 160px;}
  .center_content{width: 100%;background-color: #FFFFFF;border-radius: 20px;box-shadow: 1px 1px 5px #ccc;padding: 5px 20px;}
  /* 喇叭 */
  .center_content_service{width: 100%;border-bottom: 1px solid #ebeff2;display: flex;align-items: center;padding: 5px 0px;}
  .center_content_service>img{padding-left: 5px;width: 20px;}
  .center_content_service>p{padding-left: 15px;font-size: 12px;color:#d6d6d6 ;}
  /* 快链接 */
  .center_content_img{width: 100%;height: 180px;padding: 10px 0px;}
  .center_content_img>div{height: 100%;display: flex;flex-wrap: wrap;/* overflow-x: auto; */width: 100%;

    overflow-y: hidden;
    overflow-x: scroll;}
  .center_content_img a{width: 25%;height: 50%;display: flex;flex-direction: column;justify-content: center;align-items: center;text-decoration: none;}
  .center_content_img a img{width: 40px;height: 40px;}
  .center_content_img a p{font-size: 10px;color: #333;padding-top: 5px;}



  /* 小点 */
  .center_content_bottom{height: 10%;display: flex;justify-content: center;align-items: center;}
  .center_content_bottom>p:nth-child(1){height: 5px;width: 5px;border-radius: 50%;background-color: #000;}
  .center_content_bottom>p:nth-child(2){height: 5px;width: 5px;border-radius: 50%;background-color: #000;margin-left: 20px;}


  /*  */
  .style:hover{width: 15px;height: 5px;border-radius: 20px;background-color: #000000;opacity: 0.5;}
  .center_Rotation{width: 100%;height: 10%;margin: 0 10px;overflow: hidden;opacity: 1;}
  .index_business{height: 5%;margin: 0 10px;padding: 5px 10px;border-bottom: 1px solid #CCCCCC;display: flex;align-items: center;justify-content: space-between;}
  .index_business>p{font-size: 10px;padding-left: 5px;border-left: 3px solid #D5622E;}
  .index_business>a{height: 100%;font-size: 10px;color: #CCCCCC;text-decoration: none;display: flex;align-items: center;}
  .index_business>a>img{height: 100%;padding: 3px ;}
  .index_bottom{height: 35%;padding: 10px;overflow: scroll;}
  .bottom_one{display: flex;height: 45%;padding: 10px;box-shadow: 1px 1px 8px #ccc;margin-bottom: 10px;}
  .bottom_one_img{width: 25%;}
  .bottom_one_img>img{height: 100%;}
  .bottom_one_text{width: 55%;height: 100%;border-right: 1px solid #ccc;text-align: center;}
  .bottom_one_text>p:nth-child(1){height: 30%;font-size: 12px;font-weight: bold;}
  .bottom_one_text>div{display: flex;height: 30%;align-items: center;justify-content: center;}
  .bottom_one_text>div>p{font-size: 10px;margin-right: 10px;border: 1px solid #F6956C;color: #F6956C;padding: 0 5px;border-radius: 15px;}
  .bottom_one_text>div>img{padding: 4px 1px;height: 100%;}
  .bottom_one_text>p:nth-child(3){font-size: 8px;height: 30%;color: #a4a4a4;padding-top: 5px;}
  .bottom_one_position{width: 20%;text-align: center;}
  .bottom_one_position>a{height: 60%;}
  .bottom_one_position>a>img{height: 60%;padding-top: 5px;}
  .bottom_one_position>p{color: #639CF9;font-size: 12px;}
</style>
