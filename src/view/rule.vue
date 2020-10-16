<template>
  <div class="rule_all">
  	<p>一、适用范围</p>
  	<span>此积分既适用于该小程序使用。</span><br />
  	<span>最终解释权归商家所有。</span><br />
  	<p class="rule_all_p">二、获取积分</p>
  	<span>用户每天可以在微信小程序签到领积分。</span><br />
  	<span>购买商品领取积分，评价商品领取积分。</span><br />
  	<span>参加特定活动领取积分。</span><br />
  	<p class="rule_all_p">三、积分用途</p>
  	<span>用户可以通过积分兑换指定商品。</span><br />
  	<span>兑换优惠券，抵扣现金。</span><br />
  </div>
</template>

<script>
  export default {
    name: 'rule',
    data() {
      return {
        
      }
    },
    mounted:function(){
          this.$store.state.heard_title ='车平台 - 积分规则'
    },
  }
</script>

<style scoped>
  @import '../assets/css/rule.css'

</style>
