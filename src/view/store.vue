<template>
    <div class="store">
      <div class="index_shop_title">
          <p>附近商家</p>
          <!-- <a href="javascript:;">更多<i class="iconfont icon-youjiantou"></i></a> -->
      </div>
      <!-- 内容 -->
      <div class="index_shop_cont">
          <div v-for="(item,index) in merchant" :key="item.id">
              <div class="index_shop_item">
                  <router-link :to="{path:'/store_details',query:{ id:item.id,km:km[index]}}" class="around">
                      <div class="index_shop_picitem">
                          <img :src="item.banner" />
                      </div>
                      <div class="index_shop_textitem">
                          <p class="index_centershop_toptitle">{{item.name}}</p>
                          <div class="index_shop_centertext">
                              <p class="index_centershop_centertitle">维修保养</p>
                              <img :src=" index_star(item.star)">
                          </div>
                          <p class="index_centershop_bottomtitle">{{item.address}}</p>
                      </div>
                  </router-link>
                  <a @click="toMap(item)" class="last_a">
                      <div class="index_shop_righttext">
                          <img class="position_img" src="../../static/img/index_navigation.png">
                          <p>{{km[index]}}km</p>
                      </div>
                  </a>
              </div>

          </div>
      </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                id: "",
                llat: '',
                llng: '',
                address: '',
                km: [],
                status: '',
                lat: [],
                star: [
                    require('../../static/img/stars_one.png'),
                    require('../../static/img/stars_two.png'),
                    require('../../static/img/stars_three.png'),
                    require('../../static/img/stars_four.png'),
                    require('../../static/img/stars_five.png')
                ],
                lng: [],
                merchant:[],
            }
        },
        mounted() {
            this.$store.state.heard_title ='车平台 - 附近商家'
            var that = this
            that.$addr.post('/index/index/merchantinfo')
            .then(res=>{
                console.log(res.data.result.merchant)
                that.merchant = res.data.result.merchant
                that.$nextTick(function(){
                    that.dingwei()
                })
            })
        },
        methods:{
            dingwei() {
                var that = this
                //定位
                 var geolocation = new qq.maps.Geolocation();
                var options = {
                    timeout: 600000
                };
                geolocation.getLocation(showPosition, showErr, options);
                function showPosition(position) {
                    that.llat = position.lat,
                        that.llng = position.lng,
                        that.laddress = position.address
                    that.km = that.distance()
                }

                function showErr() {
                    console.log("定位失败")
                };
            },
            index_star(str) {
                switch (str) {
                    case '1':
                        return this.star[0];
                        break;
                    case '2':
                        return this.star[1];
                        break;
                    case '3':
                        return this.star[2];
                        break;
                    case '4':
                        return this.star[3];
                        break;
                    case '5':
                        return this.star[4];
                        break;
                }
            },
            toMap(res) {
                var oudlat = this.llat,
                    oudlng = this.llng,
                    outaddress = this.address;
                var nlat = res.lat,
                    nlng = res.lng,
                    address = res.address;
                window.location.href = "https://apis.map.qq.com/uri/v1/routeplan?type=drive&from=" + outaddress +
                    "&fromcoord=" +
                    oudlat + "," + oudlng + "&to=" + address + "&tocoord=" + nlat + "," + nlng +
                    "&policy=1&referer=W24BZ-WXDCO-JJGWX-SOQQZ-2HQRO-5JBJ4"
            },
            //计算距离
            distance() {
                var that = this
                var km = []
                for (var i = 0; i < that.merchant.length; i++) {
                    that.lat[i] = that.merchant[i].lat
                    that.lng[i] = that.merchant[i].lng
                    km[i] = that.getGreatCircleDistance(that.llat, that.llng,that.lat[i], that.lng[i])
                }
                return km
            },
            getGreatCircleDistance(lat1, lng1, lat2, lng2) {
                var EARTH_RADIUS = 6378137.0;
                var radLat1 = this.getRad(lat1);
                var radLat2 = this.getRad(lat2);
                var a = radLat1 - radLat2;
                var b = this.getRad(lng1) - this.getRad(lng2);
                var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) *
                    Math.pow(
                        Math.sin(b / 2), 2)));
                s = s * EARTH_RADIUS;
                s = Math.round(s * 10000) / 10000.0;
                s = parseInt(s/1000)
                return s;
            },
            getRad(d) {
                var PI = Math.PI;
                return d * PI / 180.0;
            }
        }
    }
</script>

<style>
    *{padding: 0;margin: 0;box-sizing: border-box;}
    .store{height: 100%;display: flex;flex-direction: column;}
    .index_shop{width: 100%;}
    .index_shop_title{width: 100%;padding:8px 15px;padding-top: 15px;border-bottom: 1px solid #EBEFF2;border-top:  1px solid #EBEFF2;display: flex;align-items: center;justify-content: space-between;}
    .index_shop_title>p{font-size: 14px;padding-left: 5px;border-left: 3px solid #D5622E;color: #333;font-weight: bold;}
    .index_shop_title>a{font-size: 14px;color: #999;}
    /* 附近商家内容 */
    .index_shop_cont{width: 100%;padding: 25px 15px;overflow: auto;}
    .index_shop_item{width: 100%;padding: 15px;box-shadow: 1px 1px 5px #ccc;border-radius: 10px;margin-bottom:15px;height: 110px;display: flex;}
    .around{display: flex;width: 75%;}
    /* 左侧内容 */
    .index_shop_picitem{width: 35%;}
    .index_shop_picitem img{width: 100%; height: 100%;}
    /* 中间内容 */
    .index_shop_textitem{width: 65%;display: flex;flex-direction: column;justify-content: space-around;align-items: start;border-right: 1px solid #DCDCDC;padding: 0px 10px;}
    /* 中间文字 */
    .index_centershop_toptitle{font-size: 13px;font-weight: bold;}
    .index_centershop_centertitle{font-size: 12px;color: #fb8e6c;border: 1px solid  #fb8e6c;padding: 0px 3px;border-radius: 15px;}
    .index_centershop_bottomtitle{font-size: 12px;color: #999; white-space: nowrap; overflow: hidden;text-overflow:ellipsis;width: 80%;}
    /* 右侧内容 */
    .last_a{width: 25%;display: flex;justify-content: center;align-items: center;}
    .index_shop_centertext{display: flex;align-items: center;}
    .index_shop_centertext img{width: 50%;height: 12px;margin-left: 5px;}
    .index_shop_righttext{width: 100%;text-align: center;}
    .index_shop_righttext img{width: 40px;margin-bottom: 6px;}
    .index_shop_righttext p{font-size: 12px;color:#00abee;}
</style>
