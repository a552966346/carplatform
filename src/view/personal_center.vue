<template>
    <!--刘玉霞 -->
    <div class="personal_center">
        <!-- 黑色块内容 -->
        <div class="personalcenter_top">
            <!-- 登录资料 -->
            <div class="personalcenter_top_login">
                <div class="personalcenter_top_loginimg">
                    <img :src="avatar">
                    <div class="vip">
                        <img src='../../static/img/VIP.png'>
                    </div>
                </div>
                <div class="personalcenter_top_logintext">
                    <p>{{nickname}}</p>
                    <!--<p>上次登录<span style="padding-left: 10px;">2020-02-02</span></p>-->
                </div>
                <div class="top_top_set">
                   <!-- <a href="#">设置</a> -->
                </div>
            </div>
            <!-- 我的 -->
            <div class="personalcenter_bottom">
                <a href="#" @click="integral">
                    <div class="personalcenter_bottom_item">
                        <!-- <p>5</p>
                        <p>积分</p> -->
                    </div>
                </a>
                <a href="#" @click="agency">
                    <div class="personalcenter_bottom_item">
                        <p>0</p>
                        <p>待办</p>
                    </div>
                </a>
                <a href="#" @click="appointment">
                    <div class="personalcenter_bottom_item">
                        <p>0</p>
                        <p>我的预约</p>
                    </div>
                </a>
                <a href="#" @click="coupon">
                    <div class="personalcenter_bottom_item">
                        <!-- <p><img src="../../static/img/personalcenter_coupon.png"></p>
                        <p>票券</p> -->
                    </div>
                </a>
            </div>
        </div>
        <!--白色块内容-->
        <div class="personalcenter_cont">
            <!-- 广告 -->
            <div class="personalcenter_cont_news">
                <div class="personalcenter_cont_scoll">
                    <div>
                        <p class="dian"></p>
                    </div>
                    <marquee>
                        <p class="word">顺通广大,为您提供全方位的汽车服务</p>
                    </marquee>
                </div>
            </div>
            <!-- 我的订单模块 -->
            <div class="personalcenter_cont_order">
                <!-- 我的订单 -->
                <div class="dingdan">
                    <div class="dingdan_top">
                        <a href="" @click="order">
                            <p>我的订单</p>
                            <p><span>全部订单</span><i class="iconfont icon-youjiantou"></i></p>
                        </a>
                    </div>
                    <div class="dingdan_center">
                        <div class="dingdan_center_a">
                            <a href="#" @click="payment">
                                <img src="../../static/img/personal_center_pay.png">
                                <p>待付款</p>
                            </a>
                            <i class="iconfont icon-youjiantou"></i>
                        </div>
                        <div class="dingdan_center_a">
                            <a href="#" @click="delivered">
                                <img src="../../static/img/personal_center_delivered.png">
                                <p>待发货</p>
                            </a>
                            <i class="iconfont icon-youjiantou"></i>
                        </div>
                        <div class="dingdan_center_a">
                            <a href="#" @click="receive">
                                <img src="../../static/img/personal_center_receive.png">
                                <p>待收货</p>
                            </a>
                            <i class="iconfont icon-youjiantou"></i>
                        </div>
                        <div class="dingdan_center_a">
                            <a href="#" @click="evaluated">
                                <img src="../../static/img/personal_center_evaluated.png">
                                <p>待评价</p>
                            </a>
                            <i class="iconfont icon-youjiantou"></i>
                        </div>
                        <div class="dingdan_center_a">
                            <a href="#" @click="refund">
                                <img src="../../static/img/personal_center_refund.png">
                                <p>退款/售后</p>
                            </a>
                            <i class="iconfont icon-youjiantou"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'personal_center',
        data() {
            return {
                msg: 'personal_center',
                avatar: "../../static/img/portrait.jpg",
                nickname: "未登录"
            }
        },
        mounted: function() {
            this.$store.state.heard_title = '车平台 - 个人中心';
            var token = localStorage.getItem("token");
            this.$addr.post('/index/index/userInfo', {
                    token: token
                })
                .then(res => {
                    this.avatar = res.data.result.user.avatar;
                    this.nickname = res.data.result.user.nickname;
                })

        },
        methods: {
            //积分
            integral: function() {
                this.$router.push({
                    name: 'integral',
                })
            },
            //待办
            agency: function() {
                this.$router.push({
                    name: 'news',
                })
            },
            //我的预约
            appointment: function() {
                this.$router.push({
                    name: 'isdetails',
                })
            },
            //券票
            coupon: function() {
                this.$router.push({
                    name: '',
                })
            },
            //全部订单
            order: function() {
                this.$router.push({
                    path: 'order',
                })
            },
            //待付款
            payment: function() {
                this.$router.push({
                    name: 'order',
                })
            },
            //代发货
            delivered: function() {
                this.$router.push({
                    name: 'order',
                })
            },
            //待收货
            receive: function() {
                this.$router.push({
                    name: 'order',
                })
            },
            //待评价
            evaluated: function() {
                this.$router.push({
                    path: 'order',
                })
            },
            refund() {
                this.$router.push({
                    path: 'after_sale',
                })
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/css/personal_center.css'
</style>
