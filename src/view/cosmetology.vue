<template>
  <div class="cosmetology_all">
  	<!-- banner -->
  	<div class=" cosmetology_top">
  		<div class="cosmetology_beijing">
  			<img src="../../static/img/cosmetology1.png" >
  		</div>
  		<div class="cosmetology_tubiao">
  			<img src="../../static/img/cosmetology2.png" >
  		</div>
  		<div class="cosmetology_text">
  			<p>专业的设备、专业的技术、专业的人员，车辆美容，请联系我们，我们只注重品质！</p>
  		</div>
     </div>
     <div class=" cosmetology_center">
       <!-- 筛选 -->
       <div class="center_screen">
         <select name="data">
           <option value="1">榆次区</option>
         </select>
         <select name="sort">
           <option value="1">默认排序</option>
         </select>
         <select name="screen">
           <option value="1">筛选</option>
         </select>
       </div>
       <!-- 导航 -->
       <div class="center_navigation" id="container">

         </div>

       </div>
    </div>
</template>

<script>
  export default {
    name: 'cosmetology',
    data() {
      return {

      }
    },
    mounted:function(){
          this.$store.state.heard_title ='车平台 - 车辆美容';
          //定义地图中心点坐标
          var center = new TMap.LatLng(39.984120, 116.307484)
          //定义map变量，调用 TMap.Map() 构造函数创建地图
          var map = new TMap.Map(document.getElementById('container'), {
              center: center,//设置地图中心点坐标
              zoom: 11,   //设置地图缩放级别
              viewMode:'2D',
          });
    },
  }
</script>

<style scoped>
  @import '../assets/css/cosmetology.css'

</style>
