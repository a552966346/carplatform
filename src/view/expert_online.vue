<template>
  <!--刘玉霞 -->
  <div class="expert_online">
    <!-- 顶部内容 -->
    <div class="expert_online_top">
      <!-- 提示内容 -->
      <div class="expert_top">
        <a href="">
          <div class="top_left">
              <div class="top_left_pic">
                 <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3014973780,3428011786&fm=26&gp=0.jpg" >
              </div>
              <div class="top_left_cont top_left_cont1">
              	<p>车辆坏了怎么办？</p>
              	<p>与专家1对1进行解答</p>
              </div>
          </div>
        </a>
        <a href="">
            <div class="top_left">
                <div class="top_left_pic">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3014973780,3428011786&fm=26&gp=0.jpg" >
                </div>
                <div class="top_left_cont top_left_cont2">
                	<p>车险如何升级？</p>
                	<p>与专家1对1进行解答</p>
                </div>
            </div>
        </a>
      </div>
      <!-- 筛选 -->
      <div class="expert_screen">
      	<select name="consulting"v-model="down.consulting" @change="consulting">
      		<option  value=1 >咨询类型</option>
          <option  value=2 >升级</option>
          <option  value=3 >维护</option>
      	</select>
      	<select name="region"  v-model="down.region" @change="region">
      		<option  value=1 >地区</option>
          <option  value=2 >晋中</option>
          <option  value=3 >运城</option>
      	</select>
      	<select name="sort" v-model="down.sort" @change="sort">
      		<option   value=1 >排序</option>
          <option   value=2 >1小时</option>
          <option   value=3 >2小时</option>
      	</select>
      	<select name="screen" v-model="down.screen" @change="screen">
      		<option  value=1>筛选</option>
          <option  value=2>张三</option>
          <option  value=3 >李四</option>
      	</select>
      </div>
    </div>
    <!-- 列表 -->
    <div class="expert_center">

      	<div class="center_item">
          <!-- 图片 -->
      		<div class="center_item_left">
      			<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=184182366,3170467759&fm=26&gp=0.jpg" >
      		</div>
      		<!-- 内容 -->
          <div class="center_item_center">
            <div class="right_all">
              <div class="right_all_two">
                <p class="center_item_name">李亚娟</p>
                <p class="center_item_position">保险理赔专家</p>
              </div>
              <!-- 向我提问 -->
              <div class="center_item_right">
              	<a href="javascript:;" @click="questions">向我提问</a>
              </div>
            </div>
      			<div class="right_Grade">
              <div class="right_Grade_pic">
                <img src="../../static/img/index_star.png" >
                <img src="../../static/img/index_star.png" >
                <img src="../../static/img/index_star.png" >
                <img src="../../static/img/index_star.png" >
                <img src="../../static/img/index_star.png" >
              </div>
      				<p>3456条评价</p>
      			</div>
      			<div class="right_service">
      				<p>帮助1299人</p>
      				<p>服务3876小时</p>
      			</div>
      			<div class="right_absorbed">
      					<p>保险理赔</p>
      					<p>车险</p>
      					<p>保险升级</p>
      			</div>
      		</div>
      	</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'expert_online',
  data () {
    return {
      msg: 'expert_online',
      down:{
      consulting:1,
      region:1,
      sort:1,
      screen:1,
      }
    }
  },
  methods:{
    consulting:function(){
      console.log(this.down.consulting)
    },
    region:function(){
      console.log(this.down.region)
    },
    sort:function(){
      console.log(this.down.sort)
    },
    screen:function(){
      console.log(this.down.screen)
    },
    questions:function(){

    this.$router.push({
     name: '',
     })
    }
  }
}
</script>
<style scoped>
  @import '../assets/css/expert_online.css'

</style>

