<template>
  <div class="repair_all">
    <div class=" repair_top">
      <img src="../assets/maintain.png">
    </div>
    <div class=" repair_center">
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
      <div class="center_navigation" @click="shop">

        </div>
        <div class="shop" ref="total" style="display: none;">
        								<div class="upper">
        									<div class="upper_img">
        										<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3459447635,4017257470&fm=26&gp=0.jpg" >
        									</div>
        									<div class="upper_text">
        										<div class="upper_text_top">
        											<p>路虎养车&nbsp;&nbsp;(晋中文苑东街店)</p>
        											<a href="#"><img src="@/assets/daohang.png" >
        											导航</a>
        										</div>
        										<div class="upper_text_score">
        											<p>快修店</p>
        											<p>5级</p>
        											<p><span>评分</span>5.0</p>
        										</div>
        										<div class="upper_text_phont">
        											<img src="@/assets/phone.png" >
        											<p>123-2345-7692</p>
        										</div>
        									</div>

        								</div>
        								<div class="bottom">
        									<div class="bottom_left">
        										<p>山西省晋中市榆次区文苑街239号安徽的卡号啊</p>
        									</div>
        									<div class="bottom_right">
        										<a href="#">去换胎</a>
        									</div>
        								</div>
        							</div>
      </div>
    </div>
</template>

<script>
  // import layer from 'layui'
  export default {
    name: 'repair',
    data() {
      return {
        content:1
      }
    },
    methods: {
      shop: function() {
        console.log()
        var  that = this.$refs.total
        layui.use('layer', function() {
          var layer = layui.layer;
          console.log(typeof(that))
        // $(".layui-layer").css("background", "none");
          layer.open({
            type: 1,
            title: false,
            //样式类名
            // closeBtn: 0, //不显示关闭按钮
            // anim: 2,
            // area: ['330px', 'auto'],
            // offset: '400px',
            // shade: 0.01,
            // id: 'one',
            // shadeClose: true, //开启遮罩关闭
            content: that
          });
        });
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
  }

  .repair_all {
    height: 100%;
  }

  .repair_top {
    height: 25%;
    width: 100%;
  }

  .repair_top>img {
    height: 100%;
    width: 100%;
  }

  .repair_center {
    height: 75%;
  }

  .center_screen {
    height: 8%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  select {
    height: 100%;
    width: 30%;
    color: #868686;
    font-size: 12px;
    text-align: center;
    outline: none;
    border: none;
    text-align: center;
    text-align-last: center;
    background-color: #FFFFFF;
  }

  .center_navigation {
    height: 40%;
    background-color: #f5f5f5;
  }

  .shop {
    padding: 10px;
    margin: 0 auto;
  }

  .layui-layer-content {
    height: 100%;
  }

  .layui-layer {
    border-radius: 10px !important;
  }

  .upper {
    display: flex;
  }

  .upper_img {
    padding: 5px;
    width: 25%;
  }

  .upper_img>img {
    height: 100%;
    width: 100%;
  }

  .upper_text {
    width: 75%;
    padding: 0 5px;
  }

  .upper_text_top {
    display: flex;
    justify-content: space-between;
  }

  .upper_text_top>p {
    width: 75%;
    font-size: 12px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    /* letter-spacing:2px;*/
  }

  .upper_text_top>a {
    background-color: #FEF6D2;
    font-size: 12px;
    color: #F8D11F;
    border-radius: 5px;
    padding: 0 2px;
    text-align: center;
    text-decoration: none;
  }

  .upper_text_top>a>img {
    height: 20px;
  }

  .upper_text_score {
    display: flex;
    padding: 5px 40px 5px 0;
  }

  .upper_text_score>p {
    color: #E71919;
    border: 1px solid #E71919;
    padding: 1px 2px;
    border-radius: 5px;
    font-size: 10px;
    letter-spacing: 1px;
  }

  .upper_text_score>p:nth-child(2) {
    margin: 0 10px;
  }

  .upper_text_score>p:last-child {
    border: none;
  }

  .upper_text_score>p>span {
    color: #F29D97;
    padding-right: 5px;
  }

  .upper_text_phont {
    padding: 5px 0;
    display: flex;
    color: #3E9FD7;
    align-items: center;
    letter-spacing: 1px;
    font-size: 12px;
  }

  .upper_text_phont>img {
    height: 15px;
  }

  .upper_daohang {
    width: 18%;
  }

  .bottom {
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom_left {
    width: 70%;
  }

  .bottom_left>p {
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .bottom_right>a {
    background-color: #F8D11F;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 3px 6px;
    font-size: 12px;
    text-decoration: none;
  }
</style>
