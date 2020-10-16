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
          this.$store.state.heard_title ='车平台 - 车辆美容'
    },
  }
</script>

<style scoped>
  @import '../assets/css/cosmetology.css'

</style>
