<template>
  <div class="detailed_all">
  	<div class="detailed_top">
  		<p class="bottom">全部</p>
  		<p>收入</p>
  		<p>支出</p>
  	</div>
  	<div class="detailed_center">
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+100</p>
  		</div>
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+100</p>
  		</div>
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+100</p>
  		</div>
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+100</p>
  		</div>
  	</div>
  	<div class="detailed_center" style="display: none;">
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+120</p>
  		</div>
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+120</p>
  		</div>
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+120</p>
  		</div>
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+120</p>
  		</div>

  	</div>
  	<div class="detailed_center" style="display: none;">
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+150</p>
  		</div>
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+150</p>
  		</div>
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+150</p>
  		</div>
  		<div class="center_text">
  			<p>签到成功</p>
  			<p>+150</p>
  		</div>

  	</div>
  </div>
</template>

<script>
  export default {
    name: 'detailed',
    data() {
      return {
        
      }
    },
    mounted:function(){
          this.$store.state.heard_title ='车平台 - 积分详情'
    },
  }
</script>

<style scoped>
  @import '../assets/css/detailed.css'

</style>
