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
     <div class=" cosmetology_center">
       <!-- 筛选 -->
     <!--  <div class="center_screen">
         <select name="data">
           <option>洗车方式</option>
           <option v-for="item in category" :key="item.id" :value="item.id">{{item.name}}</option>
         </select>
         <select name="sort">
           <option>店铺等级</option>
           <option v-for="item in star" :key="item" :value="item">{{item}}</option>
         </select>
         <select name="screen">
           <option value="0">智能排序</option>
           <option value="1">好评优先</option>
           <option value="2">距离优先</option>
         </select>
       </div> -->
       <!-- 导航 -->
       <div class="center_navigation" id="container">

         </div>
          <!-- 弹框 -->
            <el-dialog
              :visible.sync="centerDialogVisible"
              width="90%"
              modal
              title="商户详情"
              :show-close = "showcs"
              close-on-click-modal
              top=400px
              >
              <div class="shop" ref="total" v-for="(item,index) in merchant" :key="item.id" v-show="shows==item.id">
                        <div class="upper">
                          <div class="upper_img">
                            <img :src="item.banner" />
                          </div>
                          <div class="upper_text">
                            <div class="upper_text_top">
                              <p>{{item.name}}</p>
                              <a href="#"><img src="../../static/img/daohang.png">
                              导航</a>
                            </div>
                            <div class="upper_text_score">
                              <p>快修店</p>
                              <p>{{item.star}}级</p>
                              <p><span>评分</span>{{item.star}}.0</p>
                            </div>
                            <div class="upper_text_phont">
                              <img src="../../static/img/phone.png" >
                              <p>{{item.mobile}}</p>
                            </div>
                          </div>

                        </div>
                        <div class="center">
                          <div class="center_left"><p>精选服务</p></div>
                          <div class="center_right" v-for="(item,index) in item.service"><p>{{item}}</p></div>
                          <!-- <div class="center_right"><p>精洗</p></div>
                          <div class="center_right"><p>全车内饰清洗</p></div>
                          <div class="center_right"><p>打蜡</p></div> -->
                        </div>
                        <div class="bottom">
                          <div class="bottom_left">
                            <p>{{item.address}}</p>
                          </div>
                          <div class="bottom_right">
                            <a :href="'tel:'+item.mobile">立即预约</a>
                          </div>
                        </div>
                      </div>
            </el-dialog>
       </div>
    </div>
</template>

<script>
  export default {
    name: 'cosmetology',
    data() {
      return {
      data:[],
      merchant:[],
      category:[],
      latitude:'',
      longitude:'',
      star:[1,2,3,4,5],
      detailimages :[],
      centerDialogVisible: false,
      shows:'',
      showcs:false,
	  service:[]
      }
    },
    mounted:function(){
          this.$store.state.heard_title ='车平台 - 车辆美容';
          var that =this
          var markerss
          that.$addr.get('/index/service/vehicle')
              .then(res=>{
                 console.log(res.data)
                  that.data = res.data.result.data,
                  that.merchant = that.data.merchant,
                  that.category = that.data.category,
                  // console.log(that.merchant)
                  that.detailimages = that.data.detailimages
                  that.service= that.merchant.service
                  let center = new TMap.LatLng(that.merchant[1].lat, that.merchant[1].lng)
                  //定义map变量，调用 TMap.Map() 构造函数创建地图
                  let map = new TMap.Map(document.getElementById('container'), {
                      center: center,//设置地图中心点坐标
                      zoom: 11,   //设置地图缩放级别
                      viewMode:'2D',
                  });
                      markerss = that.marker(that.merchant)
                    let marker = new TMap.MultiMarker({
                                 id: 'container',
                                 map: map,
                                 styles: {
                                     "marker": new TMap.MarkerStyle({
                                         "width": 25,
                                         "height": 35,
                                         "anchor": { x: 16, y: 32 },
                                         "src": '../../static/img/wash_weizhi.png'
                                     })
                                 },
                                   geometries: markerss,

                                })
                                marker.on("click", that.shop)
              })
    },
    methods:{
      shop(evt) {
         console.log(evt)
         this.shows =evt.geometry.id
         this.centerDialogVisible = true
      },
      division(str){
        console.log(str)
        // let service =str.split("@");
        // (this.message.message || "").split("\n");
      },
      marker(ent){
        let that = this
        let id = []
        let pos = [],name = [], str = '',markers = []
       //console.log(ent[0].lat)
          //console.log(ent[i].lat)
          for(let i= 0 ; i<ent.length; i++){
            // that.marker(that.merchant[i])
            let position =  new TMap.LatLng(ent[i].lat,ent[i].lng)
            pos[i] = position,
            id[i] = ent[i].id
            name[i] = ent[i].name
            str = {"id":id[i],"position":pos[i],"styleId":'marker'}
            markers[i] = str
            }
             return markers
        /* {
             "id":that.merchant[i].id,
             "styleId": 'marker',
             "position":position,
             "properties": {
                 "title":that.merchant[i].name
             } */


       }
    }
  }
</script>

<style scoped>
  @import '../assets/css/cosmetology.css';
  .el-dialog--center .el-dialog__body{padding:10px 10px 10px}

</style>
