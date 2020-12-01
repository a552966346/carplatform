<template>
    <div class="center_navigation" id="container" >

    </div>
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="90%"
      modal
      title="商户详情"
      :show-close = "showcs"
      close-on-click-modal
      top=350px
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
                    <router-link  :to="{path:'/store_details',query:{ id:item.id }}">立即预约</router-link>
                  </div>
                </div>
              </div>
    </el-dialog>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>

<style>
</style>
