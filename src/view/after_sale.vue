<template>
    <div class="after_sale">
        <div class="after_sale_top">
            <img src="../../static/img/index_shop.png" alt="">
            <div class="after_sale_text">
                <p>吉达司汽油机油权和承诺SN5W40四季通用汽车发动机润滑油机油正品4L</p>
                <p><span>采购数量：</span><span>1</span></p>
                <p><span>商品菜单：</span><span>￥178.00</span></p>
                <p><span>实付款：</span><span>￥178.00</span></p>
            </div>
        </div>
        <div class="after_sale_center">
            <div class="after_sale_center_text">
                <p>换货</p>
                <p>退款</p>
                <p>退货退款</p>
            </div>
            <div class="after_sale_center_reason">
                <p>退款原因</p>
                <ul>
                    <li><span>包装破损</span><input type="radio" name="reason"></li>
                    <li><span>规格/款式/数量拍错</span><input type="radio" name="reason"></li>
                    <li><span>收货地址拍错</span><input type="radio" name="reason"></li>
                    <li><span>价格有点贵</span><input type="radio" name="reason"></li>
                    <li><span>暂时不需要了</span><input type="radio" name="reason"></li>
                    <li><span>其他</span><input type="radio" name="reason"></li>
                </ul>
                <p>补充说明<span>(选填)</span></p>
                <textarea rows="3" placeholder="请输入退款说明"></textarea>
                <p>上传图片<span>(选填)</span></p>
                <div class="layui-upload">
                    <button type="button" class="layui-btn" id="test1">上传图片</button>
                    <div class="layui-upload-list">
                        <img class="layui-upload-img" :src="result">
                        <p v-html="msg"></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                result:'',
                msg:''
            }
        },
        mounted() {
            this.shangchuan()
        },
        methods: {
           /* shangchuan() {
                var that = this
                layui.use('upload', function() {
                    var $ = layui.jquery,
                        upload = layui.upload;

                    //普通图片上传
                    var uploadInst = upload.render({
                        elem: '#test1',
                        url: 'https://httpbin.org/post' //改成您自己的上传接口
                            ,
                        before: function(obj) {
                            //预读本地文件示例，不支持ie8
                            obj.preview(function(index, file, result) {
                               that.result= result //图片链接（base64）
                            });
                        },
                        done: function(res) {
                            //如果上传失败
                            if (res.code > 0) {
                                return layer.msg('上传失败');
                            }
                            //上传成功
                        },
                        error: function() {
                            //演示失败状态，并实现重传
                              that.msg =  '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
                            demoText.find('.demo-reload').on('click', function() {
                                uploadInst.upload();
                            });
                        }
                    });
                });
            } */
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .after_sale {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }

    .after_sale_top {
        padding: 10px;
        display: flex;
    }

    .after_sale_top>img {
        height: 110px;
    }

    .after_sale_text {
        padding-left: 15px;
    }

    .after_sale_text>p {
        font-size: 13px;
    }

    .after_sale_text>p:nth-child(1) {
        font-weight: bold;
    }

    .after_sale_text>p>span:nth-child(1) {
        color: #aaa;
    }

    .after_sale_text>p:nth-child(2) {
        padding: 10px 0;
    }

    .after_sale_text>p:last-child {
        display: flex;
        justify-content: flex-end;
        padding-top: 20px;
    }

    .after_sale_text>p:last-child>span:last-child {
        color: #EE4646;
    }

    .after_sale_center {
        flex: 1;
    }

    .after_sale_center_text {
        display: flex;
        justify-content: space-between;
        border-top: 5px solid #F1F1F1;
        border-bottom: 5px solid #F1F1F1;
    }

    .after_sale_center_text>p {
        padding: 10px;
    }

    .after_sale_center_reason {
        padding: 10px;
    }

    .after_sale_center_reason>p {
        font-size: 13px;
        font-weight: bold;
        padding-bottom: 10px;
    }

    .after_sale_center_reason>p>span {
        color: #ccc;
        padding-left: 5px;
    }

    .after_sale_center_reason>ul {
        padding: 10px;
    }

    .after_sale_center_reason>ul>li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 2;
        color: #323232;
        font-size: 12px;
    }

    .after_sale_center_reason>textarea {
        width: 100%;
        padding: 5px;
        border: none;
        background: #F4F4F4;
        resize: none;
        overflow: auto;
    }
</style>
