<template>
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
                <img src="../assets/index_star.png" >
                <img src="../assets/index_star.png" >
                <img src="../assets/index_star.png" >
                <img src="../assets/index_star.png" >
                <img src="../assets/index_star.png" >
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
<style>
    *{padding: 0;margin: 0;box-sizing: border-box;}
    .expert_online{width: 100%;height: 100%;display: flex;flex-direction: column;overflow: hidden;}
    /* 顶部内容 */
    .expert_online_top{width: 100%;height: 120px;}
    .expert_top{width: 100%;display: flex;height: 80px;padding: 0px 15px;background-color:#F2F2F2;}
    .expert_top>a{flex: 1;display: flex;align-items: center;}
    .expert_top>a:nth-child(2){justify-content: flex-end;}
    .top_left{display: flex;}
    /* .top_left_pic{width: 50px;height: 50px;border-radius: 5px;} */
    .top_left_pic img{width:50px;height:50px;border-radius: 5px;}
    .top_left_cont{display: flex;flex-direction: column;justify-content: center;}
    .top_left_cont1{padding: 0px 10px;}
    .top_left_cont2{padding-left: 10px;}
    .top_left_cont p:nth-child(1){font-size: 12px;color: #333;text-align: justify;}
    .top_left_cont p:nth-child(2){font-size: 12px;color: #999;text-align: justify;}
    /* 筛选 */
    .expert_screen{width: 100%;display: flex;height: 40px;background-color: #fff;border-bottom: 2px solid #F2F2F2;}
    .expert_screen select{flex: 1;border: none;text-align-last: center;}
    /* 列表 */
    .expert_center{flex: 1;overflow: auto;}
    .center_item{display: flex;padding: 10px;border-bottom: 1px solid #ccc;}
    .center_item_left{width:30%;height: 120px;}
    .center_item_left img{width: 90%;height: 100%;}
    .center_item_center{width: 70%;display: flex;flex-direction: column;justify-content: center;align-items: flex-start;padding: 0px 15px;}
    /*名字 */
    .right_all{display: flex;width: 100%;justify-content: space-between;align-items: center;}
    .right_all_two{display: flex;flex-direction: column;text-align: justify;}
    .center_item_name{font-size: 14px;font-weight: bold;padding-bottom: 3px;}
    .center_item_position{font-size: 12px;color: #333;padding-bottom: 3px;}
    /* 提问 */
    /* .center_item_right{} */
    .center_item_right a{background-color: #F8D11F;color: #fff;font-size: 12px;padding: 2px 8px;border-radius: 15px;}
    /* 评价 */
    .right_Grade{display: flex;padding-bottom: 3px;}
    .right_Grade_pic{display: flex;align-items: center;margin-right: 5px;}
    .right_Grade_pic img{width: 8px;margin: 0px 2px;}
    .right_Grade p{font-size: 12px;color: #ccc;}
    /* 服务 */
    .right_service{display: flex;align-items: center;font-size: 12px;color: #ccc;padding-bottom: 5px;}
    /* 业务咨询条件 */
    .right_absorbed{display: flex;align-items: center;font-size: 12px;color: #ccc;}
    .right_absorbed p{border: 1px solid #ccc;border-radius: 5px;padding:0px 5px;margin-right: 5px;}

</style>
