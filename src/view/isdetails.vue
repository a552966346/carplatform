<template>
  <div class="details">
    <!-- 头部 -->
        <div class="details_top">
            <p :class="{border_down:border_down}" @click="isborder_one">已预约</p>
            <!-- <p :class="{border_down:!border_down}" @click="isborder_two">预约历史</p> -->
        </div>
        <!-- 已预约内容 -->
        <div class="details_center"v-show="border_down">
          <!-- 预约服务 -->
            <div class="details_center_up">
                <span class="back_color">审车</span>
                <!-- <span>贴膜</span>
                <span>洗车</span>
                <span>轮胎更换</span> -->
            </div>
            <!-- 预约卡 -->
            <div class="center_up_xiang" v-for="(item) in yuyue" :key="item.id">
                <div class="xing_time">
                  <p>预约时间 {{item.booktime_text}}</p>
                  <p>{{item.status}}</p>
                </div>
                <div class="xing_center">
                 <!-- <img src="../../static/img/index_shop.png" alt=""> -->
                  <div class="xiang_center_text">
                    <p v-show="item.category==1" class="title">审车代办(全程代办)</p>
                    <p v-show="item.category==2" class="title">审车代办(自驾前往)</p>
                    <!-- <p>预约门店：路虎养车 <img src="../../static/img/expert_phone.png" alt=""></p> -->
                    <p v-show="item.category==1" id="text">地址：{{item.position}}</p>
                  </div>
                </div>
                <div class="xing_button">
                  <p v-show="item.status == '请求通过'">请您于{{item.booktime_text.split(' ')[0]}}当日前往</p>
                  <!-- <p>
                      <button>取消预约</button>
                      <button>确认服务</button>
                  </p> -->
                </div>
            </div>
        </div>
       <!-- <div class="details_center" v-show="!border_down">

            <div class="details_center_up">
                <span class="back_color">审车</span>
                <span>贴膜</span>
                <span>洗车</span>
                <span>轮胎更换</span>
            </div>

            <div class="center_up_xiang">
                <div class="xing_time">
                  <p>预约时间 2020-10-3 15:30</p>
                  <p>服务完成</p>
                </div>
                <div class="xing_center">
                  <img src="../../static/img/index_shop.png" alt="">
                  <div class="xiang_center_text">
                    <p>贴膜</p>
                    <p>预约门店：路虎养车 <img src="../../static/img/expert_phone.png" alt=""></p>
                    <p>地址：山西省晋中市榆次区顺城街店</p>
                  </div>
                </div>
            </div>
        </div> -->
  </div>
</template>

<script>
  export default{
    name:"isdetails",
    data(){
      return{
        border_down:true,
        yuyue:''
      }
    },
    mounted(){
     this.$store.state.heard_title = "车平台 - 我的预约"
     this.$addr.get('/index/user/book')
         .then(res => {
            this.yuyue = res.data.result.data
         })

    },
    methods:{
      isborder_one(){
        this.border_down = true
      },
      // isborder_two(){
      //   this.border_down =false
      // },
    }
  }
</script>

<style>
  *{padding: 0;margin: 0;box-sizing: border-box;}
  .details{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .details_top{
    display: flex;
    padding: 5px 20px;
    box-shadow: 1px 1px 5px 2px #f5f5f5;
  }
  .details_top>p{
      margin-left: 15px;
      font-size: 14px;
      font-weight: bold;
      color: #999999;
      padding: 3px 0;
  }
  .details_center{
    flex: 1;
    padding: 0 20px;
    padding-bottom: 50px;
    overflow: auto;
  }
  .details_center_up{
      padding: 15px;
  }
  .details_center_up>span{
    font-size: 12px;
    color: #999;
    background-color: #ddd;
    border-radius: 10px;
    padding: 2px 8px;
  }
  .center_up_xiang{
    /* height: 25%; */
    flex: 1;
    box-shadow: 1px 1px 10px 5px #f6f6f6;
    border-radius: 15px;
  }
  .xing_time{
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    font-size: 12px;
  }
  .xing_time>p:nth-child(2){
    color: #F8D11F;
  }
  .xing_center{
    display: flex;
    width: 100%;
    padding: 8px 15px;
    border-top:1px solid #F6F6F6 ;
    border-bottom: 1px solid #F6F6F6;
    align-items: center;
  }
  .xing_center>img{
    height: 55px;
  }
  .xiang_center_text{
    padding-left: 10px;
    width: 100%;
  }
  .title{
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 3px;
  }
  #text{
      font-size: 11px;
      color: #aaa;
      width: 100%;
      display: flex;
      line-height: 2;
      align-items: center;
      justify-content: space-between;
  }
  /* .xiang_center_text>p:nth-child(2)>img{
    height: 15px;
  }
  .xiang_center_text>p:nth-child(3){
    font-size: 12px;
    color: #aaa;
  } */
  .xing_button{
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
  }
  .xing_button>p{
    font-size: 11px;
  }
  .xing_button>p>button{
    border: none;
    color: #fff;
    padding: 2px 5px;
    border-radius: 5px;
  }
  .xing_button>p>button:nth-child(1){
    margin-right: 5px;
    background-color:#FF6F6F ;
  }
  .xing_button>p>button:nth-child(2){
    background-color:#F8D11F ;
  }
  .border_down{
    border-bottom: 2px solid #F8D11F;
    color: #000000 !important;
  }
  .back_color{
    background-color:#F3BE30 !important;
    color: #fff !important;
  }
</style>
