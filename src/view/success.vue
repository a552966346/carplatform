<template>
  <div class="success">
      <div class="success_top">
            <div class="success_top_center">
              <img src="../../static/img/personal_center_evaluated.png" alt="">
              <p>预约成功</p>
              <p>您已预约成功，详情可以在【个人中心 - 预约】中查看~</p>
            </div>
            <div class="success_top_bottom">
                  <div class="top_bottom_center">
                       <div class="bottom_center_xiangmu">
                           <p>——<span>项目</span>——</p>
                           <h3>审车代办</h3>
                        </div>
                        <div class="bottom_center_bianhao">
                            <p><span>订单编号</span><span>2020015855231</span></p>
                            <p><span>下单时间</span><span>2020-02-22 10:22:23</span></p>
                        </div>
                  </div>
            </div>
      </div>
      <div class="success_center">
              <button @click="run">查看订单</button>
      </div>
  </div>
</template>

<script>
  export default{
    name:"success",
    data(){
      return{

      }
    },
	mounted(){
      this.$store.state.heard_title ='车平台 - 预约成功'
    },
    methods:{
      run(){
        this.$router.push("/isdetails")
      }
    }
  }
</script>

<style>
  *{padding: 0;margin: 0;box-sizing: border-box;list-style:none}
  .success{height: 100%;display: flex;flex-direction: column;}
  .success_top{background-color: #50AEB4;height: 30%;padding: 20px 20px 0 20px;}
  .success_top_center{height: 65%;text-align: center;}
  .success_top_center>img{height: 40px;}
  .success_top_center>p{color: #fff;font-size: 12px;}
  .success_top_center>p:nth-child(2){padding: 5px 0;}
  .success_top_bottom{background-color: #5097B4;height: 10px;border-radius: 5px;padding: 0.5px 15px;position: absolute;width: 88%;}
  .top_bottom_center{height: 160px;background:url(../../static/img/success_img.png)no-repeat 0.0;text-align: center;padding: 5px;background-size: 100%;}
  .bottom_center_xiangmu{height: 45%;display: flex;flex-direction: column;justify-content: center;}
  .bottom_center_xiangmu>p{font-size: 10px;color: #ccc;}
  .bottom_center_xiangmu>h3{color:#F8D11F;font-weight: bold;padding: 5px 0;}
  .bottom_center_bianhao{height: 55%;border-top:1px dashed #ccc ;padding: 0 15px;}
  .bottom_center_bianhao>p{display: flex;height: 50%;align-items: center;justify-content: space-between;}
  .success_center{flex: 1;background-color: #f5f5f5;display: flex;justify-content: center;align-items: center;}
  .success_center>button{padding: 10px 80px;background-color: #50AEB4;border: none;color: #fff;border-radius: 30px;}
</style>
