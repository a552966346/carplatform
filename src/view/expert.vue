<template>
    <div class="expert">
          <div class="expert_top">
                <div class="top-center">
                      <div class="top_center_xinxi">
                          <div class="xinxi_left">
                              <h3>李亚娟</h3>
                              <p> 保险理赔专家</p>
                                <img :src="star[4]"/><span>3456条评价</span><br />
                                <span>帮助1299人</span><span>服务3876小时</span><br />
                                <span class="isborder">保险理赔</span><span class="isborder">车险</span><span class="isborder">保险升级</span>
                          </div>
                          <div class="xinxi_right">
                              <img src="../../static/img/portrait.jpg" alt="">
                          </div>
                      </div>
                      <div class="top_center_minpian">
                            <span class="isborder">个人名牌</span>
                            <p>长按立即查看详情</p>
                            <img src="../../static/img/portrait.jpg" alt="">
                      </div>
                </div>
          </div>
          <div class="expert_center">
              <p>联系方式</p>
              <div class="center_text">
                  <p>129-3418-0987</p>
                  <img src="../../static/img/expert_phone.png" alt="">
              </div>
              <div class="center_text">
                  <p>2684786455@qq.com</p>
                  <img src="../../static/img/expert_emaim.png" alt="">
              </div>
              <div class="center_text">
                  <p>MS LIYAJUAN111</p>
                  <img src="../../static/img/expert_weixin.png" alt="">
              </div>
              <div class="center_text">
                  <p>山西省晋中市榆次区高楼大厦F栋</p>
                  <img src="../../static/img/expert_weizhi.png" alt="">
              </div>

          </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        star:[
         require('../../static/img/stars_one.png'),
         require('../../static/img/stars_two.png'),
         require('../../static/img/stars_three.png'),
         require('../../static/img/stars_four.png'),
         require('../../static/img/stars_five.png')
        ],
      }
    },
    mounted(){
      this.$store.state.heard_title ='车平台 - 专家详情'
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  .expert{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .expert_top{
    background-color: #000000;
    height: 20%;
    border-radius: 0 0 20% 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top-center{
    position: absolute;
    top: 50px;
    height: 200px;
    width: 85%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px #F0F0F0;
  }
  .top_center_xinxi{
    display: flex;
    padding: 10px;
    height: 75%;
  }
  .xinxi_left{
    width: 70%;
    padding: 15px 10px;
  }
  .xinxi_left>h3{
    font-weight: bold;
  }
  .xinxi_left>p{
    font-size: 12px;
    font-weight: bold;
    line-height: 2.5;
  }
  .xinxi_left>img{
    height: 10px;
    width: 60px;
    margin-right: 10px;
  }
  .xinxi_left>span{
    font-size: 12px;
    color: #ccc;
    margin-right: 10px;
    line-height: 1.5;
  }
  .isborder{
    border: 1px solid #ccc;
    padding: 1px 2px;
    border-radius: 5px;
    color: #ccc;
  }
  .xinxi_right{
    padding-top:15px ;
    width: 30%;
    text-align: center;
  }
  .xinxi_right>img{
    border-radius: 50%;
    height: 50px;
  }
  .top_center_minpian{
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    border-top: 1px solid #ccc;
  }
   .top_center_minpian>img{
     height: 40px;
     border-radius: 50%;
   }
   .top_center_minpian>p{
     color: #ccc;
   }
   .expert_center{
     flex: 1;
     padding: 100px 10px 10px 20px;
   }
   .expert_center>p{
     border-left: 2px solid #F3BE30;
     padding-left: 10px;
   }
   .center_text{
     display: flex;
     line-height: 3;
     padding: 0 20px;
     align-items: center;
     justify-content: space-between;
   }
    .center_text>p{
      font-size: 14px;
    }
    .center_text>img{
      height: 15px;
    }
   .expert_center>div:nth-child(2){
     margin-top: 20px;
   }
</style>
