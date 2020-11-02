<template>
  <div class="order">
    <div class="order_top">
      <div  v-for="(item,index) in msg"><p :class="{text:index==istext}" @click="istextclick(index)">{{item}}</p></div>
    </div>
    <div class="isorder">
      <div class="isorder_top">
          <p>机油</p>
          <p>交易成功</p>
      </div>
      <div class="isborder_center">
          <img src="../../static/img/index_shop.png" alt="">
          <div class="isborder_center_text">
            <p>吉达司汽油机油权和承诺SN5W40四季通用汽车发动机润滑油机油正品4L</p>
            <div><p><span>支持同城配送</span><span>快递：免运费</span></p><p>数量×1</p></div>
          </div>

      </div>
        <div class="isborder_center_bottom">
          <span>总价￥178</span><span>实付￥178</span>
        </div>
        <div class="isborder_bottom"v-show="xinxi">
          <p>支付剩余时间：<span>23:59:59</span></p>
          <p><button>查看物流</button>
          <button>确认收货</button></p>
        </div>
      </div>
  </div>
</template>

<script>
  export default{
    name:"order",
    data(){
      return{
        xinxi:true,
        msg:["全部订单","待付款","待发货","待收货","待评价"],
        istext:'0',
      }
    },
    methods:{
      istextclick(index){
        this.istext= index
      }
    }

  }
</script>

<style>
  *{padding: 0;margin: 0;box-sizing: border-box;}
  .order{padding: 15px;width: 100%;display: flex;flex-direction: column;}
  .isorder{margin-top: 15px;box-shadow: 1px 1px 5px 3px #f5f5f5;flex: 1;border-radius: 10px;}
  .order_top{border-bottom: 1px solid #ddd;padding: 5px;display: flex;}
  .order_top>div{flex: 1;display: flex;justify-content: center;}
  .order_top>p{font-size: 13px;}
  .isorder_top{display: flex;justify-content: space-between;padding: 10px 10px 5px 5px;border-bottom: 1px solid #ddd;}
  .isorder_top>p:nth-child(1){font-size: 14px; font-weight: bold;border-left: 2px solid #F8D11F;padding: 2px 3px;}
  .isorder_top>p:nth-child(2){font-size: 13px ;color: #F45656;}
  .isborder_center{padding:10px;display: flex;align-items: center;}
  .isborder_center>img{height: 75px;}
  .isborder_center_text{padding: 0 10px;line-height: 1.5;}
  .isborder_center_text>p{font-size: 12px;}
  .isborder_center_text>div{display: flex;justify-content: space-between;font-size: 10px;padding: 5px 0;}
  .isborder_center_text>div>p:nth-child(1){color: #ccc;}
  .isborder_center_text>div>p:nth-child(1)>span{padding-right: 10px;}
  .isborder_center_bottom{padding: 0 10px ;display: flex;justify-content: flex-end;font-size: 14px;}
  .isborder_center_bottom>span:nth-child(1){padding-right: 10px;color: #ccc;}
  .isborder_bottom{display: flex;justify-content: flex-end;padding:5px 10px;border-top: 1px solid#ddd;align-items: center;}
  .isborder_bottom>p:nth-child(1){padding-right: 40px;font-size: 12px;}
  .isborder_bottom>p:nth-child(1)>span{color: #F45656;}
  .isborder_bottom>p>button{border: none;background-color: #fff;padding: 2px 5px;}
  .isborder_bottom>p>button:nth-child(1){border: 1px solid #ccc;color: #aaa;border-radius: 5px;margin-right: 5px;}
  .isborder_bottom>p>button:nth-child(2){border: 1px solid #F45656;color: #F45656;border-radius: 5px;}
  .text{color: #F8D11F;border-bottom: 2px solid #F8D11F;}
</style>
