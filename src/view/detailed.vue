<template>
  <div class="detailed_all">
  	<div class="detailed_top">
  		<p v-for="(txt,index) in det_top"  :class="{bottom: bottom == index}" @click="isbutton_one(index)">{{txt.text}}</p>
  		<!-- <p  :class="{bottom: bottom}" @click="isbutton_two">收入</p>
  		<p  :class="{bottom: bottom}" @click="isbutton_three">支出</p> -->
  	</div>
  	<div class="detailed_center" v-show="">
  		<div class="center_text"  v-for="cent in det_obtain">
  			<p>{{cent.obt_text}}</p>
  			<p>{{cent.obt_nub}}</p>
  		</div>
  	</div>
  	<div class="detailed_center"  v-show="">
  		<div class="center_text"  v-for="cent in det_obtain">
  			<p>{{cent.obt_text}}</p>
  			<p>{{cent.obt_nub}}</p>
  		</div>

  	</div>
  	<div class="detailed_center"  v-show="">
  		<div class="center_text"  v-for="cent in det_obtain">
  			<p>{{cent.obt_text}}</p>
  			<p>{{cent.obt_nub}}</p>
  		</div>

  	</div>
  </div>
</template>

<script>
  export default {
    name: 'detailed',
    data() {
      return {
        det_top:[
          {'text': "全部",id:'1'},
          {'text': "收入",id:'2'},
          {'text': "支出",id:'3'}
        ],
        det_obtain:[
         { 'obt_text':'签到成功','obt_nub':'+100'},
         { 'obt_text':'签到成功','obt_nub':'+200'},
        ],
        bottom: 0
      }
    },
    mounted:function(){
          this.$store.state.heard_title ='车平台 - 积分详情'
    },
    methods:{
       isbutton_one:function(index){
            this.bottom = index;
                      }
      // isbutton_three:function(){
      //   this.isbreak = true;
      // }
    }
  }
</script>

<style scoped>
  @import '../assets/css/detailed.css'

</style>
