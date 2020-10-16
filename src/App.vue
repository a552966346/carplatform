<template>
  <div id="app">
    <div class="top_heard">
        <span>{{this.$store.state.heard_title}}</span>
        <div>
               <router-link to='personal_center'>
                  <img src="../static/img/person_center_icon.png" alt="">
                  <span>个人中心</span>
               </router-link>
        </div>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="app-content"/>
  </div>
</template>

<script>
export default {
  name:'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* text-align: center; */
  color: #2c3e50;
/*  margin-top: 60px; */
}
.app-content{
 margin-top: 35px !important;
}
.top_heard{
  width: 100%;
  height: 35px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.top_heard a{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.top_heard a>span{
  padding-left: 5px;
}
.top_heard img{
  width:15px;
  height: 15px;
}
</style>
