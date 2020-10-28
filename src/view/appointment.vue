<template>
  <div class="appointment">
    <div class="appointment_top">
          <p>预约门店</p>
          <div class="appointment_mendian">
              <div class="mendian_up">
                  <div class="mendian_up_left">
                      <img src="../../static/img/index_shop.png" alt="">
                  </div>
                  <div class="mendian_up_right">
                    <p>路虎养车</p>
                    <p>地址：山西省晋中榆次顺城街店</p>
                    <p><span>快修店</span><span>5级</span></p>
                  </div>
              </div>
              <div class="mendian_down">
                <p>精选服务</p>
                <p>普洗</p>
                <p>精铣</p>
                <p>全车内饰清洗</p>
                <p>打蜡</p>
              </div>
          </div>
    </div>
    <div class="appointment_center">
        <h3>预约信息</h3>
        <div class="appointment_center_text">
          <p>姓名：杨（女士）</p>
          <p>联系方式：138 438 14438</p>
          <p>时间：2020.10.13 下午 15:30</p>
          <p>服务项目：贴膜</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"appointment",
    data(){
      return{

      }
    },
    mounted(){
      this.$store.state.heard_title = "车平台 - 预约详情"
    }
  }
</script>

<style>
  *{padding: 0;margin: 0;box-sizing: border-box;text-decoration: none;}
  .appointment{height: 100%;width: 100%;display: flex;flex-direction: column;padding: 15px 0;background-color: #f5f5f5;}
  .appointment_top{
    /* flex: 1; */
    height: 30%;
    width: 100%;
    background-color: #fff;
    box-shadow: 1px 1px 10px 2px #ddd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .appointment_top>p{
    font-size: 12px;
    padding: 5px 25px;
    border-top-left-radius: 10px;
    background-color: #F8D11F;
    color: #fff;
  }
  .appointment_mendian{
    padding: 10px 20px;
    height: 85%;
    width: 100%;
  }
  .mendian_up{
    display: flex;
    height: 70%;
    align-items: center;
  }
  .mendian_up_left{
    width: 35%;
    text-align: center;
  }
  .mendian_up_left>img{
    height: 80px;
  }
  .mendian_up_right{
    padding: 0 10px;
  }
  .mendian_up_right>P{
    line-height: 2;
  }
  .mendian_up_right>p:first-child{
    font-size: 14px;
    font-weight: bold;
  }
  .mendian_up_right>p:nth-child(2){
    font-size: 13px;
    color: #aaa;
  }
  .mendian_up_right>p:nth-child(3){
    font-size: 12px;
    color: #E93131;
  }
  .mendian_up_right>p:nth-child(3)>span{
    padding: 2px 5px;
    margin-right: 10px;
    border: 1px solid #E93131;
    border-radius: 5px;
  }
  .mendian_down{
    display: flex;
    justify-content: space-between;
  }
  .mendian_down>p{
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: #ddd;
    color: #aaa;
  }
  .mendian_down>p:first-child{
    color: #F8D11F !important;
    background-color: #FEF6D2!important;
  }
  .appointment_center{
    flex: 1;
    padding-top: 20px;
    width: 100%;
  }
  .appointment_center>h3{
    padding: 10px 20px;
    font-weight: bold;
  }
  .appointment_center_text{
    height: 45%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 3;
    padding: 0 30px;
    color: #aaa;
  }
</style>
