<template>
  <div class="quality_film">
    <!-- banner鍥-->
    <div class="quality_top">
    	<img src="../assets/picture/quality_film_top.png" >
    </div>
    <!-- 筛选 -->
    <div class=" quality_center">
      <!-- 筛选 -->
      <div class="center_screen">
        <select name="data">
          <option value="1">111</option>
        </select>
        <select name="sort">
          <option value="1">222</option>
        </select>
        <select name="screen">
          <option value="1">333</option>
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
  name: 'quality_film',
  data () {
    return {
      msg: 'quality_film'
    }
  },
  mounted:function(){
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
  @import '../assets/css/quality_film.css'

</style>
