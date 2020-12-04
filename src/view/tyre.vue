<template>
    <div class="tyre_all">
        <div class="tyre_top">
            <div class="tyre_top_text">
                <ul>
                    <li>轮胎变形</li>
                    <li>轮胎被化学物质侵蚀</li>
                </ul>
                <span>详情<i class="iconfont icon-youjiantou"></i></span>
            </div>
            <div class="type_tope_ech">
                <div class="center_data" id="myChart">

                </div>
            </div>
        </div>
        <div class="tyre_center">
            <!-- echartd -->


            <div class="center_navigation" id="container">

            </div>
            <el-dialog :visible.sync="centerDialogVisible" width="90%" modal title="商户详情" :show-close="showcs"
                close-on-click-modal top=350px>
                <div class="shop" ref="total" v-for="(item,index) in merchant" :key="item.id" v-show="shows==item.id">
                    <div class="upper">
                        <div class="upper_img">
                            <img :src="item.banner" />
                        </div>
                        <div class="upper_text">
                            <div class="upper_text_top">
                                <p>{{item.name}}</p>
                                <a href="#" @click="toMap(item)"><img src="../../static/img/daohang.png">
                                    导航</a>
                            </div>
                            <div class="upper_text_score">
                                <p>快修店</p>
                                <p>{{item.star}}级</p>
                                <p><span>评分</span>{{item.star}}.0</p>
                            </div>
                            <div class="upper_text_phont">
                                <img src="../../static/img/phone.png">
                                <p>{{item.mobile}}</p>
                            </div>
                        </div>

                    </div>
                    <div class="center">
                        <div class="center_left">
                            <p>精选服务</p>
                        </div>
                        <div class="center_right" v-for="(item,index) in item.service">
                            <p>{{item}}</p>
                        </div>
                        <!-- <div class="center_right"><p>精洗</p></div>
                    <div class="center_right"><p>全车内饰清洗</p></div>
                    <div class="center_right"><p>打蜡</p></div> -->
                    </div>
                    <div class="bottom">
                        <div class="bottom_left">
                            <p>{{item.address}}</p>
                        </div>
                        <div class="bottom_right">
                            <router-link :to="{path:'/store_details',query:{ id:item.id }}">立即预约</router-link>
                        </div>
                    </div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tyre',
        data() {
            return {
                data: [],
                merchant: [],
                category: [],
                latitude: '',
                longitude: '',
                star: [1, 2, 3, 4, 5],
                detailimages: [],
                centerDialogVisible: false,
                shows: '',
                showcs: false,
                service: [],
                img: require('../../static/img/wash_weizhi.png'),
                llat: '',
                llng: '',
                name: [],
                value: []
            }
        },
        mounted: function() {
            this.$store.state.heard_title = '车平台 - 轮胎更换'
            var that = this
            var data
            this.$addr.get('/index/service/top10')
                .then(res => {
                    that.name = res.data.result.data.key
                    data =  res.data.result.data
                  data.forEach(function(item){
                      that.value.push({
                          name:item.key,
                          value:item.value
                      })
                  })
                  that.$nextTick(function(){
                      that.eacher()
                  })
                })

            // 定位
            var markerss
            var geolocation = new qq.maps.Geolocation();
            var options = {
                timeout: 600000
            };
            geolocation.getLocation(showPosition, showErr, options);

            function showPosition(position) {
                that.llat = position.lat,
                    that.llng = position.lng
            };

            function showErr() {
                console.log("定位失败")
            };
            that.$addr.get('index/service/tire')
                .then(res => {
                    // console.log(res.data.result)
                    that.data = res.data.result.data,
                        that.merchant = that.data.merchant,
                        that.category = that.data.category,
                        that.detailimages = that.data.detailimages
                    that.service = that.merchant.service
                    let center = new TMap.LatLng(that.llat, that.llng)
                    //定义map变量，调用 TMap.Map() 构造函数创建地图
                    let map = new TMap.Map(document.getElementById('container'), {
                        center: center, //设置地图中心点坐标
                        zoom: 11, //设置地图缩放级别
                        viewMode: '2D',
                    });
                    markerss = that.marker(that.merchant)
                    let marker = new TMap.MultiMarker({
                        id: 'container',
                        map: map,
                        styles: {
                            "marker": new TMap.MarkerStyle({
                                "width": 25,
                                "height": 35,
                                "anchor": {
                                    x: 16,
                                    y: 32
                                },
                                "src": that.img
                            })
                        },
                        geometries: markerss,

                    })
                    marker.on("click", that.shop)
                })
        },
        methods: {
            shop(evt) {
                console.log(evt)
                this.shows = evt.geometry.id
                this.centerDialogVisible = true
            },
            marker(ent) {
                let that = this
                let id = []
                let pos = [],
                    name = [],
                    str = '',
                    markers = []
                //console.log(ent[0].lat)
                //console.log(ent[i].lat)
                for (let i = 0; i < ent.length; i++) {
                    // that.marker(that.merchant[i])
                    let position = new TMap.LatLng(ent[i].lat, ent[i].lng)
                    pos[i] = position,
                        id[i] = ent[i].id
                    name[i] = ent[i].name
                    str = {
                        "id": id[i],
                        "position": pos[i],
                        "styleId": 'marker'
                    }
                    markers[i] = str
                }
                return markers
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
            eacher(){
                var that = this
                //echarts
                // 基于准备好的dom，初始化echarts实例
                let myChart = that.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                var option = {
                    title: {
                        text: '四大知名品牌市场占有率（%）',
                        left: 'center',
                        top: 5,
                        textStyle: {
                            color: '#000'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: "10",
                        top: "bottom",
                        data: that.name,
                    },
                    series: [{
                        name: '轮胎品牌',
                        type: 'pie',
                        center: ['80%', '60%'],
                        radius: "55%",
                        // center: ['50%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            // position: 'center'
                        },
                        roseType: 'radius',
                        emphasis: {
                            label: {
                                show: false,

                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data:that.value

                    }]
                }
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/tyre.css'
</style>
