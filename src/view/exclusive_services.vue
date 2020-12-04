<template>
  <!--刘玉霞 -->
  <div class="exclusive_services">
    <!--开通模块 -->
    <div class="exclusive_title">

        <div class="exclusive_top" v-show="show">
            <a href="#" @click="add">
              <img src="../../static/img/exclusive_add.png" >
            </a>
            <p>请立即添加您的爱车</p>
        </div>
        <div class="exclusive_top exclusive_two" v-show="!show">
            <img :src="img" alt="">
            <div class="exclusive_top_center">
                <p>{{nickname}}</p>
                <p>{{number}}</p>
                <p>欢迎开启您的专属服务</p>
            </div>
        </div>
    </div>
    <!-- 剩余板块 -->
    <div class="exclusive_cont">
      <!-- 内容提醒 -->
      <div class="exclusive_center">
        <!-- 保险到期提醒 -->
        	<div class="center_remind">
        		<div class="center_remind_pic">
        			<img src="../../static/img/exclusive_insurance.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>保险到期提醒</p>
        			<p>123天</p>
        		</div>
        	</div>
          <!-- 审车提醒 -->
        	<div class="center_remind">
        		<div class="center_remind_pic">
        			<img src="../../static/img/exclusive_car.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>审车提醒</p>
        			<p>90天</p>
        		</div>
        	</div>
          <!-- 违章告知 -->
        	<div class="center_remind">
            <div class="center_remind_pic">
        			<img src="../../static/img/exclusive_notification.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>违章告知</p>
        			<p>100天</p>
        		</div>
        	</div>
          <!-- 驾照到期等换提醒 -->
        	<div class="center_remind">
        		 <div class="center_remind_pic">
        			<img src="../../static/img/driving_driving.png" >
        		</div>
        		<div class="center_remind_cont">
        			<p>驾照跟换</p>
              <p>110天</p>
        		</div>
        	</div>
      </div>
      <!-- 轮播图 -->
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../static/img/exclusive_one.png" alt=""></div>
            <div class="swiper-slide"><img src="../../static/img/exclusive_two.png" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'exclusive_services',
  data () {
    return {
        msg: 'exclusive_services',
        show:false,
        name:'',
        img:'',
        number:'',
        nickname:''
    }
  },
  mounted(){
    this.$store.state.heard_title ='车平台 - 专属服务'
        var that = this
        var data
        that.$addr.get('/index/service/isReg')
        .then(res=>{
            console.log(res.data)
            data= res.data.result
            if(data.status==0){
                that.show = true
            }else{
                 that.show = false
                that.img = data.data.avatar,
                that.number = data.data.number
                that.nickname = data.data.nickname
            }
            that.$nextTick(function(){
                that.swiper()
            })
        })
  },
 methods:{
    add(){
      this.$router.push('/add_vehicle')
    },
    swiper(){
        var swiper = new Swiper('.swiper-container', {
             slidesPerView: 1,
             spaceBetween: 0,
             // loop: true,
             pagination: {
               el: '.swiper-pagination',
               // clickable: true,
               type:'progressbar'
             },
           });
    }
  }

}
</script>
<style scoped>
  @import '../assets/css/exclusive_services.css';

</style>
